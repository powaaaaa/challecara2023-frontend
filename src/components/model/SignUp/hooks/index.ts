import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUseSignUp = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

export const useSigUp = (): IUseSignUp => {
  const [state, setState] = useState('');
  return { state, setState };
};
