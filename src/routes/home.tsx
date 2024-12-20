import { useTranslation } from 'react-i18next';
import HomeImage from '../assets/pictures/landscapeHome.svg';
import Dune from '../assets/duna.svg';
import fapesp from '../assets/FAPESP.svg';
import unesp from '../assets/UNESP.svg';
import UFPR from '../assets/uf.svg';
import Wg from '../assets/wg.svg';


export function Home() {
  const { t } = useTranslation(); // Hook para acessar a tradução

  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800 relative">
      <div className="relative">
        <div className="gradient-mask-b-80">
          <img className="w-full h-auto" src={HomeImage} alt="Landscape" />
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center py-[10%]">
          <p className="text-white dark:text-zinc-800 text-xl md:text-3xl lg:text-4xl font-custom font-medium">
            {t('home.welcome')}
          </p>
          <p className="text-white dark:text-zinc-800 text-3xl md:text-8xl lg:text-9xl font-custom font-medium">
            {t('home.zarqaValley')}
          </p>
        </div>
      </div>
      <div className="relative">
        <div
          className="lg:w-full w-full bg-transparent bg-cover bg-no-repeat"
          style={{
            backgroundImage: `url(${Dune})`,
            backgroundPosition: 'center',
            aspectRatio: '8/2',
          }}
        />
        <div className="absolute -top-4 left-0 w-full h-full flex justify-around items-center pt-[10%]">
          <img
            className="flex-none w-[20%] max-w-[400px] h-auto aspect-[9/2] object-contain"
            src={fapesp}
            alt="fapesp Logo"
          />

          <img
            className="flex-none w-[20%] max-w-[400px] h-auto aspect-[2/1] object-contain"
            src={unesp}
            alt="unesp Logo"
          />

          <img
            className="flex-none max-w-[300px] w-[15%] h-auto aspect-[1/2] object-contain"
            src={UFPR}
            alt="UFPR Logo"
          />

          <img
            className="flex-none w-[20%] max-w-[400px] h-auto aspect-[9/2] object-contain"
            src={Wg}
            alt="WG Logo"
          />
        </div>
      </div>
    </div>
  );
}
