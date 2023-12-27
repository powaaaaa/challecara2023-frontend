import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import type { SelectTagItem } from '@/libs/@types';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SelectTags } from '@/components/ui/SelectTags';

type Props = {
  tagList: SelectTagItem[];
  onClickEventTag: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
  eventKeyword: string;
  setEventKeyword: Dispatch<SetStateAction<string>>;
  HandleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchCard: React.FC<Props> = ({
  tagList,
  onClickEventTag,
  eventKeyword,
  setEventKeyword,
  HandleSearchEvent,
}) => (
  <div className="w-[256px] bg-basic rounded-lg py-10 border border-black text-black">
    <div className="mx-8 pb-8 border-b border-black-lighten-1">
      <div className="text-black font-medium pb-2">絞り込み</div>
      <SelectTags tagsList={tagList} onClickTag={onClickEventTag} />
    </div>

    <div className="pt-8 mx-8 flex flex-col items-center">
      <Input
        className="max-w-[220px] mb-9"
        type="text"
        label="キーワードで検索"
        id="keyword"
        display="block"
        value={eventKeyword}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setEventKeyword(event.target.value)
        }
      />
      <div>
        <Button variant="base" label="絞り込む" onClick={HandleSearchEvent} />
      </div>
    </div>
  </div>
);
