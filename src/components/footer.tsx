import React from "react";
import { Link } from 'react-router-dom';
import IconLogo from '../assets/Logo.svg';
import fapesp from "../assets/FAPESP.svg"
import UFPR from "../assets/uf.svg";
import Wg from "../assets/wg.svg";

export function Footer() {
    return (
        <footer className="flex flex-col w-full bg-zinc-800 px-16 pt-8">
            <div className="flex flex-row w-full px-2">
                <Link to={"/"} className="flex flex-row gap-1 h-20">
                    <img className="size-12 justify-center my-auto" src={IconLogo} />
                    <div className="flex flex-col justify-center">
                        <p className="font-custom text-2xl font-semibold italic text-sand-200 ">ZARQA Project</p>
                        <p className="font-custom text-sm text-sand-200">Paleoenvironment & Prehistory</p>
                    </div>
                </Link>
                <div className="flex flex-row w-full gap-8 justify-center">
                    <div className="flex flex-col py-4 px-3 gap-3">
                        <p className="text-sand-200 font-custom">CONTACT</p>
                    </div>
                    <div className="flex flex-col py-4 px-3">
                        <p className="text-sand-200 font-custom">PAGES</p>
                        <div className="flex flex-wrap w-56 py-3 px-3 gap-4 ">
                            <Link to={"/project"} className="w-20 text-white font-custom">Project</Link>
                            <Link to={"/project"} className="w-20 text-white font-custom">Grants</Link>
                            <Link to={"/project"} className="w-20 text-white font-custom">Team</Link>
                            <Link to={"/project"} className="w-20 text-white font-custom">Newsletter</Link>
                            <Link to={"/project"} className="w-20 text-white font-custom">Publication</Link>
                            <Link to={"/project"} className="w-20 text-white font-custom">Data</Link>
                        </div>
                    </div>
                    <div className="flex flex-col py-4 px-3">
                        <p className="text-sand-200 font-custom">SPONSORS</p>
                        <div className="flex flex-wrap w-96 py-3 px-4 gap-4 ">
                            <img className="invert opacity-50 w-auto h-9" src={fapesp} alt="fapesp Logo" />
                            <img className="invert opacity-50 w-auto h-9" src={Wg} alt="WG Logo" />
                            <img className="invert opacity-50 w-auto h-24" src={UFPR} alt="UFPR Logo" />
                           
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="flex flex-col w-full items-center pt-8 gap-2">
                <p className="font-custom text-sand-300 text-xl">Developed by</p>
                <p className="text-white font-custom">Gabriel dos Santos Pereira</p>
                <p className="text-white font-custom">Leandro Apolinário Bento</p>
            </div>
        </footer>
    )
}