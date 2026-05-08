import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
}

// ─── Utilities ───────────────────────────────────────────────────────────────

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function getBlogFiles(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((file) => file.endsWith(".md"));
}

export function getAllPosts(): BlogPostMeta[] {
  const files = getBlogFiles();

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      tags: data.tags || [],
      excerpt: data.excerpt || "",
    };
  });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    tags: data.tags || [],
    excerpt: data.excerpt || "",
    content: processedContent.toString(),
  };
}

export function getAllSlugs(): string[] {
  return getBlogFiles().map((file) => file.replace(/\.md$/, ""));
}
