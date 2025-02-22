"use client";

import EachBlogDisplay from "@/components/blog/EachBlogDisplay";
import EachBlogSkeleton from "@/components/loading/EachBlogSkeleton";
import { RootState } from "@/lib/store";
import Link from "next/link";
import { Suspense } from "react";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function page({ params }: PageProps) {
  const favouriteCount = useSelector(
    (state: RootState) => state.favourites.favouriteIds.length
  );
  return (
    <div className="min-h-screen bg-gray-50 rounded-xl px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 group"
        >
          <svg
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

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

        <Suspense
          fallback={
            <div>
              <EachBlogSkeleton />
            </div>
          }
        >
          <EachBlogDisplay params={params} />
        </Suspense>
      </div>
    </div>
  );
}
