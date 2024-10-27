import React from 'react'
import { Link } from 'react-router-dom'
import IconLogo from '../assets/Logo.svg'

export function Header() {
  return (
    <header className="flex flex-col w-full h-auto items-center align-middle bg-white dark:bg-zinc-800">
      <Link
        to={'/'}
        className="flex w-full lg:px-10 px-4 py-3 gap-3 align-middle"
      >
        <img className="lg:size-20 fill-slate-50 size-16" src={IconLogo} />
        <div className="flex flex-col justify-center gap-1">
          <p className="font-custom lg:text-4xl text-3xl font-semibold italic text-zinc-900 dark:text-white">
            ZARQA Project
          </p>
          <p className="font-custom lg:text-sm text-xs text-sand-200">
            Paleoenvironment & Prehistory
          </p>
        </div>
      </Link>
      <nav className="flex flex-row h-10 w-full bg-sand-100 items-center align-middle justify-center">
        <Link
          to={'/'}
          className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          Home
        </Link>
        <Link
          to={'project'}
          className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          Project
        </Link>
        <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">
          Grants
        </p>
        <Link
          to={'team'}
          className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          Team
        </Link>
        <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">
          Newsletter
        </p>
        <p className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50">
          Publications
        </p>
        <Link
          to={'data'}
          className="h-full w-32 py-2 font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          Data
        </Link>
      </nav>
    </header>
  )
}
