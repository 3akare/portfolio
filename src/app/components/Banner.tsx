import Link from "next/link";

export default function Banner() {
    return (
        <section id={"contact"}>
            {/* Desktop Section */}
            <section
                className="container mx-auto max-w-[90rem] py-[60px] px-[40px] md:px-[64px] lg:px-[80px] md:block hidden">
                <div
                    className="flex flex-col items-center justify-center gap-12 px-[80px] py-[128px] bg-[linear-gradient(125deg,#fff5e6,#ffe6eb)] dark:bg-[linear-gradient(125deg,#2c0838,#901d4d,#ff6f66)] rounded-2xl">
                    <h2 className="max-w-[700px] text-5xl lg:text-6xl text-center font-semibold">
                        Want to create something awesome? Drop me an email.
                    </h2>
                    <Link
                        href="mailto:bakaredavid007@gmail.com"
                        className="text-2xl lg:text-3xl text-center font-semibold hover:text-[#999999] transition-colors duration-300"
                    >
                        → bakaredavid007@gmail.com
                    </Link>
                </div>
            </section>

            {/* Mobile Section */}
            <section className="py-[60px] block md:hidden">
                <div
                    className="flex flex-col items-center justify-center gap-12 px-[40px] py-[60px] bg-[linear-gradient(125deg,#fff5e6,#ffe6eb)] dark:bg-[linear-gradient(125deg,#2c0838,#901d4d,#ff6f66)]  text-center bg-[linear-gradient(121deg,#000000,15%,#901d4d,50%,#ff6f66)]">
                    <h2 className="max-w-[700px] text-4xl font-semibold">
                        Want to create something <br/> awesome? Drop me an email.
                    </h2>
                    <Link
                        href="mailto:bakaredavid007@gmail.com"
                        className="text-lg sm:text-xl mf:text-2xl text-center font-semibold hover:text-[#999999] transition-colors duration-300"
                    >
                        → bakaredavid007@gmail.com
                    </Link>
                </div>
            </section>
        </section>
    );
}
