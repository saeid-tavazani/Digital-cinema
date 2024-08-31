"use client";
import { useState } from "react";
import QuestionBox from "../components/question‌Box";
const questionsData = [
  {
    id: 1,
    title: "نتفلیکس چیست؟",
    text: "نتفلیکس یک سرویس پخش است که طیف گسترده‌ای از برنامه‌های تلویزیونی، فیلم‌ها، انیمیشن‌ها، مستندها و موارد دیگر را در هزاران دستگاه متصل به اینترنت ارائه می‌دهد. هر زمان که بخواهید می‌توانید هر چقدر که بخواهید تماشا کنید - همه اینها برای یک ماه کم. قیمت همیشه چیز جدیدی برای کشف وجود دارد و هر هفته برنامه ها و فیلم های تلویزیونی جدید اضافه می شود!",
  },
  {
    id: 2,
    title: "هزینه نتفلیکس چقدر است؟",
    text: "Netflix را در تلفن هوشمند، تبلت، تلویزیون هوشمند، لپ‌تاپ یا دستگاه پخش جریانی خود، همه با یک هزینه ثابت ماهانه تماشا کنید. برنامه ها از 4.99 پوند تا 17.99 پوند در ماه متغیر است. بدون هزینه اضافی، بدون قرارداد.",
  },
];
const FrequentlyQuestions = () => {
  const [open, setOpen] = useState<number | null>(null);
  const handelQuestionsBox = (id: number) => {
    id === open ? setOpen(null) : setOpen(id);
  };
  return (
    <article className="container flex flex-col gap-2">
      <h2 className="text-xl font-bold col-span-4 my-7">سوالات متداول</h2>
      {questionsData.map((item) => (
        <QuestionBox
          key={item.id}
          text={item.text}
          open={item.id === open}
          title={item.title}
          onClick={() => handelQuestionsBox(item.id)}
        />
      ))}
    </article>
  );
};
export default FrequentlyQuestions;
