import { format } from 'date-fns';

import { InputStyle } from '../Input';

// type Props = {};

export const DateInput: React.FC = () => {
  const today = format(new Date(), 'yyyy-MM-dd');

  return (
    <>
      <input
        className={`${InputStyle} pr-4`}
        type="text"
        onFocus={(e): string => (e.target.type = 'date')}
        onBlur={(e): string => (e.target.type = 'text')}
        placeholder="入力してください"
        min={today}
      />
    </>
  );
};
