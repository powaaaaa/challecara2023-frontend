import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUseSignin = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export const useSignin = ():IUseSignin => {
  const [state, setState] = useState("");
  return {state,setState}
};
