import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

const socials = [
    { url: "https://github.com/3akare", icon: Github, title: "github" },
    { url: "https://Linkedin.com/in/3akare", icon: Linkedin, title: "linkedin" },
    { url: "mailto:bakaredavid007@gmail.com", icon: Mail, title: "mail" },
]
export default function Connect() {
    return (
        <section className="mb-12">
            <h2 className="text-xl mb-6 text-accent-blue">Connect</h2>
            <div className="flex flex-wrap gap-6 items-center">
                {socials.map((social) =>
                    <Link
                        key={social.title}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-black transition-colors px-3 py-2 rounded hover:text-accent-blue"
                    >
                        <social.icon size={20} />
                        <span className="sr-only">{social.title}</span>
                    </Link>

                )}
            </div>
        </section>
    )
}
