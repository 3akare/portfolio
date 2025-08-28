"use client";

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Projects() {
    const [activeProject, setActiveProject] = useState<null | number>(null)
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
    return (
        <section className="mb-12 w-full max-w-[648px]">
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
    )
}