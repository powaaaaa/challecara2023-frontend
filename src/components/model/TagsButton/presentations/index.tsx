import { useState } from 'react';

import { Button } from '@/components/ui/Button';
import { TagModal } from '@/components/ui/TagModal';

export const TagsButtonPresentation: React.FC = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button
        variant="inputStyle"
        label="選択して下さい"
        onClick={(): void => setShow(true)}
      />
      <TagModal show={show} />
    </div>
  );
};
