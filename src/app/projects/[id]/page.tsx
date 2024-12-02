import Image from "next/image";
import image from "@/../public/image.jpg"
import { projects } from "@/app/projects/[id]/data/projects";
import {redirect} from "next/navigation";
import Banner from "@/app/components/Banner";

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
                    <h2 className="text-[42px] md:text-[74px] lg:text-[80px] font-semibold mb-8">{projects[id].name}</h2>
                    <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is
                            grounded in research and collaboration. I believe that the best results come from
                            understanding
                            the end-user and working closely with the team. With clear communication and an open mind, I
                            make sure each project meets its goals and exceeds expectations.</p>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is
                            grounded in research and collaboration. I believe that the best results come from
                            understanding
                            the end-user and working closely with the team. With clear communication and an open mind, I
                            make sure each project meets its goals and exceeds expectations.</p>
                    </div>
                </div>
                <Image alt={""} src={image} className={"rounded-2xl"}></Image>
                <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                    <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">About me</h2>
                    <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is
                            grounded in research and collaboration. I believe that the best results come from
                            understanding
                            the end-user and working closely with the team. With clear communication and an open mind, I
                            make sure each project meets its goals and exceeds expectations.</p>
                        <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is
                            grounded in research and collaboration. I believe that the best results come from
                            understanding
                            the end-user and working closely with the team. With clear communication and an open mind, I
                            make sure each project meets its goals and exceeds expectations.</p>
                    </div>
                </div>
            </section>
            <Banner/>
        </>
    )
}