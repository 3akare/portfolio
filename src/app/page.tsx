"use client"

import { useState } from "react"
import { Github, Twitter, ExternalLink, FileText, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/app/lib/utils"

export default function Home() {
  const [activeProject, setActiveProject] = useState(0)

  const tools = [
    "JavaScript", "TypeScript", "Java", "Python", "C",
    "Next.js", "React", "Spring Boot", "NestJS", "Firebase",
    "gRPC", "SQL", "NoSQL"
  ];

  const projects = [
    {
      id: 1,
      title: "monty",
      description:
        "A bytecode interpreter for a custom stack-based language.\n\nExecutes Monty instructions (push, pall, pop, etc.) by parsing `.m` files line-by-line, managing a doubly linked list stack structure in memory.\n\nBuilt on Linux (Ubuntu 20.04).",
      tags: ["C", "Ubuntu 20.04"],
      github: "https://github.com/3akare/monty",
      live: null
    },
    {
      id: 2,
      title: "u0date",
      description:
        "A minimalist terminal-based text editor built in C using ncurses.\n\nSupports basic features like undo, redo, cursor movement, and editing modes (Normal/Insert). Designed for simplicity, speed, and low memory usage.",
      tags: ["C", "ncurses"],
      github: "https://github.com/3akare/u0date",
      live: null
    },
    {
      id: 3,
      title: "relay",
      description:
        "A lightweight build automation tool and package manager for C/C++ projects.\n\nInspired by Build2 (https://build2.org), it handles compilation, dependency resolution, and workspace management using a simple Python-based DSL.",
      tags: ["Python", "CMake"],
      github: "https://github.com/3akare/relay",
      live: null
    },
    {
      id: 4,
      title: "drater",
      description:
        "A system for real-time sign language recognition and translation.\n\nUses MediaPipe to extract keypoints from video, a Bi-LSTM model for gesture classification, and a gRPC pipeline for serving predictions.\n\nFinal text output is cleaned and translated with Gemini-2.0-flash.",
      tags: ["Next.js", "Python", "gRPC", "Tensorflow", "Gemini-2.0-flash"],
      github: "https://github.com/3akare/drater",
      live: null
    }
  ];


  return (
    <main className="flex flex-col h-screen bg-white text-black font-mono p-6 md:p-12">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <div className="text-lg">
          <span className="text-accent-blue">&gt;</span> 3akare<span className="blink">_</span>
        </div>
        <div className="flex items-center gap-6">
          <Link
            href="/David-Bakare-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-accent-blue transition-colors"
          >
            <FileText size={20} />
          </Link>
          <Link
            href="https://github.com/3akare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-accent-blue transition-colors"
          >
            <Github size={20} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://linkedin.com/in/3akare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-accent-blue transition-colors"
          >
            <Linkedin size={20} />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link href="mailto:bakaredavid007@gmail.com" className="text-black hover:text-accent-blue transition-colors">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </Link>
          <Link
            href="https://x.com/3akare"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-accent-blue transition-colors"
          >
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto">
        {/* Intro section */}
        <section className="mb-4 md:mb-8 w-full max-w-[648px]">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">Hi, I&apos;m David Bakare.</h1>
          <div className="mb-4 flex gap-2 items-center">
            <h2 className="text-xl text-accent-blue ">
              Software Engineer
            </h2>
            <span className="text-sm">@</span>
            <Link
              href={"https://remita.net"}
              target="_blank"
              rel="noopener noreferrer">
              <Image width={25} height={40} src={"/remita.png"} alt="company logo" className="inline-block"></Image>
            </Link>
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-4 md:mb-8 w-full max-w-[648px]">
          <h2 className="text-xl mb-6 text-accent-blue">Tools</h2>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, i) => (
              <span key={i} className="text-[0.8125rem] md:text-sm">
                {tool} <span className="text-black/60">|</span>
              </span>
            ))}
          </div>
        </section>

        {/* Projects section */}
        <section>
          <h2 className="text-xl mb-6 text-accent-blue">Projects</h2>
          <div className="space-y-4">
            {projects.slice().reverse().map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "border-l-2 pl-4 py-1 cursor-pointer",
                  activeProject === index ? "border-accent-blue" : "border-black/20",
                )}
                onClick={() => setActiveProject(index)}
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.title}</h3>
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                    >
                      <Github size={16} />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                    >
                      <ExternalLink size={16} />
                      <span className="sr-only">Live Site</span>
                    </Link>
                  )}
                </div>

                {activeProject === index && (
                  <div className="mt-2 text-[0.8125rem] md:text-sm text-black/70 cursor-default">
                    <p className="mb-2 whitespace-pre-line">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-accent-blue">
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
      <footer className="mt-12 text-xs text-black/40">
        <div className="flex justify-between items-center">
          <div>
            <span className="text-accent-blue">&copy;</span> {new Date().getFullYear()} 3akare
          </div>
        </div>
      </footer>
    </main>
  )
}

