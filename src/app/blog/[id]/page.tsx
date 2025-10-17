/* eslint-disable @typescript-eslint/no-explicit-any */

import { notFound } from "next/navigation"
import { getBlogPost, generateExcerpt } from "@/lib/blog"
import BlogPostClientPage from "./blog-post-client-page"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: any): Promise<Metadata> {
  const awaitedParams = await params;
  const post = await getBlogPost(awaitedParams.id)

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
}: any) {
  // 2. AWAIT the params object before accessing its properties
  const awaitedParams = await params;
  const post = await getBlogPost(awaitedParams.id)

  if (!post) {
    notFound()
  }

  return <BlogPostClientPage post={post} />
}
