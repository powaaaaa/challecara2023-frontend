'use client';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import type {
  EventListItem,
  EventParticipantResponse,
  SearchEventsQuery,
} from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { Axios } from '@/libs/apiClients';

type IUseEventsParticipant = {
  eventListItem: EventListItem[];
  tagList: SelectTagItem[];
  changeEventTag: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
  eventKeyword: string;
  setEventKeyword: Dispatch<SetStateAction<string>>;
  HandleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onClickEventCard: (
    event: React.MouseEvent<HTMLButtonElement>,
    tag: EventListItem
  ) => void;
};

export const useEventsParticipant = (): IUseEventsParticipant => {
  const router = useRouter();
  const [eventKeyword, setEventKeyword] = useState<string>('');
  const [fetchData, setFetchData] = useState<EventParticipantResponse | null>();
  const [eventListItem, setEventListItem] = useState<EventListItem[]>([]);
  const [tagList, setTagList] = useState<SelectTagItem[]>([]);

  type SearchEventsResponse = EventParticipantResponse;

  const fetchEventsList = async (): Promise<EventParticipantResponse> =>
    // await apiClient.events.participant.$get();
    await Axios.get('/events/participant');

  const fetchSearchEvents = async (
    query: SearchEventsQuery
  ): Promise<SearchEventsResponse> =>
    // await apiClient.events.search.$get({ query });
    await Axios.get('/events/search', { params: query });

  // TODO 12/27 useEffect見直し
  useEffect(() => {
    const abortController = new AbortController();
    // const fetch = async (): Promise<void> => {
    //   try {
    //     const data = await fetchEventList();
    //     setFetchData(data);
    //   } catch (error) {
    //     console.error('抽選リストの取得に失敗しました: ', error);
    //     return;
    //   }
    // };
    // fetch().catch((error) => {
    //   console.error('fetch関数内でエラーが発生しました: ', error);
    // });
    fetchEventsList()
      .then((res) => {
        console.log('イベントListの情報げと');
        setFetchData(res);
        if (fetchData) {
          setEventListItem(fetchData.events);
          const tags: SelectTagItem[] = fetchData.tags.map((tag) => ({
            id: tag.uuid,
            label: tag.name,
            selected: false,
          }));
          setTagList(tags);
        }
      })
      .catch((e) => console.error('fetchに失敗しました: ', e));

    return () => {
      abortController.abort();
    };
  });

  const changeEventTag = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ): void => {
    event.preventDefault();

    // tagListから特定のtagItemを選択して、selectedをtrueに変更
    const updatedTagList = tagList?.map((tag) => {
      if (tag.id === item.id) {
        return { ...tag, selected: true };
      }
      return tag;
    });

    setTagList(updatedTagList);
  };

  const HandleSearchEvent = (): void => {
    const selectedTags = tagList.filter((tag) => tag.selected);

    const searchQuery: SearchEventsQuery = {
      keyword: eventKeyword,
      tags: selectedTags.map((tag) => tag.label),
    };

    fetchSearchEvents(searchQuery)
      .then((res) => {
        console.log('検索情報げと');
        console.log('res: ', res);
        setFetchData(res);

        if (fetchData) {
          setEventListItem(fetchData.events);
          const updateTags: SelectTagItem[] = fetchData.tags.map((tag) => ({
            id: tag.uuid,
            label: tag.name,
            selected: selectedTags.some((sItem) => sItem.id === tag.uuid),
          }));
          setTagList(updateTags);
        }
      })
      .catch((error) => {
        console.log('Error: ', error);
        alert('データの取得に失敗しました。');
      });
  };

  const onClickEventCard = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: EventListItem
  ): void => {
    event.preventDefault();
    router.push(`/event/${item.id}`);
  };

  return {
    eventListItem,
    tagList,
    changeEventTag,
    eventKeyword,
    setEventKeyword,
    HandleSearchEvent,
    onClickEventCard,
  };
};
