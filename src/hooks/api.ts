import axios from 'axios';

import { BASE_URL } from '../libs/baseUrl';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization':
      typeof window !== 'undefined'
        ? `Bearer ${window.localStorage.getItem('access_token')}`
        : '',
  },
});

// export const fetcher = async <T>(path: string): Promise<T> =>
//   await instance.get<T>(path).then((res) => res.data);
