import type { ComponentPropsWithoutRef } from 'react';

import Image from 'next/image';

type Props = {
  image_url: string;
} & ComponentPropsWithoutRef<'img'>;

export const DisplayImage: React.FC<Props> = ({ image_url }) => {
  const a = 'a';
  return (
    <div className="relative w-[832px] h-[425px] rounded-lg overflow-hidden">
      <Image
        className="z-10 object-fill blur-sm"
        src={image_url}
        alt={a}
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
  );
};
