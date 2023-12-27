import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import axios from 'axios';
import { useRouter } from 'next/navigation';

import type { SignInPayload, SignInResponse } from '@/api/@types';

import { BASE_URL } from '@/libs/baseUrl';

type IUseSignIn = {
  userEmail: string;
  userPassword: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  setUserPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useSignIn = (): IUseSignIn => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const Axios = axios.create({
    baseURL: BASE_URL,
    headers: {
      Accept: 'application/json',
    },
    timeout: 2500,
  });

  const fetchSignIn = async (body: SignInPayload): Promise<SignInResponse> =>
    await Axios.post('/signin', body);

  const handleSignIn = (): void => {
    const reqBody: SignInPayload = {
      username: userEmail,
      password: userPassword,
    };

    fetchSignIn(reqBody)
      .then((res) => {
        console.log('サインインdone');
        console.log('res: ', res);
        localStorage.setItem('access_token', res.access_token);
        router.push(`/events/participant`);
      })
      .catch((error) => {
        console.error('Error: ', error);
        alert('ログイン出来ませんでした。');
      });
  };

  return {
    userEmail,
    userPassword,
    setUserEmail,
    setUserPassword,
    handleSignIn,
  };
};
