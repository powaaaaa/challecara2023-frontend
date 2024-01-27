/* eslint-disable */
import type * as Types from '@/libs/@types/api';

export type Methods = {
  post: {
    // reqFormat: FormData;
    reqBody: Types.SignInPayload;
    resBody: Types.SignInResponse;
  };
};
