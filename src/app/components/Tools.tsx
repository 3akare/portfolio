export default function Tools(){
    return (
        <section
            id={"tools"}
            className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">Tools and Technologies</h2>
                <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                    <p className={"text-lg md:text-xl text-[#333333] dark:text-[#cccccc]"}>
                    C, Java, Javascript, Python, MySQL, MongoDB
                    </p>
                </div>
            </div>
        </section>
    )
}