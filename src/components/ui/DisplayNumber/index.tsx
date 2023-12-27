type Props = {
  topNumber: number;
  bottomNumber: number;
};

export const DisplayNumber: React.FC<Props> = ({ topNumber, bottomNumber }) => (
  <div className="flex items-end">
    <div className="text-8xl font-bold text-main">{topNumber}</div>
    <div className="text-8xl"> / </div>
    <div className="text-5xl">{bottomNumber}</div>
  </div>
);
