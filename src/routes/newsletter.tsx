export function Newsletter() {
  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col py-4 md:py-8 gap-y-6 h-full">
          <div className="flex flex-col md:px-16 px-4 py-4  gap-y-4">
            <p className="font-extrabold text-xl md:text-4xl dark:text-white">
              News
            </p>
            <div className="w-full grid gap-6 h-96 font-semibold md:px-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div className="flex flex-col border-2 border-sand-100 rounded-md justify-between ">
                <div>
                  <img
                    className="w-full object-cover h-44 rounded-t-md"
                    src="https://unicamp.br/unicamp/sites/default/files/inline-images/Relatos_Jornada_202310123_Achado_Jordania_Interna_1.jpg"
                    alt="Journals"
                  />
                  <p className="px-2 font-semibold text-sand-200 mb-10 line-clamp-5">
                    Clima pode ter facilitado migração de hominínios da África
                    para a Ásia
                  </p>
                </div>
                <p className="px-2 font-normal text-zinc-500 dark:text-white text-sm">
                  23/10/2023
                </p>

                <a
                  className="px-2 text-end font-semibold text-sand-200 text-sm"
                  href="https://unicamp.br/unicamp/noticias/2023/10/23/clima-pode-ter-facilitado-migracao-de-homininios-da-africa-para-asia/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
              <div className="flex flex-col border-2 border-sand-100 rounded-md justify-between ">
                <div>
                  <img
                    className="w-full object-cover h-44 rounded-t-md"
                    src="https://ogimg.infoglobo.com.br/in/23785352-38a-4cb/FT1086A/Walter-Neves.png"
                    alt="Journals"
                  />
                  <p className="px-2 font-semibold text-sand-200 mb-10 line-clamp-5">
                    Descoberta brasileira pode mudar a história evolutiva dos
                    humanos no planeta
                  </p>
                </div>
                <p className="px-2 font-normal text-zinc-500 dark:text-white text-sm">
                  05/07/2019
                </p>

                <a
                  className="px-2 text-end font-semibold text-sand-200 text-sm"
                  href="https://oglobo.globo.com/brasil/descoberta-brasileira-pode-mudar-historia-evolutiva-dos-humanos-no-planeta-23785355"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:px-16 px-4 py-4 bg-sand-100/50 gap-y-4">
            <p className="font-extrabold text-xl md:text-4xl dark:text-white">
              Videos
            </p>
            <div className="w-full grid  gap-6 h-96 font-semibold md:px-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              <div className="flex flex-col border-2 border-white rounded-md justify-between ">
                <div>
                  <img
                    className="w-full object-cover h-44 rounded-t-md"
                    src="https://i.ytimg.com/vi/c4kwbyOYLlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCux4hkYcpavkufGybhOkm9H4cL0g"
                    alt="Video"
                  />
                  <p className="px-2 font-semibold text-zinc-800 mb-10 line-clamp-5">
                    Repórter Eco | 08/03/2020
                  </p>
                </div>
                <p className="px-2 font-normal text-zinc-500 dark:text-white text-sm">
                  08/03/2020
                </p>

                <a
                  className="px-2 text-end font-semibold text-zinc-800 text-sm"
                  href="https://www.youtube.com/watch?v=c4kwbyOYLlM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Video
                </a>
              </div>
            </div>
          </div>
          <p className="text-2xl font-semibold text-zinc-500 dark:text-white md:px-16 px-4 my-4">
            Developing...
          </p>
        </div>
      </div>
    </div>
  )
}
