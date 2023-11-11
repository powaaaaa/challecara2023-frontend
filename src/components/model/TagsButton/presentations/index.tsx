import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { TagModal } from '@/components/ui/TagModal';

type Props = {
  id: string;
};

export const TagsButtonPresentation: React.FC<Props> = ({ id }) => {
  const [show, setShow] = useState(false);

  const Modal: React.FC | null = () => {
    if (show) {
      return <TagModal setShow={setShow} />;
    } else {
      return null;
    }
  };

  return (
    <div className="z-20">
      <Button
        variant="inputStyle"
        label="選択してください"
        id={id}
        onClick={(): void => setShow(true)}
      />
      <Modal />
    </div>
  );
};
