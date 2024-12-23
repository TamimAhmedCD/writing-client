import { Button, IconButton } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";
import Loading from "./../pages/Home/Loading";
import { FaHeart } from "react-icons/fa6";
import authContext from "../context/AuthContext";

const Blogs = () => {
  const [recentBlog, setRecentBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(authContext);

  // Fetch recent blogs data from API
  useEffect(() => {
    fetch("http://localhost:5000/recentBlog")
      .then((res) => res.json())
      .then((data) => {
        setRecentBlog(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  // Function to format the date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    });
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recentBlog.map((blog) => {
          const formattedDate = formatDate(blog.createdAt); // Format each blog's date

          return (
            <div key={blog._id} className="space-y-5 flex flex-col mb-5">
              {/* Blog Cover Image */}
              <Link>
                <div className="relative group">
                  <img
                    src={blog.blogImg}
                    alt={blog.blogTitle}
                    className="rounded-xl h-60 w-full object-cover"
                  />
                  {/* Category Tag */}
                  <div className="absolute top-[10%] left-[5%] flex gap-2">
                    {blog.addTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer text-sm font-medium bg-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* Time Read (Visible only on hover) */}
                  <span className="group-hover:flex hidden absolute top-[10%] right-[5%] gap-1 items-center px-3 py-1 rounded-full cursor-pointer text-sm font-bold text-white bg-black bg-opacity-10 backdrop-blur-3xl">
                    <MdTimer /> 6 Min Read
                  </span>
                </div>
              </Link>

              {/* Blog Content */}
              <div className="flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex gap-2">
                    <p className="font-medium text-light-accent">
                      {blog.authorName}
                    </p>
                    <p className="font-medium text-gray-700">
                      on {formattedDate}
                    </p>
                  </div>

                  {/* Blog Title */}
                  <Link>
                    <h1 className="my-3 text-xl text-light-primary-color font-bold hover:text-opacity-70 transition-all duration-300">
                      {blog.blogTitle}
                    </h1>
                  </Link>

                  {/* Short Description */}
                  <p className="text-gray-600">
                    {blog.longDes.slice(0, 130)} ...
                  </p>
                </div>

                {/* Discover More Button */}
                <div className="mt-5 flex gap-3 items-center">
                  {" "}
                  <Link>
                    <Button
                      variant="gradient"
                      className="normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
                    >
                      <span>Discover More</span>
                    </Button>
                  </Link>
                  {user && (
                    <IconButton
                      size=""
                      className="rounded-full text-md bg-transparent border border-light-accent text-light-accent"
                    >
                      <FaHeart></FaHeart>
                    </IconButton>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
