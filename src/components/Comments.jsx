import { useState } from "react";
import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

const Comments = ({ blogs }) => {
  const [comments, setComments] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState("");
  console.log(blogs);

  const toggleComments = () => {
    setComments((prev) => !prev);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim()) {
      setCommentList((prev) => [...prev, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="my-5 border-t border-[#29294b40]">
      <p
        className="group relative w-max mt-5 text-light-accent font-medium cursor-pointer"
        onClick={toggleComments}
      >
        <span>
          {comments ? "Hide Comments" : `View Comments (${commentList.length})`}
        </span>
        <span className="absolute -bottom-1 left-0 w-full transition-all h-[1.3px] bg-light-accent group-hover:w-0"></span>
      </p>

      {comments && (
        <div className="mt-4">
          {/* Comments List */}
          <div className="mb-4">
            <div className="mt-8 flex gap-3 items-center">
              <img
                src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex gap-2">
                <p className="text-sm font-medium text-light-primary-color text-opacity-80">
                  Tamim Ahmed
                </p>
                <span className="text-sm text-light-primary-color text-opacity-80">
                  on October 9, 2024
                </span>
              </div>
            </div>
            <p className="text-light-primary-color mt-3">
              This article is exactly what I needed! Your insights are
              incredibly helpful.
            </p>
            <p className="group relative w-max text-light-accent font-medium cursor-pointer mt-3">
              <span>Reply</span>
              <span className="absolute -bottom-1 left-0 w-full transition-all h-[1.3px] bg-light-accent group-hover:w-0"></span>
            </p>
          </div>

          {/* Post Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="space-y-4 mt-8 bg-light-accent bg-opacity-5 p-5 rounded-xl"
          >
            <div className="form-control flex flex-row w-full gap-5">
              <div className="w-full">
                <label className="label" htmlFor="account">
                  <span className="label-text">Name *</span>
                </label>
                <input
                  type="text"
                  name="blogTitle"
                  id="account"
                  required
                  className="input input-bordered  w-full bg-transparent"
                  placeholder="Name *"
                />
              </div>
              <div className="w-full">
                {" "}
                <label className="label" htmlFor="name">
                  <span className="label-text">Email *</span>
                </label>
                <input
                  type="text"
                  name="blogImg"
                  placeholder="Email *"
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
                name="longDes"
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
              Save my name and email in this browser for the next time I <br /> comment.
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
