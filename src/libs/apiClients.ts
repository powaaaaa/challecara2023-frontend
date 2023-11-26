import aspida from '@aspida/axios';
// import qs from 'qs';
import axios from 'axios';

import { BASE_URL } from './baseUrl';

import api from '@/api/$api';

export const apiClient = api(
  aspida(axios, { baseURL: BASE_URL })
  //   aspida((...args) => axios(args[0] as string, args[1]), {
  //     baseURL: BASE_URL,
  //     throwHttpErrors: true,
  //     paramsSerializer: (s) => qs.stringify(s, { arrayFormat: 'brackets' }),
  //     mode: 'cors',
  //     headers: {
  //       Authorization: 'Bearer sample',
  //     },
  //   })
);
