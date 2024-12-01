export default function About(){
    return (
        <section
            id={"about"}
            className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">About me</h2>
                <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                    <h3 className={"text-2xl md:text-3xl"}>I am a dedicated product designer with a passion for creating fun and intuitive designs. Over the last 7 years I’ve worked on many projects in many industries. From mobile applications to web products. I translate ideas into effective and highly-crafted solutions.</h3>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is grounded in research and collaboration. I believe that the best results come from understanding the end-user and working closely with the team. With clear communication and an open mind, I make sure each project meets its goals and exceeds expectations.</p>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to design is grounded in research and collaboration. I believe that the best results come from understanding the end-user and working closely with the team. With clear communication and an open mind, I make sure each project meets its goals and exceeds expectations.</p>
                </div>
            </div>
        </section>)
}