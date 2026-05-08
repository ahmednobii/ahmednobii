import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Ahmed Nobi"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Blog post JSON-LD
  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: "Ahmed Nobi",
      url: "https://ahmednobii.me",
    },
    description: post.excerpt,
    keywords: post.tags.join(", "),
    url: `https://ahmednobii.me/blog/${post.slug}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ahmednobii.me/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd),
        }}
      />

      <article className="pt-32 pb-24 px-6" aria-labelledby="post-title">
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <Link
            href="/blog"
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
            Back to blog
          </Link>

          {/* Post header */}
          <header className="mb-12">
            <time
              dateTime={post.date}
              className="text-sm font-mono text-text-secondary/60 uppercase tracking-wider"
            >
              {formattedDate}
            </time>
            <h1
              id="post-title"
              className="text-3xl md:text-4xl lg:text-5xl font-black mt-3 mb-4 gradient-text leading-tight"
            >
              {post.title}
            </h1>
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
          </header>

          {/* Post content */}
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
