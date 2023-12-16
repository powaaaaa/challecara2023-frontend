import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUseEventConfirm = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

export const useEventConfirm = (): IUseEventConfirm => {
  const [state, setState] = useState('');
  return { state, setState };
};
