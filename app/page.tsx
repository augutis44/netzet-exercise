import { Raleway } from 'next/font/google';
import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';
import Card from "@/components/card/Card";
import Header from "@/components/header/Header";

const raleway = Raleway({
  weight: ['600', '700', '800'],
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
      <div className='px-[15px] pt-[51px] pb-[106px] '>
        <Card />
      </div>
    </main>
  );
}
