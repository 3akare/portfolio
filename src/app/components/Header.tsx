"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setShowMenu((prevState) => !prevState);
    };

    const handleLinkClick = (url: string) => {
        handleClick();
        router.push(url);
    };

    return (
        <>
            <header className={"w-full fixed top-0 flex justify-center z-20 "}>
                <nav className={"bg-white dark:bg-black w-full h-[4.75rem] container mx-auto max-w-[90rem] flex flex-row justify-between items-center px-[40px] md:px-[64px] lg:px-[80px]"}>
                    <p onClick={() => {
                        if (showMenu) handleLinkClick("/")
                        else router.push("/")
                    }} className={"capitalize font-semibold text-lg md:text-xl hover:cursor-pointer"}>
                        3AKARE
                    </p>
                    <ul className={"flex-row gap-1 font-medium text-lg hidden md:flex"}>
                        <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                            <Link href={"/#work"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                                Work
                            </Link>
                        </li>
                        <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                            <Link href={"/#about"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                                About
                            </Link>
                        </li>
                        <li className={"dark:text-[#B8B8B8] text-[#525252]"}>
                            <Link href={"/#contact"} className={"dark:hover:bg-[#212121] hover:bg-[#f7f7f7] py-[0.5rem] px-[1rem] transition-[background] duration-300 rounded-md"}>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <button className={"flex gap-[6px] flex-col md:hidden w-fit"} onClick={handleClick}>
                        <span className={`w-6 bg-black dark:bg-white h-[2px] transition-transform duration-400 ${showMenu ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"}`}></span>
                        <span className={`w-6 bg-black dark:bg-white h-[2px] transition-transform duration-400 ${showMenu ? "opacity-0" : "opacity-100"}`}></span>
                        <span className={`w-6 bg-black dark:bg-white h-[2px] transition-transform duration-400 ${showMenu ? "-rotate-45 -translate-y-2" : "rotate-0 translate-y-0"}`}></span>
                    </button>
                </nav>
            </header>

            <section
                className={`fixed z-10 bg-white dark:bg-black container mx-auto max-w-[90rem] flex md:hidden py-[80px] px-[40px] w-full h-full transition-transform duration-700 ${
                    showMenu ? "translate-y-0" : "-translate-y-full"
                }`}>
                <ul className={"flex flex-col text-4xl gap-10 font-semibold justify-center"}>
                    <li onClick={() => handleLinkClick("/#work")} className={`transition-opacity duration-300 ${showMenu ? "opacity-100 delay-700" : "opacity-0"}`}>Work</li>
                    <li onClick={() => handleLinkClick("/#about")} className={`transition-opacity duration-300 ${showMenu ? "opacity-100 delay-700" : "opacity-0"}`}>About</li>
                    <li onClick={() => handleLinkClick("/#contact")} className={`transition-opacity duration-300 ${showMenu ? "opacity-100 delay-700" : "opacity-0"}`}>Contact</li>
                </ul>
            </section>
        </>
    );
}
