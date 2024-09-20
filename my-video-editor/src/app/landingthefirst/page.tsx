import React from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";
import fleditText from "@/assets/text.svg";
import right from "@/assets/right-danda.svg";
import left from "@/assets/left-danda.svg";
import collab from "@/assets/Vcms1.png";
import blinking from "@/assets/animated_avatar_squint_blinking_new.svg";
import big from "@/assets/bigggg-logo.svg";
import Link from "next/link";

export default function Page() {
    return (
        <div
            className="bg-[#262626] flex flex-col overflow-y-auto"
            style={{
                backgroundImage: `url('/Bg.svg')`,
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
            }}
        >
            <div className="relative min-h-screen flex flex-col justify-center items-center">
                <Image
                    src={logo}
                    alt="logo"
                    className="absolute left-[5%] top-[5%]"
                />
                <div className="flex flex-col items-center">
                    <Image src={fleditText} alt="text" />
                    <div className="text-4xl font-extrabold text-[#B7AA98]">
                        <span>Sync</span>
                        <span className="text-[#EB5939]">,</span>
                        <span> Edit</span>
                        <span className="text-[#EB5939]">,</span>
                        <span> Flow</span>
                        <span className="text-[#EB5939]">.</span>
                    </div>
                </div>
            </div>
            <div className="min-h-screen flex flex-col justify-center items-center">
                <div className="self-end">
                    <Image src={right} alt="right" className="w-[80%]" />
                </div>
                <div className="w-[50%] text-4xl font-semibold text-[#B7AA98]">
                    <span className="text-[#EB5939]">Fledit</span> is a
                    collaborative video editing platform that lets creators work
                    together in{" "}
                    <span className="text-[#EB5939]">real-time</span>, from
                    anywhere. With seamless{" "}
                    <span className="text-[#EB5939]">cloud integration</span>{" "}
                    and intuitive tools, Fledit simplifies{" "}
                    <span className="text-[#EB5939]">workflows</span>, making it
                    easy to sync ideas and craft stunning videos without the
                    hassle.{" "}
                    <span className="text-[#EB5939]">
                        Create together, without limits.
                    </span>
                </div>
                <div className="self-start pl-10">
                    <Image src={left} alt="left" className="w-[80%]" />
                </div>
            </div>
            <div className="min-h-screen flex flex-col justify-between items-center w-full">
                <Image
                    src={collab}
                    alt="collab"
                    className="w-[50%] pt-4 h-[30%]"
                />
                <div className="h-[70%]">
                    <Link href={"/landing"} className="cursor-pointer">
                        <Image src={blinking} alt="blinking" />
                    </Link>
                    <div className="bg-[#EB5939] flex flex-row w-full justify-between items-center h-[80%]">
                        <div className="flex flex-col text-2xl font-semibold">
                            <span>About</span>
                            <span>Contact</span>
                            <span>Support</span>
                            <span>Privacy</span>
                        </div>
                        <Image src={big} alt="logo" className="w-[30%]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
