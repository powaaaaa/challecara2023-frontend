'use client';

import type React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { defaultQuery, useFetchEventList } from './fetcher';

import type { SelectTagItem } from '@/libs/@types';
import type * as Api from '@/libs/@types/api';

type IUseEventsParticipant = {
  // error: Error | undefined;
  isLoading: boolean;
  eventListItem: Api.EventListItem[];
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
    tag: Api.EventListItem
  ) => void;
};

export const useEventsParticipant = (): IUseEventsParticipant => {
  const router = useRouter();
  const [query, setQuery] = useState<Api.SearchEventsQuery>(defaultQuery);
  const [eventKeyword, setEventKeyword] = useState<string>('');
  const { data, isLoading, mutate } = useFetchEventList(query);

  const defaultEventItem = [
    {
      id: '',
      title: '',
      image_url: '',
      administrator_id: '',
      start_time: '',
      end_time: '',
    },
  ];

  const defaultTagList = [
    {
      id: '',
      label: '',
      selected: false,
    },
  ];

  const [tagList, setTagList] = useState<SelectTagItem[]>(defaultTagList);
  const [eventList, setEventList] =
    useState<Api.EventListItem[]>(defaultEventItem);

  useEffect(() => {
    // dataが変更された場合の処理
    if (data) {
      const updatedEventList = data.events;
      const updatedTagList = data.tags?.map((tag) => ({
        id: tag.uuid,
        label: tag.name,
        selected: false,
      }));

      setEventList(updatedEventList);
      setTagList(updatedTagList);
    }
  }, [data]);

  // const [tagList, setTagList] = useSWRTags(
  //   data?.tags?.map((tag) => ({
  //     id: tag.uuid,
  //     label: tag.name,
  //     selected: false,
  //   }))
  // );

  // const [eventList, setEventList] = useSWREvents(data?.events);

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

  const HandleSearchEvent = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    event.preventDefault();
    const selectedTags = tagList?.filter((tag) => tag.selected);
    const tagsLabel = selectedTags?.map((tag) => tag.label);

    const searchQuery: Api.SearchEventsQuery = {
      keyword: eventKeyword,
      tags: tagsLabel,
    };
    setQuery(searchQuery);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    mutate();
    // const { data } = useFetchEventList(query);
    // setEventList(data?.events ?? defaultEventItem);
    // const updateTags = data?.tags.map((tag) => ({
    //   id: tag.uuid,
    //   label: tag.name,
    //   selected: selectedTags?.some((sItem) => sItem.id === tag.uuid),
    // }));
    // setTagList(updateTags ?? defaultTagList);
  };

  const onClickEventCard = (
    event: React.MouseEvent<HTMLButtonElement>,
    item: Api.EventListItem
  ): void => {
    event.preventDefault();
    router.push(`/event/${item.id}`);
  };

  return {
    // error,
    isLoading,
    eventListItem: eventList,
    tagList: tagList,
    changeEventTag,
    eventKeyword,
    setEventKeyword,
    HandleSearchEvent,
    onClickEventCard,
  };
};
