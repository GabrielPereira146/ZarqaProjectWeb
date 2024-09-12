import React from "react";
import { Link } from 'react-router-dom';
import IconLogo from '../assets/Logo.svg';


export function Header() {
    return (
        <header className="flex flex-col w-full h-auto items-center align-middle bg-white dark:bg-zinc-800">
            <Link to={"/"} className="flex w-full px-10 py-3 gap-3 align-middle">
                <img className="size-20 fill-slate-50" src={IconLogo}/>
                <div className="flex flex-col justify-center gap-1">
                    <p className="font-custom text-4xl font-semibold italic text-zinc-900 dark:text-white">ZARQA Project</p>
                    <p className="font-custom text-sm text-sand-200">Paleoenvironment & Prehistory</p>
                </div>

            </Link>
            <nav className="flex flex-row h-10 w-full bg-sand-100 items-center align-middle justify-center">
                <Link to={"/"} className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Home</Link>
                <Link to={"project"} className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Project</Link>
                <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Grants</p>
                <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Team</p>
                <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Newsletter</p>
                <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Publications</p>
                <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">Data</p>
            </nav>
        </header>
    )
}