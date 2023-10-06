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
      <body className={poppins.className}>
        <Header />
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  );
}
