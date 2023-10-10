type Props = {
  label: string;
};

export const Input: React.FC<Props> = ({ label }) => (
  <span>
    <input
      className="w-[336px] h-14 bg-white rounded border-[1px] border-black-lighten-2 focus:ring-1 focus:ring-main focus:outline-none focus:border-main pl-4 text-black font-normal font-noto-sans placeholder-black-lighten-1"
      placeholder="hello"
    >
      {label}
    </input>
  </span>
);
