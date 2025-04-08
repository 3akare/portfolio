"use client"

import { useState } from "react"
import { Github, Twitter, Mail } from "lucide-react"
import Link from "next/link"
import { cn } from "@/app/lib/utils"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "snoopy",
      description: "Nigerian Sign Language to Speech Translation System",
      tags: ["Next.js", "Python", "gRPC", "Bi-LSTM"],
      github: "https://github.com/3akare/snoopy",
    },
    {
      id: 2,
      title: "monty",
      description: "Monty Bytecode Interpreter",
      tags: ["C", "Ubuntu 20.04"],
      github: "https://github.com/3akare/monty",
    },
    {
      id: 3,
      title: "nobr",
      description: "Low-latency Messaging Platform",
      tags: ["Next.js", "Firebase"],
      github: "https://github.com/3akare/nobr",
    },
  ];
  

  return (
    <main className="flex flex-col h-screen bg-black text-white font-mono p-6 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="text-lg">
          <span className="text-terminal-green">&gt;</span> 3akare<span className="blink">_</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/3akare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terminal-green transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/3akare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-terminal-green transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="mailto:bakaredavid007@gmail.com" className="text-white hover:text-terminal-green transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto">
        {/* Intro section */}
        <section className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">I&apos;m 3akare.</h1>
          <h2 className="text-xl mb-4 text-terminal-green">Software Engineer</h2>
          <p className="text-white/70">I build robust, efficient systems with an eye for detail and performance.</p>
        </section>

        {/* Projects section */}
        <section>
          <h2 className="text-xl mb-6 text-terminal-green">Projects</h2>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "border-l-2 pl-4 py-1",
                  activeProject === index ? "border-terminal-green" : "border-white/20",
                )}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.title}</h3>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-terminal-green transition-colors"
                  >
                    <Github size={16} />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </div>

                {activeProject === index && (
                  <div className="mt-2 text-sm text-white/70">
                    <p className="mb-2 capitalize">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-terminal-green">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-xs text-white/40">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-terminal-green">&copy;</span> {new Date().getFullYear()} 3akare
          </div>
        </div>
      </footer>
    </main>
  )
}

