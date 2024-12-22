import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AuthProvider from "./context/AuthProvider.jsx";
import route from "./routes/route.jsx";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={route}/>
      <ToastContainer/>
    </AuthProvider>
  </StrictMode>
);
