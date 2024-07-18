import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "سینمای دیجیتال",
  description: "سایت تخصصی برای تماشای آنلاین فیلم‌ها و خرید بلیت سینما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
