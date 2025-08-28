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
  posts: [
    {
      id: "1",
      title: "Building a Custom Bytecode Interpreter",
      content: [
        {
          type: "image",
          content: "/assets/backend-architecture.png",
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
    },
    {
      id: "2",
      title: "Building a Custom Bytecode Interpreter",
      content: [
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
      featured: false,
    },
    {
      id: "3",
      title: "Building a Custom Bytecode Interpreter",
      content: [
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
      featured: false,
    }
  ],
  lastUpdated: new Date().toISOString(),
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogData.posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}

export async function getRecentBlogPosts(limit = 4): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.slice(0, limit)
}

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.id === id) || null
}