import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import { Raleway, Montserrat } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const raleway = Raleway({
  variable: "--font-raleway",
  preload: false,
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  preload: false,
});
export const metadata: Metadata = {
  title: "🪡 Harar Stitch",
  description: "Made By Harar's Own.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased overflow-x-hidden w-screen bg-background_new-dark`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
