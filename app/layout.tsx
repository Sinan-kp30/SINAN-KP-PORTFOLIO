import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sinan Kp - UI/UX Designer",
  description:
    "UI/UX Designer portfolio showcasing digital experiences and product design",
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
