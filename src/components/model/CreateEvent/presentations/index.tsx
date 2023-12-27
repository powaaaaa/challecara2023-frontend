import type { Dispatch, SetStateAction } from 'react';

import { TagsButton } from './item/TagsButton';

import type { SelectTagItem } from '@/libs/@types';

import { DateInput } from '@/components/ui/DateInput';
import { ImageInput } from '@/components/ui/ImageInput';
import { Input } from '@/components/ui/Input';
import { InputText } from '@/components/ui/InputText';

type WithRange = never;

type Props = {
  changeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setEventTitle: Dispatch<SetStateAction<string>>;
  changeEventTags: (
    event: React.MouseEvent<HTMLButtonElement>,
    item: SelectTagItem
  ) => void;
  tagList: SelectTagItem[] | undefined;
  setParticipantsNumber: Dispatch<SetStateAction<string>>;
  startDate: Date | undefined;
  endDate: Date | undefined;
  changeEventTerm: (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ) => void;
  setEventInfo: Dispatch<SetStateAction<string>>;
  setEventId: Dispatch<SetStateAction<string>>;
};

export const CreateEventPresentation: React.FC<Props> = ({
  changeImage,
  setEventTitle,
  changeEventTags,
  tagList,
  setParticipantsNumber,
  startDate,
  endDate,
  changeEventTerm,
  setEventInfo,
  setEventId,
}) => (
  <div className="bg-basic w-[736px] rounded border-2 border-black-lighten-1">
    <div className="border-b-2 border-black-lighten-1">
      <ImageInput onChange={changeImage} />
    </div>

    <div className="mt-16 mr-10 ml-20">
      <div className="flex flex-col">
        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id"
          >
            タイトル
          </label>
          <Input
            className="w-[400px]"
            type="text"
            display="hidden"
            label="label"
            id="id"
            onChange={(e) => setEventTitle(e.target.value)}
          />
        </div>

        <div className="flex pt-2">
          <label
            className="flex w-[134px] text-xl self-center"
            htmlFor="button"
          >
            タグ
          </label>
          <TagsButton
            id="button"
            tagsList={tagList ?? []}
            changeIsSelected={changeEventTags}
          />
        </div>
      </div>

      <div className="flex flex-col mt-10">
        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id2"
          >
            募集人数
          </label>
          <div className="mb-2">
            <Input
              className="w-[400px]"
              type="number"
              display="hidden"
              label="label"
              id="id2"
              onChange={(e) => setParticipantsNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id3"
          >
            募集期間
          </label>
          <div>
            <DateInput
              id="id3"
              startDate={startDate}
              endDate={endDate}
              onChange={changeEventTerm}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col my-10">
        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id4"
          >
            詳細
          </label>
          <div className="mb-2">
            <InputText
              id="id4"
              onChange={(e) => setEventInfo(e.target.value)}
            />
          </div>
        </div>
        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id5"
          >
            イベントID
          </label>
          <Input
            className="w-[400px]"
            type="text"
            display="hidden"
            label="label"
            id="id5"
            onChange={(e) => setEventId(e.target.value)}
          />
        </div>
      </div>
    </div>
  </div>
);
