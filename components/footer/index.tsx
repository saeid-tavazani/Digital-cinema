"use client";
import Link from "next/link";
import { navItems } from "../navBar";
import LogoSite from "../ui/logoSite";
const index = () => {
  return (
    <>
      <div className="w-full h-2 bg-input"></div>
      <footer className="w-full ">
        <section className="container grid gap-6 py-10 grid-cols-3">
          <div className="col-span-3 md:col-span-1">
            <LogoSite />
            <p className="text-sm mt-3">
              نتفلیکس یک سرویس پخش ویدئویی بر اساس تقاضای اشتراک بین‌المللی عمده
              است که توسط شرکت رسانه‌ای آمریکایی Netflix ارائه می‌شود. این سرویس
              عمدتاً فیلم‌ها و نمایش‌های تلویزیونی اصلی و اکتسابی را از ژانرهای
              مختلف توزیع می‌کند، و در سطح بین‌المللی در چندین نوع در دسترس است.
            </p>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <ul>
              {navItems.map(({ text, slug }) => (
                <li
                  key={slug}
                  className="text-base my-2 hover:text-red-700 transition-all ease-linear duration-200"
                >
                  <Link href={slug}>{text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 sm:col-span-1">
            <Link href="https://enamad.ir/">
              <img
                src="./enamad.jpg"
                alt="enamad"
                className="rounded-md w-36"
              />
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default index;
