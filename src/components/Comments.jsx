import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";
import authContext from "../context/AuthContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loading from "../pages/Home/Loading";

const Comments = ({ blogs }) => {
  const [toggleComment, setToggleComment] = useState(false);
  const { user } = useContext(authContext);
  const blogId = blogs._id;
  const userPhoto = user.photoURL;
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);

  const toggleComments = () => {
    setToggleComment((prev) => !prev);
  };

  // handle post comment
  const handlePostComment = (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("Please log in to comment.");
      return;
    }
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    const newComment = initialData;
    const createdAt = new Date().toISOString();
    newComment.createdAt = createdAt;
    newComment.blogId = blogId;
    newComment.userPhoto = userPhoto;

    if (user) {
      axios
        .post("http://localhost:5000/comments", newComment, {
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
        })
        .then((response) => {
          if (response.data) {
            toast.success("Successfully post your Comment");
          }
        });
    }
  };

  // Fetch comment data
  useEffect(() => {
    if (user) {
      axios.get(`http://localhost:5000/comments/${blogId}`).then((response) => {
        setComments(response.data);
        setLoading(false);
      });
    }
  }, [blogId, user]);

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

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="my-5 border-t border-[#29294b40]">
      <p
        className="group relative w-max mt-5 text-light-accent font-medium cursor-pointer"
        onClick={toggleComments}
      >
        <span>
          {toggleComment
            ? "Hide Comments"
            : `View Comments (${comments.length})`}
        </span>
        <span className="absolute -bottom-1 left-0 w-full transition-all h-[1.3px] bg-light-accent group-hover:w-0"></span>
      </p>

      {toggleComment && (
        <div className="mt-4">
          {/* Comments List */}
          {comments.length > 0 ? (
            comments.map((comment) => {
              const formattedDate = formatDate(comment.createdAt); // Format each blog's date
              return (
                <div key={comment._id} className="mb-4">
                  <div className="mt-8 flex gap-3 items-center">
                    <img
                      src={comment.userPhoto}
                      alt={comment.userName}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex gap-2">
                      <p className="text-sm font-medium text-light-primary-color text-opacity-80">
                        {comment.userName}
                      </p>
                      <span className="text-sm text-light-primary-color text-opacity-80">
                        {formattedDate}
                      </span>
                    </div>
                  </div>
                  <p className="text-light-primary-color mt-3">
                    {comment.commentDes}
                  </p>
                  <p className="group relative w-max text-light-accent font-medium cursor-pointer mt-3">
                    <span>Reply</span>
                    <span className="absolute -bottom-1 left-0 w-full transition-all h-[1.3px] bg-light-accent group-hover:w-0"></span>
                  </p>
                </div>
              );
            })
          ) : (
            <p className="text-gray-600 font-medium">
              No comments yet. Be the first to comment!
            </p>
          )}

          {/* Post Comment Form */}
          <form
            className="space-y-4 mt-8 bg-light-accent bg-opacity-5 p-5 rounded-xl"
            onSubmit={handlePostComment}
          >
            <div className="form-control flex flex-row w-full gap-5">
              <div className="w-full">
                <label className="label" htmlFor="account">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  id="account"
                  value={user.displayName}
                  readOnly
                  required
                  className="input input-bordered w-full bg-transparent"
                  placeholder="Name *"
                />
              </div>
              <div className="w-full">
                <label className="label" htmlFor="name">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  type="text"
                  name="userEmail"
                  value={user.email}
                  readOnly
                  id="name"
                  className="input input-bordered w-full bg-transparent"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label" htmlFor="longDes">
                <span className="label-text">Your Comment *</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-28 bg-transparent"
                placeholder="Your Comment *"
                id="longDes"
                name="commentDes"
                required
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox [--chkbg:theme(colors.white)] [--chkfg:black]"
                />
                <span className="label-text text-light-primary-color">
                  Save my name and email in this browser for the next time I
                  comment.
                </span>
              </label>
            </div>
            <button>
              {" "}
              <Button
                variant="gradient"
                className="btn normal-case font-medium text-base bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none w-full"
              >
                <span>Submit Comment</span>
              </Button>
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

Comments.propTypes = {
  blogs: PropTypes.object,
};

export default Comments;
