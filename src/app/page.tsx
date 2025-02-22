"use client";

import HomeBlogsDisplay from "@/components/home/HomeBlogsDisplay";
import HomeHeader from "@/components/home/HomeHeader";
import HomePagination from "@/components/home/HomePagination";
import HomeSearch from "@/components/home/HomeSearch";
import HomeBlogsSkeleton from "@/components/loading/HomeBlogsSkeleton";
import { PAGE_SIZE } from "@/data/constants";
import { blogPosts } from "@/data/mock";
import { typePost } from "@/types/types";
import { useEffect, useState } from "react";

const filterPosts = (query: string): typePost[] => {
  if (!query) return blogPosts;
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowerQuery) ||
      post.summary.toLowerCase().includes(lowerQuery)
  );
};

function getBlogs(
  filteredPosts: typePost[],
  currentPage = 1,
  perPage = PAGE_SIZE
) {
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
    }, 500);
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

    const fetchPosts = async () => {
      setLoading(true);
      const filteredPosts = filterPosts(search);
      const { error, posts, hasMorePosts } = await getBlogs(
        filteredPosts,
        currentPage
      );
      setDisplayedPosts({ error, posts, hasMorePosts });
      setLoading(false);
    };
    fetchPosts();
  }, [search, currentPage]);

  const renderContent = () => {
    if (loading) return <HomeBlogsSkeleton />;
    if (displayedPosts.error)
      return (
        <div className="text-red-500 text-xl text-center bg-white rounded-2xl p-6 shadow-md">
          Something went wrong.
        </div>
      );
    if (displayedPosts.posts.length > 0)
      return <HomeBlogsDisplay filteredPosts={displayedPosts.posts} />;
    return (
      <div className="text-center text-gray-500">
        {search ? `No results found for "${search}"` : "No posts available"}
      </div>
    );
  };

  const onPageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="min-h-screen bg-gray-50 rounded-xl px-4 sm:px-10 py-2">
      <div className=" mx-auto">
        <div className="text-center mb-12">
          <HomeHeader />
          <HomeSearch search={search} setSearch={setSearch} />
        </div>

        {renderContent()}

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
