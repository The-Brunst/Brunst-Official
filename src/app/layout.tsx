import type { Metadata, Viewport } from "next";
import { Rajdhani } from "next/font/google";
import { FontSwitcher } from "@/components/FontSwitcher";
import "./globals.css";

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#516fc7",
};

export const metadata: Metadata = {
  title: "Brunst Studios | Bringing together the world’s creative diversity",
  description:
    "Brunst Studios is home to a world of creative fields—bringing together brands, interiors, authors, and athletes under a single visionary creative agency.",
  metadataBase: new URL("https://brunst.studios"),
  openGraph: {
    title: "Brunst Studios | Bringing together the world’s creative diversity",
    description:
      "Brunst Studios is home to a world of creative fields—bringing together brands, interiors, authors, and athletes under a single visionary creative agency.",
    siteName: "Brunst Studios",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunst Studios | Bringing together the world’s creative diversity",
    description:
      "Brunst Studios is home to a world of creative fields—bringing together brands, interiors, authors, and athletes under a single visionary creative agency.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} h-full`}>
      <head>
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full antialiased">
        {children}
        <FontSwitcher />
      </body>
    </html>
  );
}
