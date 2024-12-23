import { Button, IconButton } from "@material-tailwind/react";
import { IoMdClose } from "react-icons/io";

const WishList = () => {
  return (
    <div className="w-11/12 md:w-10/12 mx-auto">
      {/* Page Header */}
      <div className="mt-5 md:mt-16 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-light-primary-color leading-tight">
          My
          <span className="bg-gradient-to-t from-[#443ea3] to-[#9895ffbb] text-transparent bg-clip-text">
            {" "}
            Wishlist
          </span>
        </h1>
        <p className="text-gray-600 mt-5 text-sm md:text-base">
          Writing welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br className="hidden md:block" /> curated content to enlighten,
          entertain, and engage global readers.
        </p>
      </div>

      {/* Wishlist Item */}
      <div className="p-4 border border-[#5955d150] mt-10 rounded-xl">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          {/* Image and Details */}
          <div className="flex gap-4">
            <img
              src="https://cdn.pathfactory.com/assets/10412/contents/584307/thumbnails/600x/ai-image-generation-graphic.jpg"
              alt=""
              className="rounded-md w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
            />
            <div className="flex flex-col justify-between md:w-4/6">
              <h1 className="text-light-primary-color text-lg md:text-xl font-medium">
                The Impact of AI on Cybersecurity
              </h1>
              <p className="text-[#29294be0] text-sm md:text-base">
                Writing welcomes to ultimate source for fresh perspectives!
                Explore curated content to enlighten.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-row-reverse md:flex-col items-start md:items-end gap-2 justify-between">
            <IconButton
              size="sm"
              className="rounded-full text-md bg-transparent border border-light-accent text-light-accent"
            >
              <IoMdClose />
            </IconButton>
            <Button
              variant="gradient"
              size="sm"
              className="btn bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none"
            >
              <span>Details</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
