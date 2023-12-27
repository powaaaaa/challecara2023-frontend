import { useTop } from './hooks';
import { TopPresentation } from './presentations';

export const Top: React.FC = () => {
  const { handleLogin } = useTop();
  return <TopPresentation handleLogin={handleLogin} />;
};
