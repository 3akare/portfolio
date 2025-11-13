import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { BlogContent } from "@/lib/blog"
import { getPaginatedBlogPosts, generateExcerpt } from "@/lib/blog";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const awaitedSearchParams = await searchParams;
  const currentPage = Number(awaitedSearchParams?.page) || 1;
  const { posts, totalPages } = await getPaginatedBlogPosts(currentPage)

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

  return (
    <main className="min-h-screen bg-white text-black font-mono p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-accent-blue hover:underline mb-6">
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Portfolio</span>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Blog</h1>
          <p className="text-sm text-black/60">Thoughts on programming, technology, and stuff</p>
        </header>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-sm text-black/60">No blog posts yet. Check back soon!</p>
          </div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className={cn(
                  "border-l-2 hover:border-accent-blue pl-6 py-4 cursor-pointer transition-all duration-300"
                )}>
                <div className="space-y-3">
                  <div>
                    <Link href={`/blog/${post.id}`} className="text-xl font-medium text-black hover:text-accent-blue transition-colors">
                      {post.title}
                    </Link>
                    <div className="flex items-center gap-4 mt-2 text-xs text-black/60">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{getReadingTime(post.content)} min read</span>
                      </div>
                      {post.featured && (<span className="bg-accent-blue/10 text-accent-blue px-2 py-1 rounded text-xs">Featured</span>)}
                    </div>
                  </div>
                  <p className="text-sm text-black/70 leading-relaxed">{generateExcerpt(post.content)}</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (<span key={i} className="text-xs text-accent-blue">{tag}</span>))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={currentPage > 1 ? `/blog?page=${currentPage - 1}` : "#"}
                  className={currentPage > 1 ? "" : "pointer-events-none text-black/30"}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, i) => (
                <PaginationItem key={i}>
                  <PaginationLink
                    href={`/blog?page=${i + 1}`}
                    isActive={currentPage === i + 1}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href={currentPage < totalPages ? `/blog?page=${currentPage + 1}` : "#"}
                  className={currentPage < totalPages ? "" : "pointer-events-none text-black/30"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </main>
  )
}
