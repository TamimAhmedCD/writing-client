import { useEffect } from "react";
import Hero from "../../components/Hero";
import TrendingCategory from "../../components/TrendingCategory";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Writing";
  }, []);
  return (
    <div>
      <Hero />
      <TrendingCategory />
    </div>
  );
};

export default Home;
