import Header from '@/components/home/Header';
import type { Metadata } from 'next';
import { Josefin_Sans } from 'next/font/google';
import './globals.css';

const josefin = Josefin_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Mostakimul's Portfolio",
  description: 'Portfolio Website Of Mostakimul Karim',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.className} bg-pattern text-gray-50`}>
        <div className="h-screen w-full">
          <div className="pt-7 pb-14 h-full">
            <div className="container mx-auto">
              <Header />
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
