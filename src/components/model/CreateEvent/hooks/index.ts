'use client';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { getUnixTime } from 'date-fns';
import { useRouter } from 'next/navigation';

import type * as Types from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { getImageUrl, uploadImage } from '@/hooks/uploadImage';
import { Axios } from '@/libs/apiClients';

type WithRange = never;

type IUseCreateEvent = {
  changeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEventTitle: Dispatch<SetStateAction<string>>;
  changeEventTags: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
  tagList: SelectTagItem[] | undefined;
  setParticipantsNumber: Dispatch<SetStateAction<string>>;
  startDate: Date | undefined;
  endDate: Date | undefined;
  changeEventTerm: (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ) => void;
  setEventInfo: Dispatch<SetStateAction<string>>;
  setEventId: Dispatch<SetStateAction<string>>;
  handleSubmitNewEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useCreateEvent = (): IUseCreateEvent => {
  const router = useRouter();
  const [eventImage, setEventImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState<string>('');
  const [tagList, setTagList] = useState<SelectTagItem[]>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [participantsNumber, setParticipantsNumber] = useState<string>('');
  const [dateRange, setDateRange] = useState<Date[]>([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [postStartDate, setPostStartDate] = useState<string>();
  const [postEndDate, setPostEndDate] = useState<string>();
  const [eventInfo, setEventInfo] = useState<string>('');
  const [eventId, setEventId] = useState<string>('');

  const changeImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target?.files;
    if (file && file[0]) {
      setEventImage(file[0]);
    }
  };

  const fetchTags = async (): Promise<Types.TagsResponse> =>
    // await apiClient.event.tags.$get();
    await Axios.get('/event/tags');

  const createTagList = async (): Promise<SelectTagItem[]> => {
    const tagsData = await fetchTags();
    const List: SelectTagItem[] = tagsData.data.tags.map((item) => ({
      id: item.uuid,
      label: item.name,
      selected: false,
    }));
    return List;
  };

  // TODO useEffect
  useEffect(() => {
    createTagList()
      .then((List) => {
        setTagList(List);
      })
      .catch((error) => {
        console.error('タグの取得時にエラーが発生しました: ', error);
      });
  });

  const changeEventTags = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ): void => {
    event.preventDefault();
    // tagListから特定のtagItemを選択して、selectedをtrueに変更
    const updatedTagList = tagList?.map((tagItem) => {
      if (tagItem.id === item.id) {
        return { ...tagItem, selected: true };
      }
      return tagItem;
    });

    setTagList(updatedTagList);
  };

  const changeEventTerm = (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ): void => {
    console.log(startDate);
    if (Array.isArray(date)) {
      // nullをフィルタリングして新しいDateの配列を作成
      const newDateRange = date.filter((d) => d !== null) as Date[];
      // 新しいDateの配列をセット
      setDateRange(newDateRange);
      console.log(dateRange);
      if (startDate !== undefined && endDate !== undefined) {
        setPostStartDate(getUnixTime(startDate).toString());
        setPostEndDate(getUnixTime(endDate).toString());
      }
    } else {
      // 単一のDateオブジェクトまたはnullの場合、新しいDateの配列を作成してセット
      // setDateRange(date !== null ? [date, date] : [new Date(), new Date()]);
      alert('募集期間の選択に失敗しました');
    }
  };

  const fetchEvent = async (body: Types.DraftEventPayload): Promise<void> =>
    // await apiClient.event.draft.$post({ body });
    await Axios.post('/event/draft', body);

  const fetchImage = async (
    file: File,
    eventId: string
  ): Promise<string | null> => {
    try {
      await uploadImage(eventId, file).then((snapshot) => {
        console.log('画像アップロードに成功しました: ', snapshot);
      });
      const url = await getImageUrl(eventId);
      return url;
    } catch (error) {
      console.error('画像アップロードまたはURL取得に失敗しました: ', error);
      return null;
    }
  };

  const handleSubmitNewEvent = (): void => {
    if (
      eventImage === undefined ||
      tagList === undefined ||
      participantsNumber === undefined ||
      postStartDate === undefined ||
      postEndDate === undefined
    ) {
      alert('全て入力して下さい');
      return;
    }

    fetchImage(eventImage, eventId)
      .then((res) => {
        if (!res) {
          throw new Error(
            '画像の取得に失敗したためイベント作成は中止されました'
          );
        }
        setImageUrl(res);
      })
      .catch((error) => {
        console.error(error);
      });

    const reqBody: Types.DraftEventPayload = {
      administrator_id: 'admin',
      title: eventTitle,
      image_url: imageUrl,
      tags: tagList.map((tag) => tag.label),
      winning_number: participantsNumber,
      start_time: postStartDate,
      end_time: postEndDate,
      detail: eventInfo,
      id: eventId,
    };

    fetchEvent(reqBody)
      .then(() => {
        console.log('イベント作成done');
        router.push(`/event/${eventId}`);
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('イベントを作成出来ませんでした。');
      });
  };

  return {
    changeImage,
    setEventTitle,
    changeEventTags,
    tagList,
    setParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    setEventInfo,
    setEventId,
    handleSubmitNewEvent,
  };
};
