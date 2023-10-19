import { addYears, getYear, getMonth } from 'date-fns';
import ja from 'date-fns/locale/ja';
import _ from 'lodash';
import DatePicker, { registerLocale } from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { InputStyle } from '../Input';
import '../DateInput/index.css';

import type { ReactDatePickerProps } from 'react-datepicker';

type CustomHeaderProps = {
  date: Date;
  changeYear: (year: number) => void;
  changeMonth: (month: number) => void;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
};

export const DateInput: React.FC<ReactDatePickerProps> = ({ ...props }) => {
  registerLocale('ja', ja);

  const MinDate: Date = new Date();
  const MaxDate: Date = addYears(MinDate, 10);

  const years: number[] = _.range(getYear(MinDate), getYear(MinDate) + 10, 1);
  const months = Array.from(Array(12).keys());

  const CustomHeader: React.FC<CustomHeaderProps> = ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => (
    <div className="flex px-4 items-center justify-between bg-basic p-2 text-black font-medium">
      <button
        className={`text-xl text-black-lighten-1 ${
          prevMonthButtonDisabled
            ? 'text-black-lighten-1 cursor-not-allowed'
            : 'cursor-pointer'
        }`}
        onClick={decreaseMonth}
      >
        &lt;
      </button>

      <select
        className="p-1 text-xl bg-basic cursor-pointer"
        value={getYear(date)}
        onChange={({ target: { value } }): void => changeYear(parseInt(value))}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}年
          </option>
        ))}
      </select>
      <select
        className="p-1 text-xl bg-basic cursor-pointer"
        value={getMonth(date)}
        onChange={({ target: { value } }): void => changeMonth(parseInt(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option + 1}月
          </option>
        ))}
      </select>

      <button
        className={`text-xl text-black-lighten-1 ${
          nextMonthButtonDisabled
            ? 'text-black cursor-not-allowed'
            : 'cursor-pointer'
        }`}
        onClick={increaseMonth}
      >
        &gt;
      </button>
    </div>
  );

  return (
    <>
      <DatePicker
        className={InputStyle}
        dateFormat="yyyy/MM/dd"
        locale="ja"
        placeholderText="入力してください"
        minDate={MinDate}
        maxDate={MaxDate}
        selectsRange
        withPortal
        showYearDropdown
        dropdownMode="select"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }): JSX.Element => (
          <CustomHeader
            date={date}
            changeYear={changeYear}
            changeMonth={changeMonth}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
        {...props}
      />
    </>
  );
};
