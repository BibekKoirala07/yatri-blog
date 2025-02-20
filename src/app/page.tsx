"use client";

import HomeBlogsDisplay from "@/components/home/HomeBlogsDisplay";
import HomeHeader from "@/components/home/HomeHeader";
import HomePagination from "@/components/home/HomePagination";
import HomeSearch from "@/components/home/HomeSearch";
import HomeBlogsSkeleton from "@/components/loading/HomeBlogsSkeleton";
import { blogPosts } from "@/data/mock";
import { typePost } from "@/types/types";
import { useEffect, useState } from "react";

function getBlogs(filteredPosts: typePost[], currentPage = 1, perPage = 5) {
  return new Promise<{
    hasMorePosts: boolean;
    error: string;
    posts: typePost[];
  }>((resolve) => {
    setTimeout(() => {
      const startIndex = (currentPage - 1) * perPage;
      const endIndex = startIndex + perPage;
      const posts = filteredPosts.slice(startIndex, endIndex);
      const hasMorePosts = endIndex < blogPosts.length;
      resolve({ hasMorePosts, posts, error: "" });
    }, 3000);
  });
}

type DisplayedPosts = {
  hasMorePosts: boolean;
  error: string;
  posts: typePost[];
};

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [displayedPosts, setDisplayedPosts] = useState<DisplayedPosts>({
    hasMorePosts: false,
    error: "",
    posts: [],
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    (async () => {
      const filteredPosts = search
        ? blogPosts.filter(
            (post) =>
              post.title.toLowerCase().includes(search.toLowerCase()) ||
              post.summary.toLowerCase().includes(search.toLowerCase())
          )
        : blogPosts;
      const { error, posts, hasMorePosts } = await getBlogs(
        filteredPosts,
        currentPage
      );
      setDisplayedPosts({ error, posts, hasMorePosts });
      setLoading(false);
    })();
  }, [search, currentPage]);

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <HomeHeader />
          <HomeSearch search={search} setSearch={setSearch} />
        </div>

        {loading ? (
          <HomeBlogsSkeleton />
        ) : displayedPosts?.error ? (
          <div className="text-red-500 text-xl text-center bg-white rounded-2xl p-6 shadow-md">
            Something went wrong.
          </div>
        ) : displayedPosts?.posts.length > 0 ? (
          <HomeBlogsDisplay filteredPosts={displayedPosts.posts} />
        ) : (
          <div className="text-center text-gray-500">
            {search ? `No results found for "${search}"` : "No posts available"}
          </div>
        )}

        <HomePagination
          currentPage={currentPage}
          loading={loading}
          hasPages={displayedPosts?.hasMorePosts || false}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}
