import React from "react";
import { Link } from 'react-router-dom';
import IconLogo from '../assets/Logo.svg';

export function Footer() {
    return (
        <div className="flex flex-col w-full bg-zinc-800 px-16 pt-8">
            <div className="flex flex-row w-full px-2">
                <div className="flex flex-row gap-1">
                    <img className="size-12 justify-center my-auto" src={IconLogo} />
                    <div className="flex flex-col justify-center">
                        <p className="font-custom text-2xl font-semibold italic text-sand-200 ">ZARQA Project</p>
                        <p className="font-custom text-sm text-sand-200">Paleoenvironment & Prehistory</p>
                    </div>
                </div>
                <div className="flex flex-row w-full gap-8 justify-center">
                    <div className="flex flex-col py-4 px-3 gap-3">
                        <p className="text-sand-200 font-custom">CONTACT</p>
                    </div>
                    <div className="flex flex-col py-4 px-3">
                        <p className="text-sand-200 font-custom">PAGES</p>
                        <div className="flex flex-wrap py-3 px-3">
                            <Link to={"/project"} className="text-white">Project</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}