import Link from "next/link"

export default function Header() {
    return (
        <header className="flex justify-between items-center mb-12">
            <Link href={"/"} className="text-lg">
                <span className="text-accent-blue">&gt;</span> 3akare<span className="blink">_</span>
            </Link>
            <div className="flex items-center gap-6">
                <Link
                    href="/david-bakare-resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black hover:text-accent-blue transition-colors"
                >
                    resume
                </Link>
            </div>
        </header>
    )
}