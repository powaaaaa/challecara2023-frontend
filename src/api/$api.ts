import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods_1rq3rau } from './event';
import type { Methods as Methods_10xwc1i } from './event/_id@string';
import type { Methods as Methods_8jam25 } from './event/_id@string/receipt';
import type { Methods as Methods_1klckca } from './event/_id@string/receipts';
import type { Methods as Methods_d7g2dv } from './event/_id@string/results';
import type { Methods as Methods_17tf88m } from './event/draft';
import type { Methods as Methods_1pk7vay } from './event/publish';
import type { Methods as Methods_iht77y } from './event/tags';
import type { Methods as Methods_9i3h59 } from './events/administrator';
import type { Methods as Methods_hvrpot } from './events/participant';
import type { Methods as Methods_176zpos } from './events/search';
import type { Methods as Methods_1oqkkb0 } from './signin';
import type { Methods as Methods_1smttma } from './signup';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/event';
  const PATH1 = '/receipt';
  const PATH2 = '/receipts';
  const PATH3 = '/results';
  const PATH4 = '/event/draft';
  const PATH5 = '/event/publish';
  const PATH6 = '/event/tags';
  const PATH7 = '/events/administrator';
  const PATH8 = '/events/participant';
  const PATH9 = '/events/search';
  const PATH10 = '/signin';
  const PATH11 = '/signup';
  const GET = 'GET';
  const POST = 'POST';

  return {
    event: {
      _id: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`;

        return {
          receipt: {
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            get: (option: {
              headers: Methods_8jam25['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_8jam25['get']['resBody']>(
                prefix,
                `${prefix1}${PATH1}`,
                GET,
                option
              ).json(),
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            $get: (option: {
              headers: Methods_8jam25['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_8jam25['get']['resBody']>(
                prefix,
                `${prefix1}${PATH1}`,
                GET,
                option
              )
                .json()
                .then((r) => r.body),
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            post: (option: {
              body: Methods_8jam25['post']['reqBody'];
              headers: Methods_8jam25['post']['reqHeaders'];
              config?: T | undefined;
            }) => fetch(prefix, `${prefix1}${PATH1}`, POST, option).send(),
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            $post: (option: {
              body: Methods_8jam25['post']['reqBody'];
              headers: Methods_8jam25['post']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch(prefix, `${prefix1}${PATH1}`, POST, option)
                .send()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH1}`,
          },
          receipts: {
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            get: (option: {
              headers: Methods_1klckca['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_1klckca['get']['resBody']>(
                prefix,
                `${prefix1}${PATH2}`,
                GET,
                option
              ).json(),
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            $get: (option: {
              headers: Methods_1klckca['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_1klckca['get']['resBody']>(
                prefix,
                `${prefix1}${PATH2}`,
                GET,
                option
              )
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH2}`,
          },
          results: {
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            get: (option: {
              headers: Methods_d7g2dv['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_d7g2dv['get']['resBody']>(
                prefix,
                `${prefix1}${PATH3}`,
                GET,
                option
              ).json(),
            /**
             * @param option.headers - access_tokenをheaderに挿入
             */
            $get: (option: {
              headers: Methods_d7g2dv['get']['reqHeaders'];
              config?: T | undefined;
            }) =>
              fetch<Methods_d7g2dv['get']['resBody']>(
                prefix,
                `${prefix1}${PATH3}`,
                GET,
                option
              )
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix1}${PATH3}`,
          },
          /**
           * @param option.headers - access_tokenをheaderに挿入
           */
          get: (option: {
            headers: Methods_10xwc1i['get']['reqHeaders'];
            config?: T | undefined;
          }) =>
            fetch<Methods_10xwc1i['get']['resBody']>(
              prefix,
              prefix1,
              GET,
              option
            ).json(),
          /**
           * @param option.headers - access_tokenをheaderに挿入
           */
          $get: (option: {
            headers: Methods_10xwc1i['get']['reqHeaders'];
            config?: T | undefined;
          }) =>
            fetch<Methods_10xwc1i['get']['resBody']>(
              prefix,
              prefix1,
              GET,
              option
            )
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${prefix1}`,
        };
      },
      draft: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        post: (option: {
          body: Methods_17tf88m['post']['reqBody'];
          headers: Methods_17tf88m['post']['reqHeaders'];
          config?: T | undefined;
        }) => fetch(prefix, PATH4, POST, option).send(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $post: (option: {
          body: Methods_17tf88m['post']['reqBody'];
          headers: Methods_17tf88m['post']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch(prefix, PATH4, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH4}`,
      },
      publish: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        post: (option: {
          body: Methods_1pk7vay['post']['reqBody'];
          headers: Methods_1pk7vay['post']['reqHeaders'];
          config?: T | undefined;
        }) => fetch(prefix, PATH5, POST, option).send(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $post: (option: {
          body: Methods_1pk7vay['post']['reqBody'];
          headers: Methods_1pk7vay['post']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch(prefix, PATH5, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH5}`,
      },
      tags: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        get: (option: {
          headers: Methods_iht77y['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_iht77y['get']['resBody']>(
            prefix,
            PATH6,
            GET,
            option
          ).json(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $get: (option: {
          headers: Methods_iht77y['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_iht77y['get']['resBody']>(prefix, PATH6, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH6}`,
      },
      /**
       * @param option.headers - access_tokenをheaderに挿入
       */
      post: (option: {
        body: Methods_1rq3rau['post']['reqBody'];
        headers: Methods_1rq3rau['post']['reqHeaders'];
        config?: T | undefined;
      }) => fetch(prefix, PATH0, POST, option).send(),
      /**
       * @param option.headers - access_tokenをheaderに挿入
       */
      $post: (option: {
        body: Methods_1rq3rau['post']['reqBody'];
        headers: Methods_1rq3rau['post']['reqHeaders'];
        config?: T | undefined;
      }) =>
        fetch(prefix, PATH0, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH0}`,
    },
    events: {
      administrator: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        get: (option: {
          headers: Methods_9i3h59['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_9i3h59['get']['resBody']>(
            prefix,
            PATH7,
            GET,
            option
          ).json(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $get: (option: {
          headers: Methods_9i3h59['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_9i3h59['get']['resBody']>(prefix, PATH7, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH7}`,
      },
      participant: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        get: (option: {
          headers: Methods_hvrpot['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_hvrpot['get']['resBody']>(
            prefix,
            PATH8,
            GET,
            option
          ).json(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $get: (option: {
          headers: Methods_hvrpot['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_hvrpot['get']['resBody']>(prefix, PATH8, GET, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH8}`,
      },
      search: {
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        get: (option: {
          query: Methods_176zpos['get']['query'];
          headers: Methods_176zpos['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_176zpos['get']['resBody']>(
            prefix,
            PATH9,
            GET,
            option
          ).json(),
        /**
         * @param option.headers - access_tokenをheaderに挿入
         */
        $get: (option: {
          query: Methods_176zpos['get']['query'];
          headers: Methods_176zpos['get']['reqHeaders'];
          config?: T | undefined;
        }) =>
          fetch<Methods_176zpos['get']['resBody']>(prefix, PATH9, GET, option)
            .json()
            .then((r) => r.body),
        $path: (
          option?:
            | {
                method?: 'get' | undefined;
                query: Methods_176zpos['get']['query'];
              }
            | undefined
        ) =>
          `${prefix}${PATH9}${
            option && option.query ? `?${dataToURLString(option.query)}` : ''
          }`,
      },
    },
    signin: {
      post: (option: {
        body: Methods_1oqkkb0['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<Methods_1oqkkb0['post']['resBody']>(
          prefix,
          PATH10,
          POST,
          option
        ).json(),
      $post: (option: {
        body: Methods_1oqkkb0['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch<Methods_1oqkkb0['post']['resBody']>(prefix, PATH10, POST, option)
          .json()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH10}`,
    },
    signup: {
      post: (option: {
        body: Methods_1smttma['post']['reqBody'];
        config?: T | undefined;
      }) => fetch(prefix, PATH11, POST, option).send(),
      $post: (option: {
        body: Methods_1smttma['post']['reqBody'];
        config?: T | undefined;
      }) =>
        fetch(prefix, PATH11, POST, option)
          .send()
          .then((r) => r.body),
      $path: () => `${prefix}${PATH11}`,
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
