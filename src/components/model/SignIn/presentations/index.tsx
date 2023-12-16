import { Input } from '@/components/ui/Input';

export const SignInPresentation: React.FC = () => (
  <div className="w-[577px] h-[411px] bg-basic drop-shadow-lg flex flex-col items-center justify-center">
    <div className="mb-10">
      <div>
        <Input
          type="email"
          label="メールアドレス"
          id="email"
          display="block"
          // onClick={changeEmail}
        />
      </div>
      <div>
        <Input
          type="password"
          label="パスワード"
          id="password"
          display="block"
          // onClick={handlePassword}
        />
      </div>
    </div>

    <div>
      {/* <Button variant="base" label="サインイン" onClick={submitSignin} /> */}
    </div>
  </div>
);
