import Link from "next/link";

export default function Footer(){
    return (
        <footer
            className={"container mx-auto max-w-[90rem] py-[80px] px-[40px] md:px-[64px] lg:py-[128px] lg:px-[80px] flex flex-col gap-12 md:gap-0  md:flex-row justify-between items-center capitalize"}>
            <ul className={"flex flex-row gap-4 font-medium text-lg "}>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                    <Link href={"./#work"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        work
                    </Link>
                </li>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                    <Link href={"./#about"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        about
                    </Link>
                </li>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                    <Link href={"./#contact"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        contact
                    </Link>
                </li>
            </ul>
            <ul className={"flex flex-row gap-1 font-medium text-lg"}>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                    <Link href={"https://x.com/3akare"} target={"_blank"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        Twitter
                    </Link>
                </li>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"} >
                    <Link href={"https://github.com/3akare"} target={"_blank"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        Github
                    </Link>
                </li>
                <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                    <Link href={"https://linkedin.com/in/david-bakare"} target={"_blank"}
                          className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                        LinkedIn
                    </Link>
                </li>
            </ul>
        </footer>
    )
}