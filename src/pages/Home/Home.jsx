import { useEffect } from "react";
import Hero from "../../components/Hero";
import TrendingCategory from "../../components/TrendingCategory";
import Blogs from "../../components/Blogs";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Writing";
  }, []);
  return (
    <div>
      <Hero />
      <TrendingCategory />
      <Blogs />
    </div>
  );
};

export default Home;
