import EachBlogDisplay from "@/components/blog/EachBlogDisplay";
import EachBlogSkeleton from "@/components/loading/EachBlogSkeleton";
import Link from "next/link";
import { Suspense } from "react";

export default async function BlogPost({ params }: { params: Promise<any> }) {
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
