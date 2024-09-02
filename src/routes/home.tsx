import React from "react";
import HomeImage from "../assets/landscape.svg";
import Dune from "../assets/duna.svg";
import Fapesp from "../assets/fapesp.svg";
import UFPR from "../assets/uf.svg";
import Wg from "../assets/wg.svg";

export function Home() {
    return (
        <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800 relative">
            <div className="relative">
                <div className="gradient-mask-b-80">
                    <img className="w-full h-auto" src={HomeImage} alt="Landscape" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-[10%]">
                    <p className="text-white dark:text-zinc-800 text-4xl font-medium font-custom ">
                        Welcome to
                    </p>
                    <p className="text-white dark:text-zinc-800 text-9xl font-medium font-custom">
                        ZARQA Valley
                    </p>
                </div>
            </div>
            <div className="relative">
                <img className="w-full h-auto bg-transparent " src={Dune} alt="Landscape" />
                <div className="absolute top-0 left-0 w-full h-auto flex flex-row items-center justify-center gap-[10%] pt-[10%] ">
                    <img className="basis-1/6 " src={Fapesp} alt="Fapesp Logo" />
                    <img className="basis-1/6 " src={UFPR} alt="UFPR Logo" />
                    <img className="basis-1/6 " src={Wg} alt="WG Logo" />
                </div>
            </div>
        </div>
    );
}