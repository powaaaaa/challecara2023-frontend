import { useRouter } from 'next/router';

type IUseTop = {
  handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const useTop = (): IUseTop => {
  const router = useRouter();

  const handleLogin = (): void => {
    router.push(`/Signin`).catch((error) => {
      console.error('ページ遷移に失敗しました: ', error);
    });
  };

  return { handleLogin };
};
