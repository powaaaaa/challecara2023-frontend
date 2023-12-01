import Image from 'next/image';

export const Header: React.FC = () => (
  <div className="relative w-[1280px] h-[80px] bg-main">
    <div className="absolute left-[72px] top-2">
      <Image src="/logo.png" alt="ロゴ" width={172} height={63} />
    </div>
  </div>
);
