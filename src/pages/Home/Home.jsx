import { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../../components/Hero";
import TrendingCategory from "../../components/TrendingCategory";
import Blogs from "../../components/Blogs";

const Home = () => {
  useEffect(() => {
    document.title = "Home | Writing";
  }, []);

  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div variants={fadeIn}>
        <Hero />
      </motion.div>
      <motion.div variants={fadeIn}>
        <TrendingCategory />
      </motion.div>
      <motion.div variants={fadeIn}>
        <Blogs />
      </motion.div>
    </motion.div>
  );
};

export default Home;
