import { TagsButtonPresentation } from '../../TagsButton/presentations';

import { DateInput } from '@/components/ui/DateInput';
import { ImageInput } from '@/components/ui/ImageInput';
import { Input } from '@/components/ui/Input';
import { InputText } from '@/components/ui/InputText';

type WithRange = never;

type Props = {
  changeImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeEventTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeParticipantsNumber: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  startDate: Date | undefined;
  endDate: Date | undefined;
  changeEventTerm: (
    date: WithRange extends false | undefined
      ? Date | null
      : [Date | null, Date | null]
  ) => void;
  changeEventInfo: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  changeEventId: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const CreateEventPresentation: React.FC<Props> = ({
  changeImage,
  changeEventTitle,
  changeParticipantsNumber,
  startDate,
  endDate,
  changeEventTerm,
  changeEventInfo,
  changeEventId,
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
            onChange={changeEventTitle}
          />
        </div>

        <div className="flex pt-2">
          <label
            className="flex w-[134px] text-xl self-center"
            htmlFor="button"
          >
            タグ
          </label>
          {/*  // TODO onChangeを書く */}
          <TagsButtonPresentation id="button" />
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
              onChange={changeParticipantsNumber}
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
            <InputText id="id4" onChange={changeEventInfo} />
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
            onChange={changeEventId}
          />
        </div>
      </div>
    </div>
  </div>
);
