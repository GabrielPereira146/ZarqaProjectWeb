import React from "react";
import HomeImage from "../assets/landscape.svg";

export function Home() {
    return (
        <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white relative">
            <div className="relative">
                <img className="w-full h-auto" src={HomeImage} alt="Landscape" />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-48">
                    <p className="text-white text-3xl font-medium font-">
                        Welcome to
                    </p>
                    <p className="text-white text-8xl font-medium font-">
                        ZARQA Valley
                    </p>
                </div>
            </div>
        </div>
    );
}