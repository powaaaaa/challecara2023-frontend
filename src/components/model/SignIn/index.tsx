'use client';

import { useSignIn } from './hooks';
import { SignInPresentation } from './presentations';

export const SignIn: React.FC = () => {
  const {
    userId,
    userPassword,
    setUserId,
    setUserPassword,
    handleSignIn,
  } = useSignIn();
  return (
    <SignInPresentation
      userId={userId}
      userPassword={userPassword}
      setUserId={setUserId}
      setUserPassword={setUserPassword}
      handleSignIn={handleSignIn}
    />
  );
};
