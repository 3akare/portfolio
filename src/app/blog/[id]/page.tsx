"use client"

import { useState, useEffect } from "react"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import type { BlogContent, BlogPost } from "@/lib/blog"
import { getBlogPost } from "@/lib/blog"

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      if (params.id) {
        const blogPost = await getBlogPost(params.id as string)
        setPost(blogPost)
      }
      setLoading(false)
    }
    loadPost()
  }, [params.id])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
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

  if (loading) {
    return (
      <main className="min-h-screen bg-white text-black font-mono p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-sm text-black/60">Loading...</div>
        </div>
      </main>
    )
  }

  if (!post) {
    return (
      <main className="min-h-screen bg-white text-black font-mono p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-accent-blue hover:underline mb-6">
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Blog</span>
          </Link>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-2">Post Not Found</h1>
            <p className="text-sm text-black/60">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white text-black font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link href="/blog" className="inline-flex items-center gap-2 text-accent-blue hover:underline">
              <ArrowLeft size={16} />
              <span className="text-sm">Back to Blog</span>
            </Link>
          </div>

          <article>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <div className="flex md:items-center flex-col md:flex-row gap-4 mb-6 text-sm text-black/60">
              <span>By {post.author}</span>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={14} />
                <span>{getReadingTime(post.content)} min read</span>
              </div>
              {post.featured && (
                <span className="bg-accent-blue/10 text-accent-blue px-2 py-1 rounded text-xs w-fit">Featured</span>
              )}
            </div>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag, i) => (
                  <span key={i} className="text-sm text-accent-blue">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        </header>

        {/* Content */}
        <div className="space-y-6 blog-content">
          {post.content.map((block, index) => (
            <div key={index}>
              {block.type === "text" ? (
                <p className="text-sm leading-relaxed text-black/80">{block.content}</p>
              ) : (
                <div className="space-y-2">
                  <Image
                    src={block.content || "/placeholder.svg?height=400&width=600&query=blog post image"}
                    alt={block.alt || "Blog post image"}
                    width={600}
                    height={400}
                    className="rounded border object-cover w-full"
                  />
                  {block.alt && <p className="text-xs text-black/50 italic text-center">{block.alt}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-black/10">
          <div className="flex items-center justify-between">
            <div className="text-xs text-black/60">
              Published {formatDate(post.publishedAt)}
              {post.updatedAt !== post.publishedAt && <span> • Updated {formatDate(post.updatedAt)}</span>}
            </div>
            <Link href="/blog" className="text-sm text-accent-blue hover:underline">
              ← Back
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
