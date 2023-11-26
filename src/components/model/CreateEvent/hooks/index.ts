// import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import axios from 'axios';

type WithRange = never;

type IUseCreateEvent = {
  uploadThumbnail: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  const [eventThumbnail, setEventThumbnail] = useState<File | null>();
  const [eventTitle, setEventTitle] = useState<string>('');
  const [participantsNumber, setParticipantsNumber] = useState<number>();
  const [dateRange, setDateRange] = useState([new Date(), new Date()]);
  const [startDate, endDate] = dateRange;
  const [eventInfo, setEventInfo] = useState<string>('');
  const [eventId, setEventId] = useState<string>('');

  const uploadThumbnail = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target?.files;
    if (file && file[0]) {
      setEventThumbnail(file[0]);
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
    const partNumber = event.target.valueAsNumber;
    if (partNumber) {
      setParticipantsNumber(partNumber);
    }
  };

  const changeEventTerm = (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ): void => {
    if (Array.isArray(date)) {
      // nullをフィルタリングして新しいDateの配列を作成
      const newDateRange = date.filter((d) => d !== null) as Date[];
      // 新しいDateの配列をセット
      setDateRange(newDateRange);
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

  // const sendCreateEvent = useCallback(async (): Promise<void> => {
  //   if (
  //     !eventThumbnail &&
  //     !eventTitle &&
  //     !participantsNumber &&
  //     !eventInfo &&
  //     !eventId
  //   ) {
  //     return;
  //   }
  //   await axios
  //     .post('http://localhost:8000/api/event/draft', {
  //       administrator_id: 'admin', // administratorId,
  //       title: eventTitle,
  //       image_url: eventThumbnail,
  //       tags: ['one', 'two'], // eventTags,
  //       winning_number: participantsNumber,
  //       start_time: 1701442800, // eventStartTime,
  //       end_time: 1701486000, // eventEndTime,
  //       detail: eventInfo,
  //       id: eventId,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, [eventThumbnail, eventTitle, participantsNumber, eventInfo, eventId]);

  const useSendCreateEvent = (): void => {
    try {
      useEffect(() => {
        const postCreateEvent = async (): Promise<void> => {
          if (
            !eventThumbnail &&
            !eventTitle &&
            !participantsNumber &&
            !eventInfo &&
            !eventId
          ) {
            return;
          }
          await axios
            .post('http://localhost:8000/api/event/draft', {
              administrator_id: 'admin', // administratorId,
              title: eventTitle,
              image_url: eventThumbnail,
              tags: ['one', 'two'], // eventTags,
              winning_number: participantsNumber,
              start_time: 1701442800, // eventStartTime,
              end_time: 1701486000, // eventEndTime,
              detail: eventInfo,
              id: eventId,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        };
        postCreateEvent;
      }, []);
    } catch (error) {
      setErrorText('イベント作成データの送信に失敗しました.');
    }
  };

  return {
    uploadThumbnail,
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
