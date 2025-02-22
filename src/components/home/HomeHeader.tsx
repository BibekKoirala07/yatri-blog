"use client";

import { RootState } from "@/lib/store";
import Link from "next/link";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

const HomeHeader = () => {
  const favouriteCount = useSelector(
    (state: RootState) => state.favourites.favouriteIds.length
  );
  // console.log("favouriteCount", favouriteCount);
  return (
    <div>
      <div className="flex justify-end p-4">
        <Link href="/favourites" className="relative">
          <FaHeart
            fill="no"
            className="text-gray-600 text-3xl hover:text-red-500 transition"
          />
          {
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {favouriteCount.toString()}
            </span>
          }
        </Link>
      </div>
      {/* <div className="flex justify-end  p-4">
        <Link href="/favourites" className="">
          <FaHeart className="text-gray-600 text-3xl hover:text-red-500 transition" />
          {
            <span className="right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {favouriteCount.toString()}
            </span>
          }
        </Link>
      </div> */}
      <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
        Yatri Blog
      </h1>
      <p className="text-xl text-gray-600 mb-8">
        Explore our latest thoughts, ideas, and insights
      </p>
      {/* <div>
        <Link href="/favourites" className="absolute z-20  top- right-1/3">
          <FaHeart className="text-gray-600 text-3xl hover:text-red-500 transition" />
          {
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {favouriteCount.toString()}
            </span>
          }
        </Link>
      </div> */}
    </div>
  );
};

export default HomeHeader;
