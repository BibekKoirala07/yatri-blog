import { blogPosts } from "@/data/mock";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

const EachBlogDisplay = async ({ params }: { params: any }) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const { slug } = await params;

  const post = blogPosts.filter((each) => each.id == slug);

  if (post.length == 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm p-8 text-gray-900 text-center text-xl">
        No such blog with id: {slug} found
      </div>
    );
  }

  return (
    <article className="bg-white rounded-2xl shadow-sm p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
        {post[0].title}
      </h1>

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
