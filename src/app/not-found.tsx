import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <main className="flex flex-col h-screen bg-white text-black font-mono p-6 md:p-12">
            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center max-w-3xl mx-auto">
                <section className="text-center space-y-6">
                    {/* 404 Display */}
                    <div className="space-y-4">
                        <h1 className="text-6xl md:text-8xl font-bold text-accent-blue">404</h1>
                        <div className="border-l-2 border-accent-blue pl-4 inline-block">
                            <h2 className="text-xl md:text-2xl font-medium">Page Not Found</h2>
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4 max-w-md mx-auto">
                        <p className="text-sm md:text-base text-black/70">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        </p>
                        <div className="text-xs text-black/50 font-mono">
                            <span className="text-accent-blue">error:</span> ENOENT: no such file or directory
                        </div>
                    </div>

                    {/* Navigation Options */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-4 py-2 border border-black/20 hover:border-accent-blue hover:text-accent-blue transition-colors"
                        >
                            <ArrowLeft size={16} />
                            <span className="text-sm">Go back home</span>
                        </Link>
                        <Link
                            href="/blog"
                            className="flex items-center gap-2 px-4 py-2 border border-black/20 hover:border-accent-blue hover:text-accent-blue transition-colors"
                        >
                            <span className="text-sm">View blog</span>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    )
}
