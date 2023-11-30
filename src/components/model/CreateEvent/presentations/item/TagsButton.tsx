import { useState } from 'react';

import type { SelectTagItem } from '@/libs/@types';

import { Button } from '@/components/ui/Button';
import { TagModal } from '@/components/ui/TagModal';

type Props = {
  id: string;
  tagsList: SelectTagItem[];
  changeIsSelected: (
    event: React.MouseEvent<SelectTagItem & HTMLButtonElement>
  ) => void;
};

export const TagsButton: React.FC<Props> = ({
  id,
  tagsList,
  changeIsSelected,
}) => {
  const [show, setShow] = useState(false);

  // const changeIsSelected = (event: React.ChangeEvent<TagList>): void => {
  //   const tagSelected = event.target.selected;
  //   setIsSelected(tagSelected);
  // };

  const Modal: React.FC | null = () => {
    if (show) {
      return (
        <TagModal
          setShow={setShow}
          tagsList={tagsList}
          changeIsSelected={changeIsSelected}
        />
      );
    } else {
      return null;
    }
  };

  return (
    <div className="z-20">
      <Button
        className="w-[400px]"
        variant="inputStyle"
        label="選択してください"
        id={id}
        onClick={(): void => setShow(true)}
      />
      <Modal />
    </div>
  );
};
