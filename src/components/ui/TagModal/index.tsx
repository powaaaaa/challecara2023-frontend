import type { Dispatch, SetStateAction } from 'react';

import { Tags } from '../Tags';

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
};

const List = [
  { id: '1', label: '焼き肉', selected: false },
  { id: '2', label: 'お寿司', selected: true },
  { id: '3', label: '焼き肉', selected: false },
  { id: '4', label: 'お寿司いいいいいいいい！', selected: true },
  { id: '5', label: '焼き肉', selected: false },
  { id: '6', label: 'お寿司', selected: true },
  { id: '7', label: '焼き肉', selected: false },
  { id: '8', label: 'お寿司', selected: true },
];

export const TagModal: React.FC<Props> = ({ setShow }) => (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center"
    role="button"
    tabIndex={0}
    onClick={(): void => setShow(false)}
    onKeyDown={(): void => setShow(false)}
  >
    <div
      className="z-10 w-1/2 p-8 bg-white rounded border-2 border-black-lighten-2"
      role="button"
      tabIndex={0}
      onClick={(e): void => e.stopPropagation()}
      onKeyDown={(e): void => e.stopPropagation()}
    >
      <Tags tagsList={List} />
    </div>
  </div>
);
