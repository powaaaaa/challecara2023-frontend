import type { Dispatch, SetStateAction } from 'react';
import React from 'react';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { PwdInput } from '@/components/ui/PwdInput';

type Props = {
  userEmail: string;
  userPassword: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  setUserPassword: Dispatch<SetStateAction<string>>;
  handleSignIn: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const SignInPresentation: React.FC<Props> = ({
  userEmail,
  userPassword,
  setUserEmail,
  setUserPassword,
  handleSignIn,
}) => (
  <form className="w-[577px] h-[411px] bg-basic drop-shadow-lg flex flex-col items-center justify-center">
    <Input
      className="mb-4"
      type="email"
      label="メールアドレス"
      id="email"
      display="block"
      value={userEmail}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setUserEmail(event.target.value)
      }
    />
    <PwdInput
      className="mb-10"
      label="パスワード"
      id="password"
      display="block"
      value={userPassword}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setUserPassword(event.target.value)
      }
    />

    <Button
      className="mx-auto"
      variant="base"
      label="サインイン"
      onClick={handleSignIn}
    />
  </form>
);
