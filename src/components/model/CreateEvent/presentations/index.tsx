import { TagsButtonPresentation } from '../../TagsButton/presentations';

import { DateInput } from '@/components/ui/DateInput';
import { ImageInput } from '@/components/ui/ImageInput';
import { Input } from '@/components/ui/Input';

export const CreateEventPresentation: React.FC = () => (
  <div className="bg-basic w-[736px] rounded border-2 border-black-lighten-1">
    <div className="border-b-2 border-black-lighten-1">
      <ImageInput />
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
          <Input type="text" display="hidden" label="label" id="id" />
        </div>

        <div className="flex pt-2">
          <label
            className="flex w-[134px] text-xl self-center"
            htmlFor="button"
          >
            タグ
          </label>
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
            <Input type="number" display="hidden" label="label" id="id2" />
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
            <DateInput id="id3" onChange={(e): void => console.log(e)} />
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
            <Input type="text" display="hidden" label="label" id="id4" />
          </div>
        </div>
        <div className="flex">
          <label
            className="flex-none w-[134px] text-xl self-center"
            htmlFor="id5"
          >
            イベントID
          </label>
          <Input type="text" display="hidden" label="label" id="id5" />
        </div>
      </div>
    </div>
  </div>
);
