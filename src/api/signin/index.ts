/* eslint-disable */
import type * as Types from '@/api/@types';

export type Methods = {
  post: {
    // reqFormat: FormData;
    reqBody: Types.SignInPayload;
    resBody: Types.SignInResponse;
  };
};
