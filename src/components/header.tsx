import React from "react";
import { Link } from 'react-router-dom';
import IconLogo from '../assets/Logo.svg';
import IconTitle from '../assets/Title.svg';

export function Header() {
    return (
        <header className="flex flex-col w-full h-auto items-center align-middle">
            <div className="flex w-full px-10 py-3 gap-3 align-middle">
                <img className="size-20" src={IconLogo}/>
                <img src={IconTitle}/>
            </div>
            <nav className="flex flex-row h-10 w-full bg-sand-100 items-center align-middle justify-center">
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Home</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Project</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Grants</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Team</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Newsletter</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Publications</p>
                <p className="h-full w-32 py-2 text-zinc-900 text-center hover:bg-sand-200/50">Data</p>
            </nav>
        </header>
    )
}