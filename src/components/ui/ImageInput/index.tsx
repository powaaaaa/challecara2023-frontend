import type { ComponentPropsWithRef } from 'react';
import React, { useRef } from 'react';

type Props = ComponentPropsWithRef<'input'>;

export const ImageInput: React.FC<Props> = ({ ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const fileUpload = (): void => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="relative">
      <button
        className="bg-black-lighten-3 w-[732.5px] h-[270px] px-[284px] py-[120px] flex rounded-t"
        onClick={fileUpload}
      >
        <span className="text-black-lighten-1 pt-1 pr-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M352 480h320a32 32 0 1 1 0 64H352a32 32 0 0 1 0-64z"
            />
            <path
              fill="currentColor"
              d="M480 672V352a32 32 0 1 1 64 0v320a32 32 0 0 1-64 0z"
            />
            <path
              fill="currentColor"
              d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896z"
            />
          </svg>
        </span>
        <span className="text-xl text-black"> サムネイルを挿入</span>
      </button>

      <input
        className="hidden"
        type="file"
        ref={inputRef}
        accept="image/*"
        {...props}
      />
    </div>
  );
};
