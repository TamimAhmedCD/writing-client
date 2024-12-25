import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Footer = () => {
  const toastT = () => {
    toast.success("Thank you for subscribing to our newsletter");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-11/12 md:w-10/12 mx-auto mt-10"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-[#5955d120] p-5 text-center rounded-xl"
      >
        <h1 className="font-bold text-2xl text-light-primary-color pb-2 pt-6">
          Enter Your E-mail Address
        </h1>
        <p className="text-xl text-light-primary-color pb-8">
          And Get Started For Free
        </p>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="search-bar mb-6 p-2 bg-[#5955d115] rounded-lg flex items-center justify-between lg:w-6/12 mx-auto"
        >
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Your Email Address"
              className="p-3 bg-transparent outline-none placeholder-[#5955d1a6] w-28 lg:w-full"
            />
          </div>
          <Button
            onClick={toastT}
            variant="gradient"
            className="normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
          >
            <span>Submit</span>
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center pt-10"
        >
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Link
                to="/"
                className="font-normal transition-colors hover:text-[#5955d1a6] focus:text-[#5955d1a6]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/all-blogs"
                className="font-normal transition-colors hover:text-[#5955d1a6] focus:text-[#5955d1a6]"
              >
                All Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/add-blog"
                className="font-normal transition-colors hover:text-[#5955d1a6] focus:text-[#5955d1a6]"
              >
                Add Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/featured-blogs"
                className="font-normal transition-colors hover:text-[#5955d1a6] focus:text-[#5955d1a6]"
              >
                Featured Blogs
              </Link>
            </li>
          </ul>
        </motion.div>
        <hr className="my-8 border-blue-gray-50" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex justify-between px-5 flex-col-reverse lg:flex-row"
        >
          <Link className="text-center font-normal">
            Copyright &copy; 2026 Writing. All rights reserved
          </Link>
          <nav className="flex gap-4 justify-center pb-5 lg:pt-0">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </motion.a>
            {/* Repeat the above <motion.a> for other social icons */}
          </nav>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
