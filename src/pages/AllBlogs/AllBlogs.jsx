import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Home/Loading";
import { Link } from "react-router-dom";
import { MdTimer } from "react-icons/md";
import { Button, IconButton } from "@material-tailwind/react";
import authContext from "../../context/AuthContext";
import { FaHeart } from "react-icons/fa6";
import { toast } from "react-toastify";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useContext(authContext);

  useEffect(() => {
    fetchAllBlogs();
    fetchBlogsByCategories();
  }, []);

  // Fetch all blogs
  const fetchAllBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:5000/blog");
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs", error);
      setLoading(false);
    }
  };

  // Fetch blogs by category
  const fetchBlogsByCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/categories");
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories", error);
    }
  };

  // Fetch blogs by category
  const fetchBlogsByCategory = async (category) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/blogCategory?category=${category}`
      );
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching blogs by category", error);
      setLoading(false);
    }
  };

  // Fetch blogs based on search query
  const fetchBlogsBySearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/search?q=${query}` // API endpoint with query parameter
      );
      setBlogs(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error searching blogs", error);
      setLoading(false);
    }
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query); // Update search query state
    if (query.trim() === "") {
      fetchAllBlogs(); // If search query is empty, show all blogs
    } else {
      fetchBlogsBySearch(query); // Fetch blogs by search query
    }
  };

  // Handle category button click
  const handleCategoryClick = (category) => {
    if (category === "All") {
      fetchAllBlogs();
    } else {
      fetchBlogsByCategory(category);
    }
    setSelectedCategory(category);
  };

  // Format the date
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

  // Handle adding blog to wishlist
  const handleAddToWishlist = async (blog) => {
    if (!user) {
      toast.error("Please log in to add items to your wishlist.");
      return;
    }

    const wishlistData = {
      userEmail: user.email,
      blogId: blog._id,
      blogImg: blog.blogImg,
      shortDes: blog.shortDes,
      blogTitle: blog.blogTitle,
    };

    axios
      .post("http://localhost:5000/wishlist", wishlistData, {
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
      })
      .then((response) => {
        if (response.data) {
          toast.success("Blog added on Wishlist");
        }
      });
  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      {/* header */}
      <div className="mt-5 md:mt-16 text-center md:w-4/5 md:mx-auto">
        <h1 className="md:text-5xl text-3xl font-bold text-light-primary-color leading-tight">
          Explore Our
          <span className="bg-gradient-to-t from-[#443ea3] to-[#9895ffbb] text-transparent bg-clip-text">
            {" "}
            Blogs
          </span>
        </h1>
        <p className="text-gray-600 mt-5">
          Writing Welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br /> curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>

      {/* Search Bar */}
      <div className="search-bar mb-6 p-2 bg-[#9895ff38] rounded-lg flex items-center justify-between lg:w-6/12 mx-auto  mt-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by Blog Title"
            value={searchQuery}
            onChange={handleSearchChange} // Handle search input change
            className="p-3 bg-transparent outline-none placeholder-[#0000005d] w-28 lg:w-full"
          />
        </div>
        <Button
          size="md"
          className="normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
        >
          Search
        </Button>
      </div>

      {/* blog by category */}
      <div className="flex gap-3 flex-wrap justify-center md:w-9/12 mx-auto gap-y-5 mt-6">
        <button
          className="p-3 px-6 cursor-pointer rounded-full shadow-[0px_10px_27px_0px_#5a67d825] font-medium text-light-primary-color transition-all duration-300 hover:shadow-[0px_6px_27px_0px_#5a67d855]"
          onClick={() => handleCategoryClick("All")}
        >
          All Blogs
        </button>
        {categories.map((category) => (
          <button
            className="p-3 px-6 cursor-pointer rounded-full shadow-[0px_10px_27px_0px_#5a67d825] font-medium text-light-primary-color transition-all duration-300 hover:shadow-[0px_6px_27px_0px_#5a67d855]"
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {loading ? (
          <Loading />
        ) : (
          blogs.map((blog) => {
            const formattedDate = formatDate(blog.createdAt); // Format each blog's date

            return (
              <div key={blog._id} className="space-y-5 flex flex-col mb-5">
                {/* Blog Cover Image */}
                <Link to={`/blog-details/${blog._id}`}>
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
                    <Link to={`/blog-details/${blog._id}`}>
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
                    <Link to={`/blog-details/${blog._id}`}>
                      <Button
                        variant="gradient"
                        className="normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
                      >
                        <span>Discover More</span>
                      </Button>
                    </Link>
                    <IconButton
                      onClick={() => handleAddToWishlist(blog)}
                      size=""
                      className="rounded-full text-md bg-transparent border border-light-accent text-light-accent"
                    >
                      <FaHeart></FaHeart>
                    </IconButton>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllBlogs;
