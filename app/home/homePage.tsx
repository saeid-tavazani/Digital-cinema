import { IoTvOutline } from "react-icons/io5";
import { ImDownload } from "react-icons/im";
import { FaChildren } from "react-icons/fa6";
import { SiOpentelemetry } from "react-icons/si";
import CardJoin, {
  type PropsType as CardJoinType,
} from "./components/cardJoin";
import SlideSubscribe from "./components/slideSubscribe";

const dataJoin: CardJoinType[] = [
  {
    Icon: ImDownload,
    title: "برنامه های خود را برای تماشای آفلاین دانلود کنید",
    text: "موارد دلخواه خود را به راحتی ذخیره کنید و همیشه چیزی برای تماشا داشته باشید.",
  },
  {
    Icon: IoTvOutline,
    title: "در تلویزیون خود لذت ببرید",
    text: "در تلویزیون‌های هوشمند، PlayStation، Xbox، Chromecast، Apple TV، پخش‌کننده‌های Blu-ray و موارد دیگر تماشا کنید.",
  },
  {
    Icon: SiOpentelemetry,
    title: "همه جا تماشا کن",
    text: "فیلم ها و برنامه های تلویزیونی نامحدود را روی تلفن، تبلت، لپ تاپ و تلویزیون خود پخش کنید.",
  },
  {
    Icon: FaChildren,
    title: "ایجاد پروفایل برای کودکان",
    text: "کودکان را به ماجراجویی با شخصیت های مورد علاقه خود در فضایی که فقط برای آنها ساخته شده است بفرستید — رایگان با عضویت خود.",
  },
];

const HomePage = () => {
  return (
    <section className="w-full">
      <SlideSubscribe />
      <article className="grid grid-cols-4 gap-4 container py-7">
        <h2 className="text-xl font-bold col-span-4 my-7 text-center">
          دلایل بیشتر برای پیوستن
        </h2>
        {dataJoin.map((item) => (
          <CardJoin Icon={item.Icon} title={item.title} text={item.text} />
        ))}
      </article>
    </section>
  );
};
export default HomePage;
