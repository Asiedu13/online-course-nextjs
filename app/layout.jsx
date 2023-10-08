import "./globals.css";
import Header from './components/Header';

import { Poppins } from "next/font/google";

const poppins = Poppins({ weight: ['400', '700'], subsets: ["latin"] });

export const metadata = {
  title: "Next Tuts ",
  description: "Learning to use Next.JS",
  keywords: 'web development, Next.JS learning and stuff'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      {/* <meta name="description" content="description of your project" /> */}
      <meta name="theme-color" content="#000" />
      {/* <title>Title of the project</title> */}
      <link rel="manifest" href="/manifest.json" />
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
