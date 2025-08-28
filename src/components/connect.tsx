import { FilePenLineIcon, Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export default function Connect() {
    return (
        <section className="mb-12">
            <h2 className="text-xl mb-6 text-accent-blue">Connect</h2>
            <div className="flex flex-wrap gap-6 items-center">
                <Link
                    href="https://github.com/3akare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-accent-blue transition-colors border border-gray-200 px-3 py-2 rounded hover:border-accent-blue"
                >
                    <Github size={20} />
                    <span className="sr-only">github</span>
                </Link>
                <Link
                    href="https://linkedin.com/in/3akare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-accent-blue transition-colors border border-gray-200 px-3 py-2 rounded hover:border-accent-blue"
                >
                    <Linkedin size={20} />
                    <span className="sr-only">linkedin</span>
                </Link>
                <Link
                    href="mailto:bakaredavid007@gmail.com"
                    className="flex items-center gap-2 text-black hover:text-accent-blue transition-colors border border-gray-200 px-3 py-2 rounded hover:border-accent-blue"
                >
                    <Mail size={20} />
                    <span className="sr-only">email</span>
                </Link>
                <Link
                    href="https://x.com/3akare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-black hover:text-accent-blue transition-colors border border-gray-200 px-3 py-2 rounded hover:border-accent-blue"
                >
                    <Twitter size={20} />
                    <span className="sr-only">twitter</span>
                </Link>
                <Link
                    href="/blog"
                    className="flex items-center gap-2 text-black hover:text-accent-blue transition-colors border border-gray-200 px-3 py-2 rounded hover:border-accent-blue"
                >
                    <FilePenLineIcon size={20} />
                    <span className="sr-only">blog</span>
                </Link>
            </div>
        </section>
    )
}
