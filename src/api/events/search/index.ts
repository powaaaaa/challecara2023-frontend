/* eslint-disable */
import type * as Types from '@/api/@types';

export type Methods = {
  get: {
    /** access_tokenをheaderに挿入 */
    reqHeaders: { Authorization: string };
    query: Types.SearchEventsQuery;
    resBody: Types.SearchEventsResponse;
  };
};
