import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUseSignIn = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

export const useSignIn = (): IUseSignIn => {
  const [state, setState] = useState('');
  return { state, setState };
};
