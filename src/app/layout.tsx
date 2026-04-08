import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nimesh Madhuwantha | Software Engineer & Artist",
  description:
    "Portfolio of Nimesh Madhuwantha, front-end software engineer and artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}><body className="min-h-full">{children}</body></html>;
}
