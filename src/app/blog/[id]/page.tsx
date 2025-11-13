import { notFound } from "next/navigation"
import { getBlogPost, generateExcerpt } from "@/lib/blog"
import BlogPostClientPage from "./blog-post-client-page"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The blog post you are looking for doesn't exist.",
    }
  }

  const postExcerpt = generateExcerpt(post.content);

  const firstImage = post.content.find(block => block.type === "image")
  const imageUrl = firstImage
    ? `https://3akare.vercel.app${firstImage.content}`
    : "https://3akare.vercel.app/default-blog-image.jpg"

  return {
    title: post.title,
    description: postExcerpt,
    keywords: post.tags.join(", "),
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: postExcerpt,
      url: `https://3akare.vercel.app/blog/${post.id}`,
      type: "article",
      images: [{ url: imageUrl, alt: post.title }],
      publishedTime: post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: postExcerpt,
      images: [imageUrl],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    notFound()
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return <BlogPostClientPage post={post} formattedDate={formattedDate} />
}
