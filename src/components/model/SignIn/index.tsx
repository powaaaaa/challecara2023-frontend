'use client';

import { useSignIn } from './hooks';
import { SignInPresentation } from './presentations';

export const SignIn: React.FC = () => {
  const {
    userEmail,
    userPassword,
    setUserEmail,
    setUserPassword,
    handleSignIn,
  } = useSignIn();
  return (
    <SignInPresentation
      userEmail={userEmail}
      userPassword={userPassword}
      setUserEmail={setUserEmail}
      setUserPassword={setUserPassword}
      handleSignIn={handleSignIn}
    />
  );
};
