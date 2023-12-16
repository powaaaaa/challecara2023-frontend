import type React from 'react';
import { useEffect, useState } from 'react';

import { getUnixTime } from 'date-fns';
import { useRouter } from 'next/navigation';

import type * as Types from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { getImageUrl, uploadImage } from '@/hooks/uploadImage';
import { apiClient } from '@/libs/apiClients';

type WithRange = never;

type IUseCreateEvent = {
  changeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeEventTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeEventTags: (
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ) => void;
  tagList: SelectTagItem[] | undefined;
  changeParticipantsNumber: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
  changeEventTerm: (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ) => void;
  changeEventInfo: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  changeEventId: (event: React.ChangeEvent<HTMLInputElement>) => void;
  HandleSubmitNewEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useCreateEvent = (): IUseCreateEvent => {
  const router = useRouter();
  const [fetchData, setFetchData] = useState<Types.EventResponse | null>(null);
  const [eventImage, setEventImage] = useState<File>();
  const [tagList, setTagList] = useState<SelectTagItem[]>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [participantsNumber, setParticipantsNumber] = useState<string>();
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

  const changeEventTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const title = event.target.value;
    if (title) {
      setEventTitle(title);
    }
  };

  const fetchTags = async (): Promise<Types.TagsResponse> =>
    await apiClient.event.tags.$get();

  const createTagList = async (): Promise<SelectTagItem[]> => {
    const tagsData = await fetchTags();
    const List: SelectTagItem[] = tagsData.tags.map((item) => ({
      id: item.uuid,
      label: item.name,
      selected: false,
    }));
    return List;
  };

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
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ): void => {
    const selectedTag = event.currentTarget as SelectTagItem;

    // tagListから特定のtagItemを選択して、selectedをtrueに変更
    const updatedTagList = tagList?.map((tagItem) => {
      if (tagItem.id === selectedTag.id) {
        return { ...tagItem, selected: true };
      }
      return tagItem;
    });

    setTagList(updatedTagList);
  };

  const changeParticipantsNumber = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const partNumber = event.target.value;
    if (partNumber) {
      setParticipantsNumber(partNumber);
    }
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

  const changeEventInfo = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    const info = event.target.value;
    if (info) {
      setEventInfo(info);
    }
  };

  const changeEventId = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const id = event.target.value;
    if (id) {
      setEventId(id);
    }
  };

  const fetchEvent = async (body: Types.DraftEventPayload): Promise<void> =>
    await apiClient.event.draft.$post({ body });

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

  const useSendCreateEvent = (): void => {
    useEffect(() => {
      const fetchData = async (): Promise<void> => {
        try {
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

          const image_url = await fetchImage(eventImage, eventId);
          if (!image_url) {
            console.error(
              '画像の取得に失敗したためイベント作成は中止されました'
            );
            return;
          }

          const reqBody: Types.DraftEventPayload = {
            administrator_id: 'admin',
            title: eventTitle,
            image_url: image_url,
            tags: tagList.map((tag) => tag.label),
            winning_number: participantsNumber,
            start_time: postStartDate,
            end_time: postEndDate,
            detail: eventInfo,
            id: eventId,
          };

          await fetchEvent(reqBody);
        } catch (error) {
          console.error('イベント作成データの送信に失敗しました.', error);
        }
      };

      fetchData().catch((error) => {
        console.error('fetchData関数内でエラーが発生しました:', error);
      });
    }, []);
  };

  const updateFetchEvent = async (path: string): Promise<Types.EventResponse> =>
    await apiClient.event._id(path).$get();

  const useUpdateFetchEvent = (): void => {
    useEffect(() => {
      if (fetchData === null) {
        return;
      }
      const fetch = async (): Promise<Types.EventResponse | void> => {
        try {
          if (fetchData.event.id === undefined) {
            console.error('不正なイベントIDです');
            return;
          }

          const path: string = fetchData.event.id;
          const data: Types.EventResponse = await updateFetchEvent(path);
          setFetchData(data);
        } catch (error) {
          console.error('イベントデータの更新に失敗しました: ', error);
          return;
        }
      };

      fetch().catch((error) => {
        console.error('fetch関数内でエラーが発生しました: ', error);
      });
    });
  };

  const HandleSubmitNewEvent = (): void => {
    useSendCreateEvent();
    useUpdateFetchEvent();

    sessionStorage.setItem('EventResponse', JSON.stringify(fetchData));
    router.push(`/Event/${eventId}`);
  };

  return {
    changeImage,
    changeEventTitle,
    changeEventTags,
    tagList,
    changeParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    changeEventInfo,
    changeEventId,
    HandleSubmitNewEvent,
  };
};
