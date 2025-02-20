import React from "react";

const HomeSearch = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: any;
}) => {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full px-6 py-4 text-lg rounded-full border border-gray-200 
             shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 
             focus:border-transparent transition-all duration-200"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default HomeSearch;
