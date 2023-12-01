import React from 'react';

import Image from 'next/image';

import { Button } from '@/components/ui/Button';

type Props = {
  image_url: string;
  eventTitle: string;
  administratorName: string;
  administratorNote: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const ApplyConfirmPresentation: React.FC<Props> = ({
  image_url,
  eventTitle,
  administratorName,
  administratorNote,
  onClick,
}) => (
  <div className="w-[608px] text-black grid justify-items-stretch">
    <div className="relative w-[400px] h-[225px] rounded-lg overflow-hidden justify-self-center">
      <Image
        className="z-10 object-fill blur-sm"
        src={image_url}
        alt="image_url"
        layout="fill"
        objectFit="fill"
      />
      <Image
        className="z-20 object-contain"
        src={image_url}
        alt="image_url"
        layout="fill"
        objectFit="contain"
      />
    </div>
    <div className="font-bold	text-[28px] mt-10">{eventTitle}</div>
    <div className="text-xl font-medium mt-4">{administratorName}</div>
    <div className="text-xl font-medium mt-7">{administratorNote}</div>

    <div className="mt-16 justify-self-center">
      <Button variant="base" label="応募する" onClick={onClick} />
    </div>
  </div>
);
