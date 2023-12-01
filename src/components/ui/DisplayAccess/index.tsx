type Props = {
  userAccess: string | undefined;
};

export const DisplayAccess: React.FC<Props> = ({ userAccess }) => (
  <div className="bg-white w-[740px] p-5 border-2 border-black rounded">
    <div>お届け先: {userAccess}</div>
  </div>
);
