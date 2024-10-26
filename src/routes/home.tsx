import React, { useEffect, useState } from "react";
import HomeImage from "../assets/pictures/landscapeHome.svg";
import Dune from "../assets/duna.svg";
import fapesp from "../assets/FAPESP.svg"
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
                    <p className="text-white dark:text-zinc-800 text-xl md:text-3xl lg:text-4xl font-custom font-medium">
                        Welcome to
                    </p>
                    <p className="text-white dark:text-zinc-800 text-3xl md:text-8xl lg:text-9xl font-custom font-medium">
                        ZARQA Valley
                    </p>
                </div>

                
            </div>
            <div className="relative">
                <div
                    className="lg:w-full w-screen bg-transparent bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(${Dune})`,
                        backgroundPosition: "center",
                        aspectRatio: "8/2"
                    }}
                ></div>
                <div className="absolute -top-4 left-0 w-screen h-full flex justify-around items-center pt-[10%]">
                    <img className="flex-none w-[20%] max-w-[400px] h-auto" style={{ aspectRatio: "9/2", objectFit: "contain" }} src={fapesp} alt="fapesp Logo" />

                    <div className="flex flex-col items-center justify-center h-full" style={{ aspectRatio: "1/4", maxWidth: "300px" }}>
                        <img className="max-w-[300px] w-[400%] h-full object-contain" src={UFPR} alt="UFPR Logo" />
                    </div>

                    <img className="flex-none w-[20%] max-w-[400px] h-auto" style={{ aspectRatio: "9/2", objectFit: "contain" }} src={Wg} alt="WG Logo" />
                </div>
            </div>
        </div>
    );
}