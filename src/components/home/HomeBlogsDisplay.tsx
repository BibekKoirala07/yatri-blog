import { typePost } from "@/types/types";
import Link from "next/link";
import React from "react";

const HomeBlogsDisplay = ({ filteredPosts }: { filteredPosts: typePost[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {filteredPosts.map((post: any, index: number) => (
        <Link key={post.id} href={`/blog/${post.id}`} className="group block">
          <article
            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl 
                        transition-all duration-300 h-full border border-gray-100
                        hover:-translate-y-1"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <span className="text-sm text-blue-600 font-medium">
                  Article {post.id}
                </span>
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
      ))}
    </div>
  );
};

export default HomeBlogsDisplay;
