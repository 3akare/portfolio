export default function About(){
    return (
        <section
            id={"about"}
            className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">About me</h2>
                <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                    <h3 className={"text-xl md:text-2xl"}>I’m David, a software engineer. I use programming languages like C, Java, Javascript, and Python (in that order based on my GitHub activity). I’ve spent about three years learning and working at software companies. Most of my time has been spent building web technologies because it’s the easiest entry point to software development. During this time, I’ve built software and even tried starting a few startups, though they didn’t always work out.</h3>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>I’ve only recently started my proper journey into embedded systems, inspired by my interest in understanding how silicon chips and tiny transistors power computers and the internet. I’m currently learning with the book Introduction to ARM Cortex-M Embedded Systems by Jonathan Valvano, which has been a great starting point. I’m also getting into quantum computing, which I find exciting and full of possibilities.</p>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>Outside work, I enjoy Saturday mornings at my computer, learning something new and trying it out. I like anime (Dr. Stone is my favorite), I play chess (though I haven’t practiced in a while), and I use Neovim, by the way.
                    </p>
                </div>
            </div>
        </section>
    )
}