import Link from "next/link";
import { BlogPostMeta } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPostMeta }) {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="card group">
      <Link
        href={`/blog/${post.slug}`}
        className="block"
        aria-label={`Read: ${post.title}`}
      >
        {/* Date */}
        <time
          dateTime={post.date}
          className="text-xs font-mono text-text-secondary/60 uppercase tracking-wider"
        >
          {formattedDate}
        </time>

        {/* Title */}
        <h3 className="text-xl font-bold text-text-primary mt-2 mb-3 group-hover:gradient-text transition-all duration-300">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 rounded-md bg-surface-light text-text-secondary border border-border/50"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Read more indicator */}
        <div className="mt-4 flex items-center gap-1 text-sm text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Read article
          <svg
            className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </article>
  );
}
