'use client';

import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';

import type { SignInPayload, SignInResponse } from '@/libs/@types/api';

import { BASE_URL } from '@/libs/baseUrl';

type IUseSignIn = {
  userId: string;
  userPassword: string;
  setUserId: Dispatch<SetStateAction<string>>;
  setUserPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useSignIn = (): IUseSignIn => {
  const router = useRouter();
  const [userId, setUserId] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const fetchSignIn = async (body: SignInPayload): Promise<SignInResponse> =>
    await Axios.post('/signin', body);

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    const reqBody: SignInPayload = {
      username: userId,
      password: userPassword,
    };

    fetchSignIn(reqBody)
      .then((res) => {
        console.log('サインインdone');
        console.log('res: ', res);
        window.localStorage.setItem('access_token', res.access_token);
        router.push(`/events/participant`);
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('ログイン出来ませんでした。');
      });
  };

  return {
    userId,
    userPassword,
    setUserId,
    setUserPassword,
    handleSignIn,
  };
};
