// import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { getUnixTime } from 'date-fns';

import type * as Types from '@/api/@types';

import { getImageUrl, uploadImage } from '@/hooks/uploadImage';
import { apiClient } from '@/libs/apiClients';

type WithRange = never;

type IUseCreateEvent = {
  changeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeEventTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  useSendCreateEvent: () => void;
  errorText: string;
  // setState: Dispatch<SetStateAction<string>>;
};

export const useCreateEvent = (): IUseCreateEvent => {
  const [errorText, setErrorText] = useState<string>('Sample error text');
  const [eventImage, setEventImage] = useState<File>();
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
    console.log(startDate)
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
            tags: ['one', 'two'],
            winning_number: participantsNumber,
            start_time: postStartDate,
            end_time: postEndDate,
            detail: eventInfo,
            id: eventId,
          };

          await fetchEvent(reqBody);
        } catch (error) {
          setErrorText('イベント作成データの送信に失敗しました.');
        }
      };

      fetchData().catch((error) => {
        console.error('fetchData関数内でエラーが発生しました:', error);
      });
    }, []);
  };

  return {
    changeImage,
    changeEventTitle,
    changeParticipantsNumber,
    startDate,
    endDate,
    changeEventTerm,
    changeEventInfo,
    changeEventId,
    useSendCreateEvent,
    errorText,
  };
};
