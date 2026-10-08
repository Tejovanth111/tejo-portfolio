import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tejovanth K — Business Analytics · Data · Strategy",
  description:
    "Exploring how data, analytical thinking and technology can help businesses make better decisions.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
