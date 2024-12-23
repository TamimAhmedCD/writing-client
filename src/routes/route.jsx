import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/Home/Home";
import AllBlogs from "./../pages/AllBlogs/AllBlogs";
import AddBlog from "./../pages/AddBlog/AddBlog";
import FeaturedBlogs from "./../pages/FeaturedBlogs/FeaturedBlogs";
import Login from "./../pages/Login/Login";
import Register from "./../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/Error/ErrorPage";

const route = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
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
        element: (
          <PrivateRoutes>
            <AddBlog />
          </PrivateRoutes>
        ),
      },
      {
        path: "/featured-blogs",
        element: (
          <PrivateRoutes>
            <FeaturedBlogs />
          </PrivateRoutes>
        ),
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
