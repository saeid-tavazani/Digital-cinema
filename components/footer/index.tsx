import LogoSite from "../ui/logoSite";
import { NavFooter } from "../navBar/navLink";
const index = () => {
  return (
    <footer className="w-screen overflow-hidden">
      {/* <div className="w-full h-2 bg-input" /> */}
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
          <NavFooter />
        </div>
        <div className="col-span-3 sm:col-span-1">
          <a href="https://enamad.ir/" target="_blank">
            <img src="./enamad.jpg" alt="enamad" className="rounded-md w-36" />
          </a>
        </div>
      </section>
    </footer>
  );
};

export default index;
