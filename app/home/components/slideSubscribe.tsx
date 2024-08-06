"use client";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const SlideSubscribe = () => {
  const placeholders = [
    "میخوایی از اخرین اخبار سینما با خبر باشی؟",
    "مبخوایی به برترین فیلم سربال ها دسترسی داشته باشی؟",
    "فقط کافیه ایمیلت وارد کنی",
  ];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <article
      id="silde-gradient"
      className="h-screen w-screen bg-cover bg-no-repeat after:absolute after:inset-0 after:w-screen  after:h-screen after:z-10"
      style={{ backgroundImage: 'url("./bgHome.jpg")' }}
    >
      <div className="absolute z-20 inset-0 w-full h-full flex items-center justify-center flex-col gap-5 p-8">
        <h1 className="text-xl font-bold sm:text-5xl text-center dark:text-white text-black">
          نا محدود فیلم سریال تماشا کن
        </h1>
        <p className="text-base text-center">
          آماده تماشا هستید؟ برای ایجاد یا راه اندازی مجدد عضویت، ایمیل خود را
          وارد کنید.
        </p>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onSubmit={onSubmit}
          onChange={handleChange}
        />
      </div>
    </article>
  );
};

export default SlideSubscribe;
