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

// Mock data for development - in production this would be stored in files
const mockBlogData: BlogData = {
  posts: [
    {
      id: "1",
      title: "Building a Custom Bytecode Interpreter",
      content: [
        {
          type: "image",
          content: "/backend-architecture.png",
          alt: "A diagram showing microservices communicating through an API gateway.",
        },
        {
          type: "text",
          content:
            'Recently, I built a bytecode interpreter called "monty" for a custom stack-based language. This project taught me a lot about low-level programming and memory management.',
        },
        {
          type: "text",
          content:
            "The interpreter executes Monty instructions like push, pall, and pop by parsing .m files line-by-line and managing a doubly linked list stack structure in memory.",
        },
      ],
      excerpt: 'Recently, I built a bytecode interpreter called "monty" for a custom stack-based language...',
      author: "David Bakare",
      publishedAt: "2024-01-15T10:00:00Z",
      updatedAt: "2024-01-15T10:00:00Z",
      tags: ["C", "Programming", "Interpreters"],
      featured: true,
    }
  ],
  lastUpdated: new Date().toISOString(),
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real implementation, this would read from a JSON file or database
  return mockBlogData.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getRecentBlogPosts(limit = 4): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.id === id) || null
}

export async function createBlogPost(post: Omit<BlogPost, "id" | "publishedAt" | "updatedAt">): Promise<BlogPost> {
  const newPost: BlogPost = {
    ...post,
    id: Date.now().toString(),
    publishedAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }

  // In a real implementation, this would write to a JSON file or database
  mockBlogData.posts.unshift(newPost)
  mockBlogData.lastUpdated = new Date().toISOString()

  return newPost
}

export async function updateBlogPost(
  id: string,
  updates: Partial<Omit<BlogPost, "id" | "publishedAt">>,
): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  const postIndex = posts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return null
  }

  const updatedPost: BlogPost = {
    ...posts[postIndex],
    ...updates,
    updatedAt: new Date().toISOString(),
  }

  // In a real implementation, this would update the JSON file or database
  mockBlogData.posts[postIndex] = updatedPost
  mockBlogData.lastUpdated = new Date().toISOString()

  return updatedPost
}

export async function deleteBlogPost(id: string): Promise<boolean> {
  const postIndex = mockBlogData.posts.findIndex((post) => post.id === id)

  if (postIndex === -1) {
    return false
  }

  // In a real implementation, this would update the JSON file or database
  mockBlogData.posts.splice(postIndex, 1)
  mockBlogData.lastUpdated = new Date().toISOString()

  return true
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
