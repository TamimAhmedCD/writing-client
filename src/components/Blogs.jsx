import { Button } from "@material-tailwind/react";
import { MdTimer } from "react-icons/md";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="">
          {/* Blogs Cover */}
          <Link>
            <div className="relative">
              <img
                src="https://revision.codesupply.co/revision/wp-content/uploads/sites/2/2024/09/demo-image-0042-1248x703.webp"
                alt=""
                className="rounded-xl"
              />
              <div className="absolute top-[10%] left-[5%] flex gap-2">
                <span className="px-2 py-1 rounded-md hover:bg-gray-100 cursor-pointer text-sm font-medium bg-white">
                  Business
                </span>
              </div>
              <span className="flex gap-1 items-center px-3 py-1 rounded-full cursor-pointer text-sm font-bold text-white bg-black bg-opacity-10 backdrop-blur-3xl absolute top-[10%] right-[5%]">
                <MdTimer /> 6 Min Read
              </span>
            </div>
          </Link>
          <div className="mt-5">
            <p className="font-medium text-light-accent">Ethan Caldwell</p>
            <Link>
              <h1 className="my-3 text-xl text-light-primary-color font-bold hover:text-opacity-70 transition-all duration-300">
                Startups Disrupting the Sports Industry with Innovative Tech
              </h1>
            </Link>
            <p className="text-gray-600">
              Discover how startups are leveraging technology to disrupt and
              innovate within the sports industry.
            </p>
            <Link>
              <Button
                variant="gradient"
                className="btn mt-5 normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
              >
                <span>Discover More</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
