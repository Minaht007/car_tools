import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "../components/header/header";
import Footer from "../components/footer/footer";

import Script from "next/script";
import AnalyticsTracker from "../components/AnalyticsTracker";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const interFont = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Auto Tools",
  description:
    "Онлайн-магазин автозапчастей в Україні. Підбір деталей за маркою, моделлю або VIN-кодом. Оригінальні та якісні аналоги з гарантією. Швидка доставка по всій Україні.",
  keywords:
    "автозапчастини, інтернет магазин автозапчастин, купити автозапчастини, запчастини для авто, автозапчастини Україна, автозапчастини онлайн, автозапчастини по VIN, підбір автозапчастин, оригінальні автозапчастини, аналоги запчастин, доставка автозапчастин, автозапчастини Київ, автозапчастини Львів, автозапчастини Харків, автозапчастини Одеса, магазин автозапчастин Україна" +
    "автозапчасти, интернет магазин автозапчастей, купить автозапчасти, запчасти для авто, автозапчасти Украина, автозапчасти онлайн, подбор автозапчастей, оригинальные автозапчасти, аналоги запчастей, доставка автозапчастей, автозапчасти Киев, автозапчасти Львов, автозапчасти Харьков, автозапчасти Одесса, магазин автозапчастей Украина",

  authors: [{ name: "DEV-HAWKS" }],
  creator: "DEV-HAWKS TEAM",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${interFont.variable} antialiased layout`}
      >
        <Header />
        {children}
        <Footer />

        <AnalyticsTracker />

        {/* Google Analytics скрипты */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-Q2DR93620Q`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
	window.dataLayer = window.dataLayer || [];
	function gtag(){dataLayer.push(arguments);}
	gtag('js', new Date());
	gtag('config', 'G-Q2DR93620Q');
  `}
        </Script>
      </body>
    </html>
  );
}
