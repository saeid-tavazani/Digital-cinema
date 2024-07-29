import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import UserContextProvider from "@/store/userContext";
import NavBar from "@/components/navBar";
import Footer from "@/components/footer";

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
      <body className={`${vazirmatn.className} dark`}>
        <UserContextProvider>
          <NavBar />
          {children}
          <Footer />
        </UserContextProvider>
      </body>
    </html>
  );
}
