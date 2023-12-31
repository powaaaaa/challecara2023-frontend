import aspida from '@aspida/axios';
// import qs from 'qs';
import axios from 'axios';

import { BASE_URL } from './baseUrl';

import api from '@/api/$api';

export const apiClient = api(
  aspida(axios, {
    baseURL: BASE_URL,
    // headers: {
    //   Authorization: 'Bearer sample',
    // },
  })
);

export const Axios = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization':
      typeof window !== 'undefined'
        ? `Bearer ${window.localStorage.getItem('access_token')}`
        : '',
  },
});
