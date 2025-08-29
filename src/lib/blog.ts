export interface BlogPost {
  id: string
  title: string
  content: BlogContent[]
  excerpt: string
  author: string
  publishedAt: string
  updatedAt: string
  tags: string[]
  featured: boolean
}

export interface BlogContent {
  type: "text" | "image"
  content: string
  alt?: string
}

export interface BlogData {
  posts: BlogPost[]
  lastUpdated: string
}

const blogData: BlogData = {
  posts: [],
  lastUpdated: new Date().toISOString(),
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogData.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getRecentBlogPosts(limit = 2): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.id === id) || null
}

export function generateExcerpt(content: BlogContent[], maxLength = 150): string {
  const textContent = content
    .filter((item) => item.type === "text")
    .map((item) => item.content)
    .join(" ")

  if (textContent.length <= maxLength) {
    return textContent
  }

  return textContent.substring(0, maxLength).trim() + "..."
}