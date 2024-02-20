import Header from "./components/Header";
import { Raleway } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

import Card from "./components/Card";

const raleway = Raleway({
  weight: ['600','700', '800'],
  subsets: ['latin'],
})

export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
})

export const montserrat = Montserrat({
  weight: ['700', '500'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={raleway.className}>
      <Header />
      <Card />
    </main>
  );
}
