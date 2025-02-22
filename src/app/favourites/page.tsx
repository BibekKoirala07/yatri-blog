"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

import { blogPosts } from "@/data/mock";
import HomePagination from "@/components/home/HomePagination";
import HomeBlogsDisplay from "@/components/home/HomeBlogsDisplay";
import { PAGE_SIZE } from "@/data/constants";

const FavouritesPage = () => {
  const favouriteIds = useSelector(
    (state: RootState) => state.favourites.favouriteIds
  );

  const favouritePosts = blogPosts.filter((post) =>
    favouriteIds.includes(post.id)
  );

  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const displayedPosts = favouritePosts.slice(startIndex, endIndex);
  const hasMorePosts = endIndex < favouritePosts.length;

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-10 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Your Favourites</h1>

        {displayedPosts.length === 0 ? (
          <p className="text-gray-500">
            No favourites yet. Go to the{" "}
            <a href="/" className="text-blue-500">
              Home Page
            </a>{" "}
            and add some!
          </p>
        ) : (
          <>
            <HomeBlogsDisplay filteredPosts={displayedPosts} />
            <HomePagination
              currentPage={currentPage}
              loading={false}
              hasPages={hasMorePosts}
              onPageChange={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default FavouritesPage;
