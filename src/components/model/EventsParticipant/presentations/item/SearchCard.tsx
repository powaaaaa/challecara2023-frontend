import React from 'react';

import type { SelectTagItem } from '@/libs/@types';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { SelectTags } from '@/components/ui/SelectTags';

type Props = {
  tagList: SelectTagItem[];
  changeEventTags: (
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ) => void;
  changeKeyword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSearchEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SearchCard: React.FC<Props> = ({
  tagList,
  changeEventTags,
  changeKeyword,
  handleSearchEvent,
}) => (
  <div className="w-[256px] bg-basic rounded-lg py-10 border border-black text-black">
    <div className="mx-8 pb-8 border-b border-black-lighten-1">
      <div>絞り込み</div>
      <div>
        <SelectTags tagsList={tagList} onClick={changeEventTags} />
      </div>
    </div>

    <div className="pt-8 mx-8 flex flex-col items-center">
      <Input
        className="w-[224px] mb-9"
        type="text"
        label="キーワードで検索"
        id="keyword"
        display="block"
        onChange={changeKeyword}
      />
      <div>
        <Button variant="base" label="絞り込む" onClick={handleSearchEvent} />
      </div>
    </div>
  </div>
);
