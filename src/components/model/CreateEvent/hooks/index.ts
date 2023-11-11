import type { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

type IUseCreateEvent = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export const useCreateEvent = ():IUseCreateEvent => {
  const [state, setState] = useState("");
  return {state,setState}
};
