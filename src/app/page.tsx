import Tools from "../components/tools"
import Connect from "../components/connect"
import Projects from "../components/projects"
import OpenSource from "../components/open-source"
import { BlogSection } from "@/components/blog-section"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex flex-col h-screen bg-white text-black font-mono p-6 md:p-12 my-12">
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
            <Link href={"https://outlinr.xyz"} target="_blank">
              <Image
                width={20}
                height={20}
                src={"/favicon.svg"}
                alt="outlinr"
                className="inline-block"
              ></Image>
            </Link>
          </div>
        </section>
        {/* Tools Section */}
        <Tools />
        {/* Socials */}
        <Connect />
        {/* Blog section */}
        <BlogSection />
        {/* Projects section */}
        <Projects />
        {/* Open source contributions */}
        <OpenSource />
      </div>
    </main>
  )
}

