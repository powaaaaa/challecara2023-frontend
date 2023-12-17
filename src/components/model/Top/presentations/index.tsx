import React from 'react';

import { ContentFirst } from './items/ContentFirst';
import { ContentSecond } from './items/ContentSecond';
import { Title } from './items/Title';

type Props = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const TopPresentation: React.FC<Props> = ({ handleLogin }) => (
  <div className="text-black">
    <div className="mb-64">
      <Title handleLogin={handleLogin} />
    </div>

    <ContentFirst />

    <ContentSecond />
  </div>
);
