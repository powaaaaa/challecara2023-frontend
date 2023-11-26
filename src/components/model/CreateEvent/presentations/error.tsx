export const CreateEventErrorPresentation: React.FC<{
  errorText: string;
}> = ({ errorText }) => (
  <div className="text-center flex gap-8 flex-col">{errorText}</div>
);
