/* eslint-disable */
import type * as Types from '@/libs/@types/api';

export type Methods = {
  get: {
    /** access_tokenをheaderに挿入 */
    reqHeaders: { Authorization: string };
    resBody: Types.EventAdministratorResponse;
  };
};
