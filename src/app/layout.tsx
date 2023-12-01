import type { ReactNode } from 'react';

// import { Noto_Sans, Noto_Sans_JP } from 'next/font/google';
import './globals.css';

// const noto = Noto_Sans({
//   weight: ['400', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   adjustFontFallback: false,
//   variable: '--font-noto-sans',
// });

// const notojp = Noto_Sans_JP({
//   subsets: ['latin'],
//   display: 'swap',
//   adjustFontFallback: false,
//   variable: '--font-noto-sans-jp',
// });

export const metadata = {
  title: 'OPEN Gift',
  description: 'ブロックチェーンを用いた抽選アプリプラットフォーム',
};

const RootLayout = ({ children }: { children: React.ReactNode }): ReactNode => (
  <html lang="ja">
    <body className="bg-basic">{children}</body>
  </html>
);

export default RootLayout;
