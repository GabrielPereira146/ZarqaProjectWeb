import DescIMG from '../assets/pictures/Description.svg'
import ObjIMG from '../assets/pictures/Objective.svg'

export function Project() {
  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col pl-16 py-8 gap-4">
          <p className="font-extrabold text-4xl dark:text-white">Description</p>
          <div className="flex md:flex-row flex-col px-4 gap-12 items-stretch">
            <p className="my-auto lg:text-xl text-sm text-justify dark:text-white basis-2/5">
              The period from 2.5 to 1 million years ago is a critical time in
              the Earth’s history: it corresponds to a major shift in hominin
              evolution in East Africa, when Australopithecus was replaced by
              the Paranthropus and Homo taxa, and when the Earth’s average
              surface temperature became colder and the global climate more
              unstable, resulting in more open ecosystems and the first
              glaciations at mid-latitudes. In the context of these changes,
              there was the first exit of hominins from Africa, which spread
              throughout Asia and reached China. The Middle East must have
              played a crucial role in this expansion from Africa to East Asia
              as it was possibly the best migration corridor available during
              the Early and Middle Pleistocene. If we consider the present-day
              semi-arid climate, the Middle East could have constituted a
              biogeographical obstacle for any adaptation of these early
              hominins, but Pleistocene was a period of great climatic changes
              and the environmental conditions of the past could have been
              different from the current ones. This is still an unknown aspect
              in the Middle East and a great opportunity of international
              cooperation with researchers from Jordan.
            </p>
            <img
              className="rounded-xl object-cover md:w-3/5 w-full md:min-h-[512px] ml-auto my-auto"
              src={DescIMG}
              alt="LandscapeDescription"
            />
          </div>
        </div>
      </div>
      <div className="h-auto w-full gap-8 bg-sand-100/50 dark:bg-sand-200">
        <div className="flex flex-col pl-16 py-8 gap-4">
          <p className="font-extrabold text-4xl dark:text-white">Objective</p>
          <div className="flex md:flex-row flex-col-reverse px-4 gap-12 items-stretch">
            <img
              className="rounded-xl object-cover md:w-2/5 w-full md:min-h-[256px] my-auto"
              src={ObjIMG}
              alt="LandscapeObjective"
            />
            <p className="my-auto lg:text-xl text-sm text-justify dark:text-white basis-3/5">
              This project aims to study the paleoenvironmental and cultural
              evolution of the upper Zarqa Valley during the Pleistocene, in
              relation to the Paleolithic sites and exploring factors that
              facilitated hominin expansion into the region. A multidisciplinary
              approach will encompass archaeology, sedimentology, pedology,
              geochemistry, and geochronology. Emphasis is placed on
              investigating the environmental conditions that may have
              influenced hominin expansion into the Zarqa Valley, considering
              the significant climate changes of the last million years. The
              project also seeks to enhance Brazilian-Jordan collaboration in
              the Middle East, building upon an established and productive line
              of inquiry.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
