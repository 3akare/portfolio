"use client"

import { useState } from "react"
import { Github, Twitter, ExternalLink, FileText, Mail, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/app/lib/utils"

export default function Home() {
  const [activeProject, setActiveProject] = useState<null | number>(null)
  const [activeContributions, setActiveContributions] = useState<null | number>(null)

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
        "A minimalist terminal-based text editor built in C using ncurses.\n\nSupports basic features like undo, redo, cursor movement, and editing modes (Normal/Insert).\n\nDesigned for simplicity, speed, and low memory usage.",
      tags: ["C", "ncurses"],
      github: "https://github.com/3akare/u0date",
      live: null
    },
    {
      id: 3,
      title: "relay",
      description:
        "A lightweight build automation tool and package manager for C/C++ projects.\n\nIt handles compilation, dependency resolution, and workspace management using a simple Python-based DSL.\n\nInspired by Build2 (https://build2.org).",
      tags: ["Python", "CMake", "vcpkg"],
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
    },
    {
      id: 5,
      title: "imbed",
      description:
        "A lightweight in-memory key-value store supporting GET and SET with active/passive expiration.\n\nUses RESP for compatibility with existing Redis clients.\n\nNo persistence (yet).",
      tags: ["Java"],
      github: "https://github.com/3akare/imbed",
      live: null
    }
  ];

  const contributions = [
    {
      "id": 1,
      "title": "Universal Media Server",
      "description": "A free, open-source DLNA, UPnP and HTTP/S media server written in Java.\n\nStreams or transcodes nearly any media format to TVs, gaming consoles, smartphones, and more with minimal setup.\n\nOriginally forked from PS3 Media Server for better stability, broader format support, and ease of use.",
      "tags": ["Java", "DLNA/UPnP", "Open-Source"],
      "github": "https://github.com/UniversalMediaServer",
      "live": "https://www.universalmediaserver.com/"
    },
    {
      "id": 2,
      "title": "LF Energy – Hyphae APIS",
      "description": "Open-source microgrid software for peer-to-peer renewable energy exchange.\n\nAutomates distribution and balancing of power between local storage systems over DC and AC grids.\n\nEvolved from Sony CSL’s APIS project, now part of LF Energy’s microgrid tools.",
      "tags": ["Microgrid", "P2P energy", "Open-Source"],
      "github": "https://github.com/hyphae",
      "live": "https://lfenergy.org/projects/hyphae/"
    }
  ]

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
          <div className="flex gap-2 items-center">
            <h2 className="text-xl text-accent-blue ">
              Software Engineer
            </h2>
            <span className="text-sm">@</span>
            {/* <Link
              href="https://www.polaroidhq.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                width={25}
                height={25}
                src="/polaroidhq.png"
                alt="polaroid company logo"
                className="inline-block rounded-full"
              />
            </Link> */}
            {/* <Link
              href={"https://remita.net"}
              target="_blank"
              rel="noopener noreferrer">
              <Image width={25} height={40} src={"/remita.png"} alt="remita company logo" className="inline-block"></Image>
            </Link> */}
            <Link
              href={"#"}
              rel="noopener noreferrer">
              <Image width={20} height={20} src={"/cadro.png"} alt="cadro company logo" className="inline-block"></Image>
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
        <section className="mb-4 md:mb-8 w-full max-w-[648px]">
          <h2 className="text-xl mb-6 text-accent-blue">Projects</h2>
          <div className="space-y-4">
            {projects.slice().reverse().map((project, index) => (
              <div
                key={project.id}
                className={cn(
                  "border-l-2 pl-4 py-1 cursor-pointer",
                  activeProject === index ? "border-accent-blue" : "border-black/20",
                )}
                onClick={() =>
                  setActiveProject(activeProject === index ? null : index)
                }
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{project.title}</h3>
                  <div className="flex items-center justify-center gap-2">
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
                </div>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    activeProject === index ? "max-h-96 mt-2" : "max-h-0"
                  )}
                >
                  <div className="text-[0.8125rem] md:text-sm text-black/70 cursor-default">
                    <p className="mb-2 whitespace-pre-line">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-accent-blue">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Open source contributions */}
        <section className="mb-4 md:mb-8 w-full max-w-[648px]">
          <h2 className="text-xl mb-6 text-accent-blue">Open Source Contributions</h2>
          <div className="space-y-4">
            {contributions.slice().reverse().map((contribution, index) => (
              <div
                key={contribution.id}
                className={cn(
                  "border-l-2 pl-4 py-1 cursor-pointer",
                  activeContributions === index ? "border-accent-blue" : "border-black/20",
                )}
                onClick={() =>
                  setActiveContributions(activeContributions === index ? null : index)
                }
              >
                <div className="flex justify-between items-start">
                  <h3 className="font-medium">{contribution.title}</h3>
                  <div className="flex items-center justify-center gap-2">
                    {contribution.github && (
                      <Link
                        href={contribution.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                      >
                        <Github size={16} />
                        <span className="sr-only">GitHub</span>
                      </Link>
                    )}
                    {contribution.live && (
                      <Link
                        href={contribution.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black/60 hover:text-accent-blue transition-colors ml-2"
                      >
                        <ExternalLink size={16} />
                        <span className="sr-only">Live Site</span>
                      </Link>
                    )}
                  </div>
                </div>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500 ease-in-out",
                    activeContributions === index ? "max-h-96 mt-2" : "max-h-0"
                  )}
                >
                  <div className="text-[0.8125rem] md:text-sm text-black/70 cursor-default">
                    <p className="mb-2 whitespace-pre-line">{contribution.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {contribution.tags.map((tag, i) => (
                        <span key={i} className="text-xs text-accent-blue">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
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

