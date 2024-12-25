import { Button, Carousel } from "@material-tailwind/react";
import { useContext, useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authContext from "../../context/AuthContext";
import axios  from 'axios';

const Login = () => {
  const { singInUser, setUser, signInWithGoogle } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [error, setError] = useState();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    singInUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        const user2 = {email: result.user.email}
        axios.post('https://wirting-server.vercel.app/jwt', user2, {
          withCredentials: true
        })
        .then(res => {
res
        })
        navigate(location?.state ? location.state : "/");
        toast.success("Login Success");
      })
      .catch((error) => {
        setError(error.code);
      });
  };

  const handleGoogleLoginN = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Success");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert.error(errorCode, errorMessage);
      });
  };

  useEffect(() => {
    document.title = "Login | Writing";
  }, []);
  return (
    <section className="flex md:flex-row flex-col w-11/12 lg:w-10/12 mx-auto mt-10 gap-10">
      <div className="md:w-2/4 w-full">
        <Carousel
          className="rounded-xl"
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i
                      ? "w-8 bg-light-accent"
                      : "w-4 bg-light-accent/40"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="https://www.shutterstock.com/image-vector/copywriting-writing-icon-document-pencil-600nw-1992095585.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn.prod.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e298b303b93d91_3d-tb-education.png"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/man-and-girl-discuss-about-work-at-office-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--discussion-conversation-table-desk-partner-activity-pack-business-illustrations-8210874.png?f=webp"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <div className="mx-auto flex flex-col justify-center lg:w-2/5 w-full">
        <h1 className="text-4xl text-light-primary-color font-semibold">
          Welcome Back ! 📝
        </h1>
        <p className="text-gray-500 pt-5 pb-6 font-medium">
          Don&apos;t have account?{" "}
          <Link className="text-light-accent font-bold" to="/register">
            Register
          </Link>
        </p>
        <form className="" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="input input-bordered focus:outline-light-accent w-full bg-opacity-10 mt-4"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="At least 6 characters"
              className="input input-bordered focus:outline-light-accent w-full bg-opacity-10 mt-4"
              required
            />
            <button
              type="button"
              className="absolute top-[50%] left-[90%] "
              onClick={() => {
                setShowPassword((prev) => !prev);
              }}
            >
              {showPassword ? (
                <BsEyeFill></BsEyeFill>
              ) : (
                <BsEyeSlashFill></BsEyeSlashFill>
              )}
            </button>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <div className="form-control mt-2">
            <label className="label cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox [--chkbg:theme(colors.white)] [--chkfg:black]"
              />
              <span className="label-text text-light-primary-color">
                I agree to the{" "}
                <span className="text-light-accent border-b border-light-accent">
                  Terms & Conditions
                </span>
              </span>
            </label>
          </div>
          <button className="w-full">
            <Button
              variant="gradient"
              className="btn bg-gradient-to-t from-[#514dcc] to-[#8581ff] hover:from-[#4440b4] hover:to-[#8581ff] shadow-none hover:shadow-[#6a65af70] hover:border-none border-none w-full mt-6"
            >
              Login
            </Button>
          </button>
          <div className="divider text-light-primary-color divider-neutral py-3 font-medium">
            Or Login with
          </div>
          <div className="flex gap-5">
            <Button
              onClick={handleGoogleLoginN}
              variant="outlined"
              fullWidth
              className="focus:ring-0  font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
            >
              <FcGoogle /> Google
            </Button>
            <Button
              variant="outlined"
              fullWidth
              className="focus:ring-0  font-normal border-gray-600 flex items-center justify-center gap-2 normal-case text-base"
            >
              <VscGithubInverted /> Github
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
