import { useRouter } from 'next/navigation';

type IUseTop = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useTop = (): IUseTop => {
  const router = useRouter();

  const handleLogin = (): void => {
    router.push(`/SignIn`);
  };

  return { handleLogin };
};
