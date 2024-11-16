import { useTranslation } from 'react-i18next';
import DescIMG from '../assets/pictures/Description.svg'
import ObjIMG from '../assets/pictures/Objective.svg'

export function Project() {
  const { t } = useTranslation(); // Hook para acessar a tradução

  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col md:pl-16 py-8 gap-4">
          <p className="font-extrabold text-4xl px-4 md:px-0 dark:text-white">
            {t('project.description')}
          </p>
          <div className="flex md:flex-row flex-col px-4 gap-12 items-stretch">
            <p className="my-auto lg:text-xl text-sm text-justify dark:text-white basis-2/5">
              {t('project.descriptionText')}
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
        <div className="flex flex-col md:pl-16 py-8 gap-4">
          <p className="font-extrabold text-4xl px-4 md:px-0 dark:text-white">
            {t('project.objective')}
          </p>
          <div className="flex md:flex-row flex-col-reverse px-4 gap-12 items-stretch">
            <img
              className="rounded-xl object-cover md:w-2/5 w-full md:min-h-[256px] my-auto"
              src={ObjIMG}
              alt="LandscapeObjective"
            />
            <p className="my-auto lg:text-xl text-sm text-justify dark:text-white basis-3/5">
              {t('project.objectiveText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
