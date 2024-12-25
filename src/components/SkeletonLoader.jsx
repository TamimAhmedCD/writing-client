import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-11/12 md:w-10/12 mx-auto">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="space-y-5 flex flex-col mb-5 bg-white p-4 rounded-lg"
        >
          <Skeleton className="rounded-xl h-60 w-full" />
          <div className="space-y-3">
            <Skeleton width="50%" height="20px" />
            <Skeleton width="100%" height="20px" />
            <Skeleton width="80%" height="15px" />
          </div>
          <div className="flex gap-3">
            <Skeleton width="30%" height="40px" />
            <Skeleton width="20%" height="40px" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
