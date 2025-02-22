"use client";

import { typePost } from "@/types/types";
import Link from "next/link";
import React from "react";

const FavouritesBlogsDisplay = ({
  filteredPosts,
}: {
  filteredPosts: typePost[];
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredPosts.map((post: typePost) => (
        <div key={post.id} className="">
          <Link href={`/blog/${post.id}`} className="group h-full block">
            <article
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl
                        transition-all duration-300 h-full border border-gray-100
                        hover:-translate-y-1"
            >
              <div className="flex flex-col h-full">
                <div className="my-4 flex justify-between mr-6 items-center">
                  <span className="text-sm text-blue-600 font-medium">
                    Article {post.id}
                  </span>
                  {/* <button
                    className="group-hover:scale-110 transition-transform duration-200"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-gray-400 hover:text-red-500 transition-colors duration-200"
                    >
                      <path
                        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button> */}
                </div>
                <h2
                  className="text-2xl font-bold text-gray-900 mb-3
                       group-hover:text-blue-600 transition-colors duration-200"
                >
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-2 mb-4 flex-grow">
                  {post.summary}
                </p>
                <div className="text-sm text-gray-500 mb-4">
                  <span>
                    Published on {new Date(post.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    Read more
                    <svg
                      className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-200"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavouritesBlogsDisplay;
