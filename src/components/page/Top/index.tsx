'use client';

import { Top } from '@/components/model/Top';
import { Header } from '@/components/ui/Header';

export const Screen: React.FC = () => (
  <div>
    <div className="mb-4">
      <Header />
    </div>
    <div className="flex flex-col items-center">
      <Top />
    </div>
  </div>
);
