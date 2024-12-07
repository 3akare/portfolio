import Image from "next/image";
import { projects } from "../../../../public/data/projects";
import {redirect} from "next/navigation";
import Banner from "@/app/components/Banner";
import Link from "next/link";

const urlIsValid = (url: string) => {
    try{
        new URL(url);
        return true
    }catch (error){
        console.log(error)
        return false
    }
}

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function Projects({ params }:{params: Promise<{ id: string }>}){
    const id = parseInt((await params).id);
    const project = projects.find((p) => p.id === id);

    if (!project) {
        redirect('/');
    }
    return (
        <>
            <section
                className="container flex flex-col gap-12 md:gap-16 mt-[4.75rem] mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                    <h2 className="text-[42px] md:text-[54px] lg:text-[74px] font-semibold mb-8">{projects[id].name}</h2>
                    <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                        {projects[id].data.paragraphs && projects[id].data.paragraphs.map((paragraph: string, i) => {
                            return (
                                <p key={i} className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <Image alt={""} src={projects[id].data.image} className={"rounded-2xl"}></Image>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                    <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">Additional</h2>
                    <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                        {projects[id].data.additional && projects[id].data.additional.map((paragraph: string, i) => {
                            return (
                                <p key={i} className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                                    {paragraph}
                                </p>
                            )
                        })}
                    </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                    <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">Tools and
                        Technology</h2>
                    <div className={"flex flex-row gap-1 flex-wrap text-lg md:text-xl"}>
                        {projects[id].data.tools && projects[id].data.tools.map((tool: string, i) => {
                            return (
                                <span key={i} className={"text-lg inline md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                                    {tool}
                                    {projects[id].data.tools ?
                                        i !== projects[id].data.tools.length - 1 ? "," : ""
                                        : ""}
                                </span>
                            )
                        })}
                    </div>
                </div>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                    <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">Links</h2>
                    <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                            <span className={"font-bold"}>Live link:</span>{" "}
                            {
                                urlIsValid(projects[id].data.liveUrl as string)?
                                    <Link href={projects[id].data.liveUrl as string}>
                                        {projects[id].data.liveUrl as string}
                                    </Link>:
                                    projects[id].data.liveUrl
                            }
                        </p>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                            <span className={"font-bold"}>Source Code:</span>{" "}
                            {
                                urlIsValid(projects[id].data.sourceUrl as string)?
                                    <Link href={projects[id].data.sourceUrl as string}>
                                        {projects[id].data.sourceUrl as string}
                                    </Link>:
                                    projects[id].data.sourceUrl
                            }
                        </p>
                    </div>
                </div>
            </section>
            <Banner/>
        </>
    )
}
