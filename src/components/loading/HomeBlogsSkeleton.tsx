import React from "react";

const HomeBlogsSkeleton = () => {
  console.log("here was it");
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 
                     animate-pulse h-full"
        >
          <div className="flex flex-col h-full">
            <div className="mb-4">
              <div className="w-24 h-4 bg-gray-300 rounded"></div>
            </div>
            <div className="w-3/4 h-6 bg-gray-400 rounded mb-3"></div>
            <div className="w-full h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-5/6 h-4 bg-gray-300 rounded mb-4"></div>
            <div className="w-24 h-4 bg-gray-400 rounded mt-auto"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeBlogsSkeleton;
