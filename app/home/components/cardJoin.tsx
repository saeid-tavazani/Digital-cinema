import { IconType } from "react-icons";

export type PropsType = {
  Icon: IconType;
  text: string;
  title: string;
};

const CardJoin = ({ Icon, text, title }: PropsType) => {
  return (
    <div className="bg-zinc-800 rounded-lg col-span-4 p-5 lg:col-span-1 md:col-span-2 grid-rows-5 grid gap-1 shadow">
      <h3 className="text-lg font-bold row-span-1">{title}</h3>
      <p className="row-span-3 mt-1">{text}</p>
      <Icon size={45} className="row-span-1 fill-red-600 text-red-600" />
    </div>
  );
};

export default CardJoin;
