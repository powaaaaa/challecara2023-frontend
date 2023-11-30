/* eslint-disable */
import type * as Types from '@/api//@types';

export type Methods = {
  get: {
    resBody: Types.ReceiptResponse;
  };
  post: {
    reqBody: Types.ReceiptPayload;
  };
};
