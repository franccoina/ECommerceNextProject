import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import ClientLayout from './ClientLayout';

// Imported fonts
const QuicksandFont = Quicksand({ subsets: ["latin"], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Market | Games & Toys",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={QuicksandFont.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
