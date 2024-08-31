"use client";
import { IoAdd } from "react-icons/io5";
type QuestionsBoxPropsType = {
  open: boolean | null;
  text: string;
  title: string;
  onClick: () => void;
};
const QuestionBox = ({ open, title, text, onClick }: QuestionsBoxPropsType) => {
  return (
    <div className="w-full bg-zinc-800">
      <div
        onClick={onClick}
        className="border-background border-solid border-b flex items-center justify-between px-8 py-5 cursor-pointer"
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <IoAdd size={40} />
      </div>
      <div
        className={`overflow-hidden transition-all px-8 duration-300 ${
          open ? "py-5 h-fit" : "h-0"
        }`}
      >
        {text}
      </div>
    </div>
  );
};
export default QuestionBox;
