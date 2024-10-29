export function Grants() {
  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col px-16 py-4 md:py-8 gap-4 h-full">
          <p className="font-extrabold text-xl md:text-4xl dark:text-white">
            Grants
          </p>
          <div className="flex flex-col border-2 border-sand-200 rounded-md p-3 gap-2">
            <p className="text-2xl font-semibold dark:text-white my-4">
              Hominin biocultural evolution at Zarqa river valley, Jordan: a
              paleoanthropological approach
            </p>
            <div className="w-1/3 flex grid-cols-3 font-semibold justify-between">
              <div className="flex flex-col">
                <p> Processo </p>
                <p className="font-normal text-zinc-500"> 12/22631-2</p>
              </div>
              <div className="flex flex-col">
                <p> Modalidade de apoio </p>
                <p className="font-normal text-zinc-500 ">
                  {' '}
                  Regular Research Grants
                </p>
              </div>
              <div className="flex flex-col">
                <p> Vigencia </p>
                <p className="font-normal text-zinc-500">
                  {' '}
                  July 01, 2014 - June 30, 2016
                </p>
              </div>
            </div>
            <div className="w-full line-clamp-3">
              The hominin evolution was restricted to Africa from approximately
              7 to 2 million years ago. Apparently, the first hominins that left
              the continent belonged to the genus Homo, as indicated by the
              findings in Dmanisi, Georgia, dated to 1.8 million years. The
              Levant must have played an important role in this expansion from
              Africa to the Caucasus. In the long term, the main goal of this
              project is to show that the Zarqa River Valley was a major
              corridor to the expansion of the genus Homo from Africa into Asia,
              inserting the Pleistocene deposits of central Jordan in the
              scientific debate about the first peopling of the Old World. For
              the first two years, subject of this request , the goals are more
              modest, being summarized as follows : 1. Intensification of
              geological, archaeological, and paleontological surveys at the
              Upper Zarqa River Valley; 2. Technical- typological
              characterization of Pleistocene industries of the Upper Zarqa
              River Valley, with special emphasis on those of the Lower
              Paleolithic; 3. Establishment of a reliable chronology for the
              distinct hominin occupations of the eastern bank of the Jordan
              rift; 4. Geological, archaeological, and paleontological surveys
              at the Middle and Lower Zarqa River Valleys (virtually unknown to
              date). 5. Instruction and training of Brazilian students in an
              international research environment; 6. Brazilian insertion in the
              restricted and selected community that develops
              paleoanthropological research in the Old World. (AU)
            </div>
            <button
              type="button"
              className="text-sand-200 border-2 border-sand-200 rounded-full px-8 py-2 w-fit"
            >
              <a href="https://bv.fapesp.br/en/auxilios/85023/hominin-biocultural-evolution-at-zarqa-river-valley-jordan-a-paleoanthropological-approach/">
                About
              </a>
            </button>
          </div>
          <p className="text-2xl font-semibold text-zinc-500 dark:text-white my-4">
            Em Desenvolvimento...
          </p>
        </div>
      </div>
    </div>
  )
}
