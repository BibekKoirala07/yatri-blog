import { blogPosts } from "@/data/mock";
import React from "react";
import BlogAddToFavouriteButton from "./BlogAddToFavouriteButton";

const EachBlogDisplay = async ({ params }: { params: Promise<any> }) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { slug } = await params;

  const newSlug = parseInt(slug);

  console.log("params", params);

  const post = blogPosts.filter((each) => each.id == newSlug);

  if (post.length == 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-900 text-center text-xl">
        No such blog with id: {slug} found
      </div>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-sm p-8">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          {post[0].title}
        </h1>
        <BlogAddToFavouriteButton id={post[0].id} />
      </div>

      <div className="text-sm text-gray-500 mb-4">
        <span>
          Date of creation: {new Date(post[0].date).toLocaleDateString()}
        </span>
      </div>

      <div className="prose max-w-none">
        <p className="text-gray-600 text-lg leading-relaxed">
          {post[0].summary}
        </p>
      </div>
    </article>
  );
};

export default EachBlogDisplay;
