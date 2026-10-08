import type { Metadata } from "next";
import localFont from "next/font/local";
import TopNavigation from "@/components/TopNavigation";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejovanth K — Business Analytics · Data · Strategy",
  description:
    "Tejovanth K explores business questions through analytics, product thinking, decision science, and strategy.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className={manrope.variable}>
        <TopNavigation />
        {children}
      </body>
    </html>
  );
}
