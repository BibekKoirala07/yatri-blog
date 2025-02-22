import React from "react";

const Button = ({ id }: { id: string }) => {
  return (
    <button
      className="flex items-center gap-2 px-4 py-2 rounded-lg 
         bg-white border border-gray-200 hover:border-red-200
         text-gray-600 hover:text-red-500  hover:bg-gray-200
         transition-all duration-200 group"
      onClick={() => {
        console.log("Add to favorites:", id);
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="group-hover:scale-110 transition-transform duration-200"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* <span className="text-sm font-medium">Add to Favorites</span> */}
    </button>
  );
};

export default Button;
