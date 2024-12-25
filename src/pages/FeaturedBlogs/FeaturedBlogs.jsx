import { useEffect, useState } from "react";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai"; // Importing icons from React Icons
import Loading from "../Home/Loading";
import { Link } from "react-router-dom";

const FeaturedBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sorting, setSorting] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blog");
        const sortedBlogs = response.data
          .map((blog) => ({
            ...blog,
            wordCount: blog.longDes ? blog.longDes.split(" ").length : 0,
          }))
          .sort((a, b) => b.wordCount - a.wordCount)
          .slice(0, 10);
        setBlogs(sortedBlogs);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const columns = [
    {
      accessorKey: "rank",
      header: "Rank",
      cell: (info) => info.row.index + 1,
    },
    {
      accessorKey: "blogTitle",
      header: "Title",
      cell: (info) => {
        const title = info.getValue();
        const blogId = info.row.original._id;
        return (
          <Link title={title} to={`/blog-details/${blogId}`}>
            {title.length > 30 ? `${title.slice(0, 30)}...` : title}
          </Link>
        );
      },
    },
    {
      accessorKey: "authorName",
      header: "Author",
    },
    {
      accessorKey: "wordCount",
      header: "Word Count",
    },
    {
      accessorKey: "createdAt",
      header: "Created At",
      cell: (info) =>
        new Date(info.getValue()).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "2-digit",
        }),
    },
  ];

  const table = useReactTable({
    data: blogs,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-11/12 md:w-10/12 mx-auto mt-10">
      {/* Header */}
      <div className="mt-5 md:mt-10 text-center md:w-4/5 md:mx-auto mb-5">
        <h1 className="md:text-5xl text-3xl font-bold text-light-primary-color leading-tight">
          Featured
          <span className="bg-gradient-to-t from-[#443ea3] to-[#9895ffbb] text-transparent bg-clip-text">
            {" "}
            Blogs
          </span>
        </h1>
        <p className="text-gray-600 mt-5">
          Writing Welcomes to ultimate source for fresh perspectives! Explore{" "}
          <br /> curated content to enlighten, entertain and engage global
          readers.
        </p>
      </div>
      {/* Table */}
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden border border-gray-200 rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map((header) => (
                        <th
                          key={header.id}
                          onClick={header.column.getToggleSortingHandler()}
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase cursor-pointer"
                        >
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                          {header.column.getIsSorted() ? (
                            header.column.getIsSorted() === "asc" ? (
                              <AiOutlineUp className="inline-block ml-1" />
                            ) : (
                              <AiOutlineDown className="inline-block ml-1" />
                            )
                          ) : null}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="hover:bg-gray-50 transition duration-200"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-6 py-4 whitespace-nowrap text-sm text-gray-800"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBlogs;
