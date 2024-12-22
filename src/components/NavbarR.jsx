import React, { useContext } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  MenuItem,
  MenuList,
  MenuHandler,
  Menu,
} from "@material-tailwind/react";

import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";
import { HiInboxArrowDown } from "react-icons/hi2";
import { IoIosHelpBuoy, IoMdSettings } from "react-icons/io";
import { MdBookmarkAdd } from "react-icons/md";
import authContext from "../context/AuthContext";

const NavbarR = () => {
  const { user, logOut } = useContext(authContext);
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const profile = (
    <>
      <MenuItem>
        <div className="flex gap-2">
          <FaCircleUser></FaCircleUser> <Link to="/my_profile">My Profile</Link>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="flex gap-2">
          <IoMdSettings />{" "}
          <Link to="/my_profile/update_profile">Edit Profile</Link>
        </div>
      </MenuItem>
      <MenuItem>
        <div className="flex gap-2">
          <HiInboxArrowDown /> Inbox
        </div>
      </MenuItem>
      <MenuItem>
        <div className="flex gap-2">
          <IoIosHelpBuoy /> Help
        </div>
      </MenuItem>
    </>
  );

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-light-primary-color "
      >
        <NavLink to="/" className="flex items-center">
          Home
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-light-primary-color"
      >
        <NavLink to="/all-blogs" className="flex items-center">
          All Blogs
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-light-primary-color"
      >
        <NavLink to="/add-blog" className="flex items-center">
          Add Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium text-light-primary-color"
      >
        <NavLink to="/featured-blogs" className="flex items-center">
          Featured Blogs
        </NavLink>
      </Typography>
    </ul>
  );
  return (
    <div className="sticky top-0 z-10">
      <Navbar className="bg-[hsla(240, 63%, 13%, 1)] h-max max-w-full rounded-none border-none px-0 py-2 lg:py-4 shadow-none">
        <div className="flex items-center justify-between text-blue-gray-900 lg:w-10/12 w-11/12 mx-auto">
          <Link to='/'>
            <Typography
              as="a"
              href="#"
              className="mr-4 cursor-pointer py-1.5 font-semibold text-light-primary-color flex items-center"
            >
              <img src={logo} alt="" className="mr-2 w-11"/>
              <h1 className="uppercase text-lg">Writing</h1>
            </Typography>
          </Link>
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-x-3">
                {/* WatchList Menu */}
                <NavLink to="/watch-list">
                  <MdBookmarkAdd className="text-3xl text-white" />
                </NavLink>
                {/* Profile Menu */}
                <Menu placement="bottom-start">
                  <MenuHandler>
                    {user && user.photoURL ? (
                      <img
                        src={user.photoURL}
                        className="rounded-full w-9 h-9 object-cover cursor-pointer"
                        alt=""
                      />
                    ) : (
                      <IconButton
                        size="md"
                        className="rounded-full bg-transparent"
                      >
                        <FaCircleUser className="text-4xl text-black  "></FaCircleUser>
                      </IconButton>
                    )}
                  </MenuHandler>
                  <MenuList>
                    <div className="flex items-center gap-3">
                      <div>
                        {user && user.photoURL ? (
                          <img
                            src={user.photoURL}
                            className="w-8 h-8 object-cover rounded-full"
                            alt=""
                          />
                        ) : (
                          <FaCircleUser className="text-3xl text-black  "></FaCircleUser>
                        )}
                      </div>
                      <div>
                        {user && user.displayName ? (
                          <h1 className="font-semibold text-gray-800">
                            {user.displayName}
                          </h1>
                        ) : (
                          <h1 className="font-semibold text-gray-800">
                            User Name
                          </h1>
                        )}
                        {user && user.email ? (
                          <p className="text-sm font-normal text-gray-800">
                            {user.email}
                          </p>
                        ) : (
                          <h1>email@user.com</h1>
                        )}
                      </div>
                    </div>
                    <div className="divider mt-0 mb-0"></div>
                    <div>{profile}</div>
                  </MenuList>
                </Menu>
                <Link onClick={logOut} className="hidden lg:block">
                  <Button variant="text" size="sm" className="btn">
                    <span>Log Out</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center gap-x-3">
                <Link to="/login" className="hidden lg:block">
                  <Button variant="text" size="sm" className="btn">
                    <span>Log In</span>
                  </Button>
                </Link>
                <Link to="/register" className="hidden lg:block">
                  <Button variant="gradient" size="sm" className="btn bg-gradient-to-t from-[#514dcc] to-[#9895ff] hover:from-[#4440b4] hover:to-[#9895ff] shadow-none hover:shadow-[#9895ffa8] hover:border-none border-none">
                    <span>Register</span>
                  </Button>
                </Link>
              </div>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="#000"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="#000"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <MobileNav open={openNav} className="w-11/12 mx-auto">
          {navList}
          {user ? (
            <div className="flex items-center gap-x-1">
              <Link to="/register" className="block w-full">
                <Button variant="text" size="sm" className="btn w-full">
                  <span>Add account</span>
                </Button>
              </Link>
              <Link onClick={logOut} className="block w-full">
                <Button variant="gradient" size="sm" className="btn w-full">
                  <span>Log Out</span>
                </Button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center gap-x-1">
              <Link to="/login" className="block w-full">
                <Button variant="text" size="sm" className="btn w-full">
                  <span>Log In</span>
                </Button>
              </Link>
              <Link to="/register" className="block w-full">
                <Button variant="gradient" size="sm" className="btn w-full">
                  <span>Register</span>
                </Button>
              </Link>
            </div>
          )}
        </MobileNav>
      </Navbar>
    </div>
  );
};

export default NavbarR;
