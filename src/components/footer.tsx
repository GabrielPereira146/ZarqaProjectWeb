import { Link } from 'react-router-dom'
import IconLogo from '../assets/Logo.svg'
import fapesp from '../assets/FAPESP.svg'
import unesp from '../assets/UNESP.png'
import UFPR from '../assets/uf.svg'
import Wg from '../assets/wg.svg'
import { Github, Linkedin, BadgePlus } from 'lucide-react'

export function Footer() {
  return (
    <footer className="flex flex-col w-full bg-zinc-900 xl:px-16 pt-8 px-4">
      <div className="flex sm:flex-row flex-col w-full px-2 ">
        <Link to={'/'} className="flex flex-row gap-1 h-20 ">
          <img
            className="size-12 justify-center my-auto"
            src={IconLogo}
            alt=""
          />
          <div className="flex flex-col justify-center sm:w-52 w-48">
            <p className="font-custom text-2xl font-semibold italic text-sand-200 ">
              ZARQA Project
            </p>
            <p className="font-custom text-sm text-sand-200">
              Paleoenvironment & Prehistory
            </p>
          </div>
        </Link>

        {/* Footer XLarge and 2XLarge */}
        <div className="sm:flex hidden flex-row w-full xl:gap-8 gap-4 lg:justify-center justify-around">
          <div className="flex flex-col py-4 px-3 gap-3">
            <p className="text-sand-200 font-custom">CONTACT</p>
            <p className="px-3 font-custom text-lg text-white">@unesp.br</p>
          </div>
          <div className="flex flex-col py-4 px-3">
            <p className="text-sand-200 font-custom">PAGES</p>
            <div className="flex flex-wrap w-52 py-3 px-3 gap-4 ">
              <Link to={'/project'} className="w-20 text-white font-custom">
                Project
              </Link>
              <Link to={'/project'} className="w-20 text-white font-custom">
                Grants
              </Link>
              <Link to={'/project'} className="w-20 text-white font-custom">
                Team
              </Link>
              <Link to={'/project'} className="w-20 text-white font-custom">
                Newsletter
              </Link>
              <Link to={'/project'} className="w-20 text-white font-custom">
                Publication
              </Link>
              <Link to={'/project'} className="w-20 text-white font-custom">
                Data
              </Link>
            </div>
          </div>
          <div className="hidden 2xl:flex flex-col py-4 px-3">
            <p className="text-sand-200 font-custom">SPONSORS</p>
            <div className="flex flex-wrap w-96 py-3 px-4 gap-4 ">
              <img
                className="invert opacity-50 w-auto h-9"
                src={fapesp}
                alt="fapesp Logo"
              />
              <img
                className="invert opacity-50 w-auto h-14"
                src={unesp}
                alt="unesp Logo"
              />
              <img
                className="invert opacity-50 w-auto h-9"
                src={Wg}
                alt="WG Logo"
              />
              <img
                className="invert opacity-50 w-auto h-24"
                src={UFPR}
                alt="UFPR Logo"
              />
            </div>
          </div>
          <div className="hidden lg:flex flex-col py-4 px-3 gap-3">
            <p className="font-custom text-sand-200 ">DEVELOPED BY:</p>
            <div className="px-3 flex flex-col">
              <p className="font-custom text-lg text-white">
                Gabriel dos Santos Pereira
              </p>
              <div className="flex flex-row gap-3 justify-end">
                <a
                  href="https://www.linkedin.com/in/gabriel-dos-santos-pereira/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="text-white/50 hover:text-white" />
                </a>
                <a
                  href="https://github.com/GabrielPereira146"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-white/50 hover:text-white" />
                </a>
              </div>
            </div>
            <div className="px-3 flex flex-col">
              <p className="font-custom text-lg text-white">
                Leandro Apolinário Bento
              </p>
              <div className="flex flex-row gap-3 justify-end">
                <a href="/" target="_blank" rel="noopener noreferrer">
                  <Github className="text-white/50 hover:text-white" />
                </a>
                <a
                  href="https://github.com/BntLeandro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="text-white/50 hover:text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Large/Medium/Small */}
      <div className="hidden 2xl:hidden sm:flex flex-row md:w-11/12 pl-2 lg:pl-0 justify-between w-full lg:w-full ">
        <div className="flex 2xl:hidden lg:w-full py-3 xl:pl-44 lg:pl-52 lg:justify-center ml-0 lg:flex-row flex-col">
          <p className="text-sand-200 font-custom">SPONSORS</p>
          <div className="lg:justify-center flex flex-wrap lg:w-auto w-96 px-4 gap-4 ">
            <img
              className="invert opacity-50 w-auto h-9"
              src={fapesp}
              alt="fapesp Logo"
            />
            <img
              className="invert opacity-50 w-auto h-14"
              src={unesp}
              alt="unesp Logo"
            />
            <img
              className="invert opacity-50 w-auto h-9"
              src={Wg}
              alt="WG Logo"
            />
            <img
              className="invert opacity-50 w-auto h-24"
              src={UFPR}
              alt="UFPR Logo"
            />
          </div>
        </div>
        <div className="flex lg:hidden flex-col py-4 px-3 gap-3">
          <p className="font-custom text-sand-200 ">DEVELOPED BY:</p>
          <div className="px-3 flex flex-col">
            <p className="font-custom text-lg text-white">
              Gabriel dos Santos Pereira
            </p>
            <div className="flex flex-row gap-3 justify-end">
              <a
                href="https://www.linkedin.com/in/gabriel-dos-santos-pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white/50 hover:text-white" />
              </a>
              <a
                href="https://github.com/GabrielPereira146"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white/50 hover:text-white" />
              </a>
            </div>
          </div>
          <div className="px-3 flex flex-col">
            <p className="font-custom text-lg text-white">
              Leandro Apolinário Bento
            </p>
            <div className="flex flex-row gap-3 justify-end">
              <a href="/" target="_blank" rel="noopener noreferrer">
                <Github className="text-white/50 hover:text-white" />
              </a>
              <a
                href="https://github.com/BntLeandro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white/50 hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Mobile */}
      <div className="sm:hidden flex  flex-col justify-around -mx-4 w-[calc(100%+32px)]">
        <details className="flex flex-col py-4 px-3 gap-2 hover:bg-zinc-800">
          <summary className="text-sand-200 font-custom  flex flex-row justify-between">
            CONTACT <BadgePlus />
          </summary>

          <p className="px-3 font-custom text-lg text-white">@unesp.br</p>
        </details>

        <details className="flex flex-col py-4 px-3  hover:bg-zinc-800">
          <summary className="text-sand-200 font-custom flex flex-row justify-between">
            PAGES
            <BadgePlus />
          </summary>
          <p className="flex flex-col flex-wrap w-52 py-3 px-3 gap-4 ">
            <Link to={'/project'} className="w-20 text-white font-custom">
              Project
            </Link>
            <Link to={'/project'} className="w-20 text-white font-custom">
              Grants
            </Link>
            <Link to={'/project'} className="w-20 text-white font-custom">
              Team
            </Link>
            <Link to={'/project'} className="w-20 text-white font-custom">
              Newsletter
            </Link>
            <Link to={'/project'} className="w-20 text-white font-custom">
              Publication
            </Link>
            <Link to={'/project'} className="w-20 text-white font-custom">
              Data
            </Link>
          </p>
        </details>

        <details className="flex flex-col py-4 px-3  hover:bg-zinc-800">
          <summary className="text-sand-200 font-custom flex flex-row justify-between">
            SPONSORS
            <BadgePlus />
          </summary>
          <p className="flex flex-wrap w-56 py-3 px-4 gap-4 ">
            <img
              className="invert opacity-50 w-auto h-9"
              src={fapesp}
              alt="fapesp Logo"
            />
            <img
              className="invert opacity-50 w-auto h-14"
              src={unesp}
              alt="unesp Logo"
            />
            <img
              className="invert opacity-50 w-auto h-9"
              src={Wg}
              alt="WG Logo"
            />
            <img
              className="invert opacity-50 w-auto h-24"
              src={UFPR}
              alt="UFPR Logo"
            />
          </p>
        </details>

        <details className="flex flex-col py-4 px-3 gap-3 hover:bg-zinc-800">
          <summary className="text-sand-200 font-custom flex flex-row justify-between">
            DEVELOPED BY:
            <BadgePlus />
          </summary>
          <p className="px-3 flex flex-col">
            <p className="font-custom text-lg text-white">
              Gabriel dos Santos Pereira
            </p>
            <div className="flex flex-row gap-3 justify-start">
              <a
                href="https://www.linkedin.com/in/gabriel-dos-santos-pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white/50 hover:text-white" />
              </a>
              <a
                href="https://github.com/GabrielPereira146"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white/50 hover:text-white" />
              </a>
            </div>
          </p>
          <p className="px-3 flex flex-col">
            <p className="font-custom text-lg text-white">
              Leandro Apolinário Bento
            </p>
            <div className="flex flex-row gap-3 justify-start">
              <a
                href="https://www.linkedin.com/in/gabriel-dos-santos-pereira/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="text-white/50 hover:text-white" />
              </a>
              <a
                href="https://github.com/BntLeandro"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="text-white/50 hover:text-white" />
              </a>
            </div>
          </p>
        </details>
      </div>
    </footer>
  )
}
