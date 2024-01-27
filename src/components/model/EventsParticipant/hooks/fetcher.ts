'use client';

import useSWR from 'swr';

import type { SelectTagItem } from '@/libs/@types';
import type * as Api from '@/libs/@types/api';
import type { KeyedMutator } from 'swr';

import { instance } from '@/hooks/api';

export const defaultQuery = {
  keyword: '',
  tags: [''],
};

const fetchEventsList = async (
  path: string,
  query: Api.SearchEventsQuery
): Promise<Api.EventParticipantResponse> => {
  if (query !== defaultQuery) {
    const res = await instance.get<Api.EventParticipantResponse>(path, {
      params: query,
    });
    console.log('res (with query): ', res);
    return res.data;
  } else {
    const res = await instance.get<Api.EventParticipantResponse>(path);
    console.log('res: ', res);
    return res.data;
  }
};

// useSWR
type IFetchEventList = {
  data: Api.EventParticipantResponse | undefined;
  // error: Error | undefined;
  isLoading: boolean;
  mutate: KeyedMutator<Api.EventParticipantResponse>;
  // handleChangeQuery: Dispatch<Api.SearchEventsQuery>;
};

export const useFetchEventList = (
  query: Api.SearchEventsQuery
): IFetchEventList => {
  const { data, isLoading, mutate } = useSWR(
    ['/events/participant', query],
    ([path, query]) => fetchEventsList(path, query)
    // {
    //   suspense: true,
    // }
  );

  // const handleChangeQuery = (q: Api.SearchEventsQuery): void => {
  //   setQuery(q);
  // };
  return { data, isLoading, mutate };
};

export const useSWRTags = (
  initialTags: SelectTagItem[]
): [
  SelectTagItem[] | undefined,
  (updateTags: SelectTagItem[] | undefined) => void,
] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: tagList, mutate: setTagList } = useSWR('tagsList', null, {
    fallbackData: initialTags,
  });
  return [tagList as SelectTagItem[], setTagList];
};

export const useSWREvents = (
  initialEvents: Api.EventListItem[]
): [
  Api.EventListItem[] | undefined,
  (updateEvents: Api.EventListItem[] | undefined) => void,
] => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { data: eventList, mutate: setEventList } = useSWR('eventList', null, {
    fallbackData: initialEvents,
  });
  return [eventList as Api.EventListItem[], setEventList];
};
