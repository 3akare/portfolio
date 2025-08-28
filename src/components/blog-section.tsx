"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { BlogContent, BlogPost } from "@/lib/blog"
import { getRecentBlogPosts } from "@/lib/blog"

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])

  useEffect(() => {
    getRecentBlogPosts(2).then(setPosts)
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getReadingTime = (content: BlogContent[]) => {
    const textContent = content
      .filter((item) => item.type === "text")
      .map((item) => item.content)
      .join(" ")
    const wordsPerMinute = 200
    const wordCount = textContent.split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
  }

  return (
    <section className="mb-12 w-full max-w-[648px]">
      <h2 className="text-xl mb-6 text-accent-blue">Recent Posts</h2>

      {posts.length === 0 ? (
        <div className="text-sm text-black/60 font-mono">No blog posts yet. Check back soon for updates!</div>
      ) : (
        <div className="flex flex-col gap-4">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.id}`}
              target="_self"
              key={post.id}
              className={"py-2 h-fit cursor-pointer transition-all duration-300 group"}
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <h3 className="font-medium text-black group-hover:text-accent-blue transition-colors">{post.title}</h3>
                  <div className="flex items-center gap-4 mt-1 text-xs text-black/60">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{getReadingTime(post.content)} min read</span>
                    </div>
                  </div>
                </div>
                <ArrowRight
                  size={16}
                  className={"text-black/40 transition-transform duration-300 ml-2 flex-shrink-0 group-hover:text-accent-blue"}
                />
              </div>
            </Link>
          ))}
        </div>
      )}
      <div className="mt-6 pt-4 border-t border-black/10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-accent-blue hover:underline font-mono"
        >
          View all posts
          <ArrowRight size={14} />
        </Link>
      </div>
    </section>
  )
}
