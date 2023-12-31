import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { Button } from '../Button';
import { SelectTags } from '../SelectTags';

import type { SelectTagItem } from '@/libs/@types';

type Props = {
  setShow: Dispatch<SetStateAction<boolean>>;
  tagsList: SelectTagItem[];
  changeIsSelected: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
};

export const TagModal: React.FC<Props> = ({
  setShow,
  tagsList,
  changeIsSelected,
}) => (
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
      <SelectTags tagsList={tagsList} onClickTag={changeIsSelected} />
      <div className="mt-5">
        <Button
          className="m-auto"
          variant="base"
          label="閉じる"
          onClick={(): void => setShow(false)}
        />
      </div>
    </div>
  </div>
);
