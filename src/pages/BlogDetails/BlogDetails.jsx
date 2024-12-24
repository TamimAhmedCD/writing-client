import { useLoaderData } from "react-router-dom";
import Comments from "../../components/Comments";

const BlogDetails = () => {
  const blogs = useLoaderData();
  const { blogTitle, authorName, shortDes, addTags, blogImg, longDes } = blogs;

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
  const formattedDate = formatDate(blogs.createdAt);

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <div className="flex gap-2 justify-center">
        <p className="font-medium text-light-accent">{authorName}</p>
        <p className="font-medium text-gray-700">on {formattedDate}</p>
      </div>
      <div className="text-center lg:w-10/12 md:w-11/12 mx-auto">
        <h1 className="my-5 lg:text-5xl md:text-4xl text-2xl  text-light-primary-color font-bold leading-tight">
          {blogTitle}
        </h1>
        <p className="my-5 text-[#29294b70]">{shortDes}</p>
        <div className="flex gap-3 flex-wrap justify-center md:w-9/12 mx-auto gap-y-5 mt-6">
          {addTags.map((tag) => (
            <button
              className="p-1 px-3 hover:text-[#29294bc2] cursor-pointer rounded-full shadow-[0px_10px_27px_0px_#5a67d825] font-medium text-light-primary-color transition-all duration-300 hover:shadow-[0px_6px_27px_0px_#5a67d855]"
              key={tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <img src={blogImg} alt="" className="w-full my-5 rounded-xl" />
      <p className="text-xl">{longDes}</p>
      <div className="flex justify-between my-5">
        <div className="flex gap-3">
          <p className="font-medium text-light-accent">{authorName}</p>
          <p className="font-medium text-gray-700">on {formattedDate}</p>
        </div>
        <div className="flex gap-3">
          {addTags.map((tag) => (
            <button
              className="p-1 px-3 hover:text-[#29294bc2] cursor-pointer rounded-full shadow-[0px_10px_27px_0px_#5a67d825] font-medium text-light-primary-color transition-all duration-300 hover:shadow-[0px_6px_27px_0px_#5a67d855]"
              key={tag}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
      <Comments blogs={blogs} />
    </div>
  );
};

export default BlogDetails;
