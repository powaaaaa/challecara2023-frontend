/* eslint-disable */
import type * as Types from '@/api/@types';

export type Methods = {
  post: {
    /** access_tokenをheaderに挿入 */
    reqHeaders: { Authorization: string };
    reqBody: Types.PublishEventPayload;
  };
};
