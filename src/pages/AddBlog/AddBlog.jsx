import { Button } from "@material-tailwind/react";

const AddBlog = () => {
  // Post Blog
  const handleBlogPost = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const newBlog = initialData;
    
    newBlog.addTags = initialData.addTags.split('\n')

    fetch('http://localhost:5000/blog', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newBlog)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

  };

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <div data-aos="fade-up">
        {/* Top Background color */}
        <div
          className="lg:py-20 md:py-16 py-10 bg-gradient-to-r from-[#443ea3] to-[#9895ffbb] rounded-t-xl"
          data-aos="fade-left"
        ></div>
        <div
          className="lg:mx-16 md:mx-10 mx-5 bg-white lg:-mt-10 md:-mt-8 -mt-6 lg:pt-20 md:pt-16 pt-10 shadow-[-6px_6px_22px_-1px_rgba(0,_0,_0,_0.1)] rounded-xl pb-6 z-10"
          data-aos="zoom-in-up"
        >
          <div className="lg:w-8/12 mx-auto md:w-10/12 w-11/12">
            <h1 className="uppercase font-bold text-sm md:text-base  text-light-accent">
              {" "}
              Mange Your Blog Information
            </h1>
            <h1 className="md:text-3xl text-xl font-bold py-5 text-light-primary-color">
              Post Blog
            </h1>
            <form onSubmit={handleBlogPost}>
              <div className="form-control flex flex-row w-full gap-5">
                <div className="w-full">
                  <label className="label" htmlFor="account">
                    <span className="label-text">Blog Title</span>
                  </label>
                  <input
                    type="text"
                    name="blogTitle"
                    id="account"
                    required
                    className="input input-bordered mb-4 w-full"
                    placeholder="Enter you Blog Title"
                  />
                </div>
                <div className="w-full">
                  {" "}
                  <label className="label" htmlFor="name">
                    <span className="label-text">Blog Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="blogImg"
                    placeholder="Enter your Blog Image URL"
                    id="name"
                    className="input input-bordered mb-4 w-full"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-full">
                  <label className="label" htmlFor="category">
                    <span className="label-text">Select Category</span>
                  </label>
                  <select
                    id="category"
                    name="category"
                    required
                    className="select select-bordered bg-opacity-10 w-full"
                  >
                    <option disabled selected>
                      Select Genre
                    </option>
                    <option>Web Development</option>
                    <option>Mobile Apps</option>
                    <option>Artificial Intelligence</option>
                    <option>Cybersecurity</option>
                    <option>Software Reviews</option>
                  </select>
                </div>
                <div className="form-control w-full">
                  <label className="label" htmlFor="tags">
                    <span className="label-text">Add Tags</span>
                  </label>
                  <textarea
                  className="textarea h-12 textarea-bordered"
                  placeholder="Enter Your Long Description"
                  id="longDes"
                  name="addTags"
                  required
                ></textarea>
                </div>
              </div>

              <div className="form-control">
                <label className="label" htmlFor="shortDes">
                  <span className="label-text">Short Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Enter Your Short Description"
                  id="shortDes"
                  name="shortDes"
                  required
                ></textarea>
              </div>
              <div className="form-control mt-4">
                <label className="label" htmlFor="longDes">
                  <span className="label-text">Long Description</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-28"
                  placeholder="Enter Your Long Description"
                  id="longDes"
                  name="longDes"
                  required
                ></textarea>
              </div>

              <button className="w-full">
                {" "}
                <Button
                  variant="gradient"
                  className="btn mt-5 normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none w-full"
                >
                  <span>Post Blog</span>
                </Button>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
