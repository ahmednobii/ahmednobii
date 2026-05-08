import { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about Android development, Kotlin Multiplatform, Jetpack Compose, mobile architecture, and engineering leadership by Ahmed Nobi.",
  openGraph: {
    title: "Blog — Ahmed Nobi",
    description:
      "Articles about Android, KMP, Jetpack Compose, and mobile engineering.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="pt-32 pb-24 px-6" aria-labelledby="blog-heading">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent-cyan transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to home
        </Link>

        <h1 id="blog-heading" className="section-heading">
          <span className="gradient-text">Blog</span>
        </h1>
        <p className="section-subheading">
          Thoughts on Android, Kotlin Multiplatform, architecture, and
          engineering leadership.
        </p>

        {/* Posts */}
        {posts.length === 0 ? (
          <div className="card text-center py-16">
            <p className="text-text-secondary">No posts yet. Stay tuned!</p>
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
