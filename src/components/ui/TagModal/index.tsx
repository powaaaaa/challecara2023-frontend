import { Button } from '../Button';
import { Tags } from '../Tags';

type Props = {
  show: boolean;
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

export const TagModal: React.FC<Props> = ({ show }) => {
  if (show) {
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center">
        <div className="z-10 w-1/2 p-4 bg-white">
          <Tags tagsList={List} />
          <Button variant="base" label="戻る" />
        </div>
      </div>
    );
  } else {
    return null;
  }
};
