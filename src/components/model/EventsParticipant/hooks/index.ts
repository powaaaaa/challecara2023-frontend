import type React from 'react';
import { useEffect, useState } from 'react';

import type {
  EventListItem,
  EventParticipantResponse,
  SearchEventsQuery,
} from '@/api/@types';
import type { SelectTagItem } from '@/libs/@types';

import { apiClient } from '@/libs/apiClients';

type IUseEventsParticipant = {
  eventListItem: EventListItem[];
  tagList: SelectTagItem[];
  changeEventTags: (
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ) => void;
  changeKeyword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useEventsParticipant = (): IUseEventsParticipant => {
  const [inputValue, setInputValue] = useState<string>('');
  const [fetchData, setFetchData] = useState<EventParticipantResponse | null>();
  const [eventListItem, setEventListItem] = useState<EventListItem[]>([]);
  const [tagList, setTagList] = useState<SelectTagItem[]>([]);

  type SearchEventsResponse = EventParticipantResponse;

  const fetchEventList = async (): Promise<EventParticipantResponse> =>
    await apiClient.events.participant.$get();

  const fetchSearchEvents = async (
    query: SearchEventsQuery
  ): Promise<SearchEventsResponse> =>
    await apiClient.events.search.$get({ query });

  useEffect(() => {
    const fetch = async (): Promise<void> => {
      try {
        const data = await fetchEventList();
        setFetchData(data);
      } catch (error) {
        console.error('抽選リストの取得に失敗しました: ', error);
        return;
      }
    };

    fetch().catch((error) => {
      console.error('fetch関数内でエラーが発生しました: ', error);
    });
  });

  useEffect(() => {
    if (fetchData === null || fetchData === undefined) {
      return;
    }
    setEventListItem(fetchData.events);
    const tags: SelectTagItem[] = fetchData.tags.map((item) => ({
      id: item.uuid,
      label: item.name,
      selected: false,
    }));
    setTagList(tags);
  }, [fetchData]);

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

  const changeKeyword = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event?.target.value);
  };

  // handleSearchEvent関数内で状態を使用
  const SearchEvent = async (): Promise<void> => {
    const selectedTags = tagList
      .filter((item) => item.selected)
      .map((item) => item.label);

    // APIリクエストの作成（エンドポイントとリクエストの形式によります）
    const query = {
      keyword: inputValue,
      tags: selectedTags,
    };

    const searchData = await fetchSearchEvents(query);
    setFetchData(searchData);
  };

  const handleSearchEvent = (event: React.MouseEvent): void => {
    event.preventDefault();

    SearchEvent().catch((error) => {
      console.error('リクエストの送信に失敗しました: ', error);
    });
  };

  return {
    eventListItem,
    tagList,
    changeEventTags,
    changeKeyword,
    handleSearchEvent,
  };
};
