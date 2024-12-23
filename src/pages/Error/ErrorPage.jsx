import { useEffect } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  useEffect(() => {
    document.title = "Error | Writing";
  }, []);

  return (
    <div className="grid h-screen place-content-center bg-white px-4">
      <h1 className="uppercase tracking-widest text-gray-500">404 | Not Found</h1>
      <Link to="/" className="text-gray-500 flex items-center pt-3 gap-1"><BsArrowLeftShort className="text-2xl" />Back to Home</Link>
    </div>
  );
};

export default ErrorPage;