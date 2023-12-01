import { useRouter } from 'next/router';

export const Back: React.FC = () => {
  const router = useRouter();

  return (
    <div>
      <button className="text-xl text-black" onClick={() => router.back()}>
        ⊿戻る
      </button>
    </div>
  );
};
