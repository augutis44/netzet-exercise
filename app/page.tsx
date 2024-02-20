import Header from "./components/Header";
import { Raleway } from 'next/font/google';
import { Inter } from 'next/font/google';

const raleway = Raleway({
  weight: ['600','700', '800'],
  subsets: ['latin'],
})

export const inter = Inter({
  weight: ['400'],
  subsets: ['latin'],
})

export default function Home() {
  return (
    <main className={raleway.className}>
      <Header />
    </main>
  );
}
