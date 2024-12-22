import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import AllBlogs from './../pages/AllBlogs/AllBlogs';
import AddBlog from './../pages/AddBlog/AddBlog';
import FeaturedBlogs from './../pages/FeaturedBlogs/FeaturedBlogs';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-blogs",
        element: <AllBlogs />,
      },
      {
        path: "/add-blog",
        element: <AddBlog />,
      },
      {
        path: "/featured-blogs",
        element: <FeaturedBlogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default route;
