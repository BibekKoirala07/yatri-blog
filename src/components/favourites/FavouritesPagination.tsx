// import React from "react";

// const FavouritesPagination = () => {
//   return return (
//     <div className="flex justify-center items-center gap-4 mt-12 bg-white shadow-md p-4 rounded-lg">
//       <button
//         className={`rounded-lg px-4 py-2 font-medium transition-all border
//             disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500
//             bg-black text-white border-black hover:bg-gray-900
//         }`}
//         disabled={loading || currentPage === 1}
//         onClick={() => onPageChange(currentPage - 1)}
//       >
//         ← Prev
//       </button>

//       <button
//         className="w-10 h-10 flex items-center justify-center rounded-md text-lg font-medium border bg-gray-200 text-black cursor-default"
//         disabled
//       >
//         {currentPage}
//       </button>

//       <button
//         className={`rounded-lg px-4 py-2 font-medium transition-all border
//             disabeld:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500
//             bg-black text-white border-black hover:bg-gray-900
//         `}
//         disabled={loading || !hasPages}
//         onClick={() => onPageChange(currentPage + 1)}
//       >
//         Next →
//       </button>
//     </div>
//   );;
// };

// export default FavouritesPagination;

"use client";
import React from "react";

interface FavouritesPaginationProps {
  currentPage: number;
  hasPages: boolean;
  onPageChange: (page: number) => void;
  loading: boolean;
}

const FavouritesPagination: React.FC<FavouritesPaginationProps> = ({
  currentPage,
  hasPages,
  loading,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center gap-4 mt-12 bg-white shadow-md p-4 rounded-lg">
      <button
        className={`rounded-lg px-4 py-2 font-medium transition-all border 
            disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500
            bg-black text-white border-black hover:bg-gray-900
        }`}
        disabled={loading || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        ← Prev
      </button>

      <button
        className="w-10 h-10 flex items-center justify-center rounded-md text-lg font-medium border bg-gray-200 text-black cursor-default"
        disabled
      >
        {currentPage}
      </button>

      <button
        className={`rounded-lg px-4 py-2 font-medium transition-all border 
            disabeld:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:border-gray-300 disabled:text-gray-500
            bg-black text-white border-black hover:bg-gray-900
        `}
        disabled={loading || !hasPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next →
      </button>
    </div>
  );
};

export default FavouritesPagination;
