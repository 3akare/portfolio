export default function Tools() {
    const tools = [
        "JavaScript", "TypeScript", "Java", "Python", "C",
        "Next.js", "React", "Spring Boot", "NestJS", "Firebase",
        "gRPC", "SQL", "NoSQL"
    ];

    return (
        <section className="mb-4 md:mb-8 w-full max-w-[648px]">
            <h2 className="text-xl mb-6 text-accent-blue">Tools</h2>
            <div className="flex flex-wrap gap-2">
                {tools.map((tool, i) => (
                    <span key={i} className="text-[0.8125rem] md:text-sm">
                        {tool} <span className="text-black/60">|</span>
                    </span>
                ))}
            </div>
        </section>
    )
}