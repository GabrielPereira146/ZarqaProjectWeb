import { Link } from 'react-router-dom'
import IconLogo from '../assets/Logo.svg'
import { MenuIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next';

export function Header() {
  const { t } = useTranslation(); // Hook para acessar a tradução
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  // const openMobileMenu = () => {
  //   setIsMobileMenuOpen(true)
  // }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="flex flex-col w-full h-auto items-center align-middle bg-white dark:bg-zinc-800">
      <Link
        to={'/'}
        className="flex w-full lg:px-10 px-4 py-3 gap-3 align-middle"
      >
        <img
          className="lg:size-20 fill-slate-50 size-16"
          src={IconLogo}
          alt=""
        />
        <div className="flex flex-col justify-center gap-1">
          <p className="font-custom lg:text-4xl text-3xl font-semibold italic text-zinc-900 dark:text-white">
            ZARQA Project
          </p>
          <p className="font-custom lg:text-sm text-xs text-sand-200">
            Paleoenvironment & Prehistory
          </p>
        </div>
      </Link>

      {/* NAVIGATION MENU */}
      <nav className="hidden md:flex flex-row h-10 w-full bg-sand-100 items-center align-middle justify-center">
        <Link
          to={'/'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.home')}
        </Link>
        <Link
          to={'project'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.project')}
        </Link>
        <Link
          to={'grants'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.grants')}
        </Link>
        <Link
          to={'team'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.team')}
        </Link>
        <Link
          to={'newsletter'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.newsletter')}
        </Link>
        <Link
          to={'publications'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.publications')}
        </Link>
        <Link
          to={'data'}
          className="h-full w-32 py-2 font-custom font-medium text-zinc-900 text-center hover:bg-sand-200/50"
        >
          {t('navbar.data')}
        </Link>
      </nav>
      {/*MOBILE NAVIGATION MENU */}
      <div className="flex md:hidden h-10 w-full bg-sand-100 items-center justify-start px-6 relative">
        <button
          type="button"
          onClick={toggleMobileMenu}
          className="text-zinc-900"
        >
          <MenuIcon />
        </button>

        {isMobileMenuOpen && (
          <nav className="absolute top-10 left-0 w-full h-auto bg-amber-100 opacity-90 z-10 flex flex-col py-3">
            <Link
              to={'/'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
              {t('navbar.home')}
            </Link>
            <Link
              to={'project'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
               {t('navbar.project')}
            </Link>
            <Link
              to={'grants'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
               {t('navbar.grants')}
            </Link>
            <Link
              to={'team'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
               {t('navbar.team')}
            </Link>
            <Link
              to={'newsletter'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
              {t('navbar.newsletter')}
            </Link>
            <Link
              to={'publications'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
              {t('navbar.publications')}
            </Link>
            <Link
              to={'data'}
              className="w-full px-6 py-2 font-custom font-medium text-zinc-900 hover:bg-sand-200/50"
              onClick={closeMobileMenu}
            >
              {t('navbar.data')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
