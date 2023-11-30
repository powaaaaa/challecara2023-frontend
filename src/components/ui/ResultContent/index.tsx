import type { ReactNode } from 'react';

type Props = { children: ReactNode };

export const ResultContent: React.FC<Props> = ({ children }) => (
  <div className="w-[832px] h-[183px] bg-white border-4 border-main rounded-3xl text-center flex justify-center items-center">
    <div className="font-semibold">{children}</div>
  </div>
);
