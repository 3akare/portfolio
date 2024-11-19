export default function HeroSection() {
    return (
        <section
            className={"container mx-auto max-w-[90rem] w-full flex flex-wrap text-wrap flex-row justify-between items-center py-[3.75rem] px-[2.5rem] md:py-[5rem] lg:py-[7.5rem] md:px-[4rem]"}>
            <h1 className={"text-[2.25rem] md:text-[3.25rem] lg:text-[4rem] leading-[1.05] font-semibold"}>
                I’m David—a software engineer with <span className={"dark:text-[#999] text-[#757575] bg-transparent"}>2.5 years experience building software.</span>
            </h1>
        </section>
    );
}
