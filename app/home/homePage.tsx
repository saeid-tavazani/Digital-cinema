import SlideSubscribe from "./components/slideSubscribe";
import FrequentlyQuestions from "./components/frequentlyQuestions";
import ReasonsJoining from "./components/reasonsJoining";

const HomePage = () => {
  return (
    <section className="w-full">
      <SlideSubscribe />
      <ReasonsJoining />
      <FrequentlyQuestions />
    </section>
  );
};
export default HomePage;
