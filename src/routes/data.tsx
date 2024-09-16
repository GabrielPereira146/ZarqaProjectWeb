import React from "react";

export function Data() {
    return (
        <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
            <div className="h-auto w-full gap-8 bg-white dark:bg-zinc-800">
                <div className="flex flex-col pl-16 py-8 gap-4">
                    <p className="font-extrabold text-4xl dark:text-white">Map</p>

                </div>
            </div>
            <div className="h-auto w-full gap-8">
                <div className="flex flex-col pl-16 py-8 gap-4">
                    <p className="font-extrabold text-4xl dark:text-white">Download Data</p>
                    <div className="flex flex-row px-4 gap-12 items-stretch">
                        <img className="rounded-xl object-cover w-2/5  my-auto" src={ObjIMG} alt="LandscapeObjective" />
                        <p className="my-auto text-xl text-justify dark:text-white basis-3/5">
                            This project aims to study the paleoenvironmental and cultural evolution of the upper Zarqa Valley during the Pleistocene, in relation to the Paleolithic sites and exploring factors that facilitated hominin expansion into the region. A multidisciplinary approach will encompass archaeology, sedimentology, pedology, geochemistry, and geochronology. Emphasis is placed on investigating the environmental conditions that may have influenced hominin expansion into the Zarqa Valley, considering the significant climate changes of the last million years. The project also seeks to enhance Brazilian-Jordan collaboration in the Middle East, building upon an established and productive line of inquiry.
                        </p>

                    </div>
                </div>
            </div>

        </div>
    );
}