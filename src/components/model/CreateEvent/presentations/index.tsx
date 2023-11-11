import { Button } from '@/components/ui/Button';
import { DateInput } from '@/components/ui/DateInput';
import { ImageInput } from '@/components/ui/ImageInput';
import { Input } from '@/components/ui/Input';
import { Tags } from '@/components/ui/Tags';

export const CreateEventPresentation: React.FC = () => {
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

  return (
    <div className="bg-basic w-[736px] rounded border-2 border-black-lighten-1">
      <div className="border-b-2 border-black-lighten-1">
        <ImageInput />
      </div>

      <div className="mt-16 mr-10 ml-20">
        <div className="flex flex-col">
          <div className="flex">
            <label className="flex-none w-[134px]" htmlFor="id">
              タイトル
            </label>
            <Input type="text" display="hidden" label="label" id="id" />
          </div>
          <div className="flex">
            <label className="flex w-[134px]" htmlFor="button">
              タグ
            </label>
            <Tags tagsList={List} />
            <Button variant="inputStyle" label="button" id="button" />
          </div>
        </div>

        <div className="flex mt-10">
          <div className="flex-none w-[134px]">
            募集期間
            <br />
            募集人数
          </div>
          <div>
            <Input type="number" display="hidden" label="label" id="id2" />
            <DateInput onChange={(e): void => console.log(e)} />
          </div>
        </div>
        <div className="flex my-10">
          <div className="flex-none w-[134px]">
            詳細
            <br />
            イベントID
          </div>
          <div>
            <Input type="text" display="hidden" label="label" id="id3" />
            <Input type="text" display="hidden" label="label" id="id4" />
          </div>
        </div>
      </div>
    </div>
  );
};
