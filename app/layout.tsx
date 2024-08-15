import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import Head from 'next/head'; // I
import ClientLayout from './GlobalStyling/GlobalStyling';

const inter = Inter({ subsets: ["latin"] });

//Imported fonts
const font = Quicksand({ subsets: ["latin"], weight:['400','700']})

export const metadata: Metadata = {
  title: "E-comerce",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
