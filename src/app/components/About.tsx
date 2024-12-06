export default function About(){
    return (
        <section
            id={"about"}
            className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">About me</h2>
                <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                    <h3 className={"text-xl md:text-2xl"}>I am a software developer with a knack for creating efficient, user-centric solutions. Over the last few years, I have contributed to diverse projects spanning industries such as finance, accessibility, and communication. From building a webhook notification system for a leading fintech company to designing a hand gesture recognition application for accessibility, I thrive on translating complex ideas into robust, scalable software systems.</h3>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>My approach to development emphasizes research, collaboration, and innovation. I believe that great products emerge from deeply understanding the problem space, leveraging the right tools, and working closely with a talented team. Whether it’s designing modular architectures, integrating cutting-edge technologies like gRPC or AI frameworks, or ensuring seamless user experiences, I approach every challenge with a clear focus on excellence and adaptability.</p>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>Beyond the technical details, I value the impact of my work. From fostering anonymous communication through chat platforms to enhancing accessibility for the hearing impaired, I strive to build solutions that matter. I am driven by curiosity, constantly expanding my skills and exploring new domains to create meaningful, high-quality software that exceeds expectations.</p>
                </div>
            </div>
        </section>
    )
}