import type { AspidaClient } from 'aspida';
import type { Methods as Methods_191ff01 } from './api/event';
import type { Methods as Methods_1xi2n53 } from './api/event/_id@string';
import type { Methods as Methods_8ddyzg } from './api/event/_id@string/receipt';
import type { Methods as Methods_1cgkkxp } from './api/event/_id@string/receipts';
import type { Methods as Methods_23xzna } from './api/event/_id@string/results';
import type { Methods as Methods_1txyzl5 } from './api/event/draft';
import type { Methods as Methods_6is88h } from './api/event/publish';
import type { Methods as Methods_1x4yslf } from './api/event/tags';
import type { Methods as Methods_1kdyhc8 } from './api/events/administrator';
import type { Methods as Methods_1qcpq4 } from './api/events/participant';
import type { Methods as Methods_q65t9v } from './api/events/search';
import type { Methods as Methods_9h140h } from './api/signin';
import type { Methods as Methods_a2y077 } from './api/signup';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'http://localhost:8000' : baseURL).replace(/\/$/, '');
  const PATH0 = '/api/event';
  const PATH1 = '/receipt';
  const PATH2 = '/receipts';
  const PATH3 = '/results';
  const PATH4 = '/api/event/draft';
  const PATH5 = '/api/event/publish';
  const PATH6 = '/api/event/tags';
  const PATH7 = '/api/events/administrator';
  const PATH8 = '/api/events/participant';
  const PATH9 = '/api/events/search';
  const PATH10 = '/api/signin';
  const PATH11 = '/api/signup';
  const GET = 'GET';
  const POST = 'POST';

  return {
    api: {
      event: {
        _id: (val2: string) => {
          const prefix2 = `${PATH0}/${val2}`;

          return {
            receipt: {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_8ddyzg['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH1}`,
                  GET,
                  option
                ).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_8ddyzg['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH1}`,
                  GET,
                  option
                )
                  .json()
                  .then((r) => r.body),
              post: (option: {
                body: Methods_8ddyzg['post']['reqBody'];
                config?: T | undefined;
              }) => fetch(prefix, `${prefix2}${PATH1}`, POST, option).send(),
              $post: (option: {
                body: Methods_8ddyzg['post']['reqBody'];
                config?: T | undefined;
              }) =>
                fetch(prefix, `${prefix2}${PATH1}`, POST, option)
                  .send()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH1}`,
            },
            receipts: {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1cgkkxp['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH2}`,
                  GET,
                  option
                ).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_1cgkkxp['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH2}`,
                  GET,
                  option
                )
                  .json()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH2}`,
            },
            results: {
              get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_23xzna['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH3}`,
                  GET,
                  option
                ).json(),
              $get: (option?: { config?: T | undefined } | undefined) =>
                fetch<Methods_23xzna['get']['resBody']>(
                  prefix,
                  `${prefix2}${PATH3}`,
                  GET,
                  option
                )
                  .json()
                  .then((r) => r.body),
              $path: () => `${prefix}${prefix2}${PATH3}`,
            },
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1xi2n53['get']['resBody']>(
                prefix,
                prefix2,
                GET,
                option
              ).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods_1xi2n53['get']['resBody']>(
                prefix,
                prefix2,
                GET,
                option
              )
                .json()
                .then((r) => r.body),
            $path: () => `${prefix}${prefix2}`,
          };
        },
        draft: {
          post: (option: {
            body: Methods_1txyzl5['post']['reqBody'];
            config?: T | undefined;
          }) => fetch(prefix, PATH4, POST, option).send(),
          $post: (option: {
            body: Methods_1txyzl5['post']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch(prefix, PATH4, POST, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH4}`,
        },
        publish: {
          post: (option: {
            body: Methods_6is88h['post']['reqBody'];
            config?: T | undefined;
          }) => fetch(prefix, PATH5, POST, option).send(),
          $post: (option: {
            body: Methods_6is88h['post']['reqBody'];
            config?: T | undefined;
          }) =>
            fetch(prefix, PATH5, POST, option)
              .send()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH5}`,
        },
        tags: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1x4yslf['get']['resBody']>(
              prefix,
              PATH6,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1x4yslf['get']['resBody']>(prefix, PATH6, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH6}`,
        },
        post: (option: {
          body: Methods_191ff01['post']['reqBody'];
          config?: T | undefined;
        }) => fetch(prefix, PATH0, POST, option).send(),
        $post: (option: {
          body: Methods_191ff01['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch(prefix, PATH0, POST, option)
            .send()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH0}`,
      },
      events: {
        administrator: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1kdyhc8['get']['resBody']>(
              prefix,
              PATH7,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1kdyhc8['get']['resBody']>(prefix, PATH7, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH7}`,
        },
        participant: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qcpq4['get']['resBody']>(
              prefix,
              PATH8,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_1qcpq4['get']['resBody']>(prefix, PATH8, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH8}`,
        },
        search: {
          get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q65t9v['get']['resBody']>(
              prefix,
              PATH9,
              GET,
              option
            ).json(),
          $get: (option?: { config?: T | undefined } | undefined) =>
            fetch<Methods_q65t9v['get']['resBody']>(prefix, PATH9, GET, option)
              .json()
              .then((r) => r.body),
          $path: () => `${prefix}${PATH9}`,
        },
      },
      signin: {
        post: (option: {
          body: Methods_9h140h['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<Methods_9h140h['post']['resBody']>(
            prefix,
            PATH10,
            POST,
            option
          ).json(),
        $post: (option: {
          body: Methods_9h140h['post']['reqBody'];
          config?: T | undefined;
        }) =>
          fetch<Methods_9h140h['post']['resBody']>(prefix, PATH10, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH10}`,
      },
      signup: {
        post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_a2y077['post']['resBody']>(
            prefix,
            PATH11,
            POST,
            option
          ).json(),
        $post: (option?: { config?: T | undefined } | undefined) =>
          fetch<Methods_a2y077['post']['resBody']>(prefix, PATH11, POST, option)
            .json()
            .then((r) => r.body),
        $path: () => `${prefix}${PATH11}`,
      },
    },
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
