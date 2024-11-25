export default function Experience(){
    const experiences = [
        {
            company: "Remita",
            jobTitle: "Software Engineer",
            duration: "April 2024 - October 2024"
        },{
            company: "Remita",
            jobTitle: "Software Engineer",
            duration: "April 2024 - October 2024"
        },{
            company: "Remita",
            jobTitle: "Software Engineer",
            duration: "April 2024 - October 2024"
        }
    ]
    return (
        <section className="container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px]">
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-x-6"}>
                <h2 className="text-[24px] md:text-[30px] lg:text-[32px] font-semibold mb-8">Experience</h2>
                <div className={"flex flex-col gap-12 text-lg md:text-xl"}>
                    {experiences.map(({company, jobTitle, duration}, index) => {
                        return (
                            <div key={index} className={"pb-12 border-b-[0.5px] border-0 border-gray-700 flex flex-col gap-4"}>
                                <div>
                                    <h3 className={"font-semibold py-[0.5px]"}>{company}</h3>
                                    <h4 className={"font-semibold py-[0.5px] text-[#b8b8b8]"}>{jobTitle}</h4>
                                </div>
                                <p className={"text-[#999999]"}>{duration}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}