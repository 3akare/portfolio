import {projects} from "../../../public/data/projects";
import Image from "next/image";
import Link from "next/link"


export default function Projects() {
    return (
        <section id={"work"}
                 className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <h2 className="text-xl font-semibold mb-8">Projects</h2>
            <div
                className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6"
                style={{
                    gridTemplateRows: "repeat(auto-fit, minmax(0, 1fr))",
                }}
            >
                {projects.map(({data:{image, description, title, link}}, index) => {
                    return (
                        <div key={index}
                             className="rounded-t-xl md:rounded-t-2xl relative bg-transparent hover:-translate-y-1 transition-transform duration-[500ms] max-h-[265px] md:max-h-[400px] overflow-clip">
                            <Link href={link}>
                                <Image src={image} alt={description} className="w-full min-h-[165px] lg:min-h-[400px] h-full object-cover rounded-2xl" priority/>
                                <div
                                    className="p-4 relative w-full -top-[5.75rem] dark:bg-[rgb(26,26,26)] bg-[#f7f7f7] rounded-b-xl md:rounded-b-2xl">
                                    <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                                    <p className="text-sm lg:text-base h-10 font-medium text-[#757575] dark:text-[#999999]">{description}</p>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </section>
    );
}
