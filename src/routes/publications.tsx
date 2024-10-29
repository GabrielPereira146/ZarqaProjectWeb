export function Publications() {
  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col px-16 py-4 md:py-8 gap-4 h-full">
          <p className="font-extrabold text-xl md:text-4xl dark:text-white">
            Publications
          </p>
          <div className="flex flex-col border-2 border-sand-200 rounded-md p-3 gap-2">
            <p className="text-2xl font-semibold dark:text-white my-4">
              The Oldowan of Zarqa Valley, Northern Jordan
            </p>
            <div className="w-1/3 flex flex-row font-semibold gap-3">
              <div className="flex flex-col bg-sand-200 bg-opacity-30 text-sand-300 px-2 rounded-lg">
                <p> Journals </p>
              </div>
              <div className="flex flex-col">
                <p className="font-normal text-zinc-500 ">20 January 2024</p>
              </div>
            </div>
            <div className="w-full line-clamp-3 dark:text-white">
              The fluvial Dawqara Formation, upper Zarqa Valley, eastern side of
              Jordan Valley, is chronologically constrained between 2.52 and
              1.98 Ma. Several artifact-bearing outcrops display a core and
              flake industry, with no handaxes nor planned flaking. Herein, we
              describe 40 artifacts from section 334 Lower, the earliest
              archeological site of the formation and one of the oldest Oldowan
              complexes outside Africa. Despite the occurrence of basalt rocks,
              all artifacts were made on chert cobbles displaying various
              degrees of abrasion due to fluvial transport. The industry is
              represented by 30 flakes and 10 cores and choppers, preferentially
              obtained on chert cobbles with massive-fan form, unifacially and
              bifacially flaked. Most of the flakes present plain or cortical
              platforms and show on their dorsal faces a unipolar production
              scheme. Eighteen flakes, from unipolar or undetermined cores,
              exhibit a discontinuous retouch, defining a denticulated or convex
              margin. The assemblage is compared to Oldowan or lower Acheulean
              complexes in and outside Africa, pointing to a rapid spread of
              unknown hominins with this flaking technology, possibly ascribable
              to an early Homo clade.
            </div>
            <button
              type="button"
              className="text-sand-200 border-2 border-sand-200 rounded-full px-4 py-2 w-fit"
            >
              <a href="https://link.springer.com/article/10.1007/s41982-023-00168-6">
                Read More
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
