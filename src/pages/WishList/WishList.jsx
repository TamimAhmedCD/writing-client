import { Button, IconButton } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import authContext from "../../context/AuthContext";
import axios from "axios";
import Loading from "../Home/Loading";
import { toast } from "react-toastify";
import useAxiosSecure from "../../context/useAxiosSecure";

const WishList = () => {
  const { user } = useContext(authContext);
  const [wishlist, setWishlist] = useState([]);
  const [loading, setLoading] = useState(true);

  const axiosSecure  = useAxiosSecure()

    // Fetch wishlist data from the backend
  useEffect(() => {
    if (user) {
      // axios
      //   .get(`http://localhost:5000/wishlist?email=${user.email}`, {
      //     withCredentials: true
      //   })
      //   .then((response) => {
      //     setWishlist(response.data);
      //     setLoading(false);
      //   });
      axiosSecure.get(`/wishlist?email=${user.email}`)
      .then(res => {
        setWishlist(res.data)
        setLoading(false)
      })
    }
  }, [axiosSecure, user]);
  
  const handleDelete =async (blogId) => {
    const response = await axios.delete("http://localhost:5000/wishlist", {
      data: {userEmail: user.email, blogId}
    })
    setWishlist(wishlist.filter(item => item.blogId !== blogId))
    
    if(response.data.deletedCount >0) {
      toast.success('Successfully Deleted Wishlist')
    }
  }

  if (loading) {
    return <Loading />;
  }
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
      {wishlist.length === 0 ? (
        <div className="mt-5 text-xl font-medium">Wishlist is empty</div>
      ) : (
        wishlist.map((data) => (
          <div
            key={data._id}
            className="p-4 border border-[#5955d150] mt-10 rounded-xl"
          >
            <div className="flex flex-col md:flex-row justify-between gap-4">
              {/* Image and Details */}
              <div className="flex gap-4">
                <img
                  src={data.blogImg}
                  alt=""
                  className="rounded-md w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
                />
                <div className="flex flex-col justify-between md:w-4/6">
                  <h1 className="text-light-primary-color text-lg md:text-xl font-medium">
                    {data.blogTitle}
                  </h1>
                  <p className="text-[#29294be0] text-sm md:text-base">
                    {data.shortDes}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-row-reverse md:flex-col items-start md:items-end gap-2 justify-between">
                <IconButton onClick={() => handleDelete(data.blogId)}
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
        ))
      )}
    </div>
  );
};

export default WishList;
