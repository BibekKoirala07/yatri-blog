import React from "react";

const EachBlogSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8">
      <div className="h-10 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>

      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
      </div>
    </div>
  );
};

export default EachBlogSkeleton;
