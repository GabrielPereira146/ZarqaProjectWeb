import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "../components/newsCard";
import { useNewsData } from "../hooks/useNewsData";
import { Loading } from "../components/loading";
import { ErrorPage } from "../components/error";

export function Newsletter() {


  const { data, isLoading, isError, error } = useNewsData();

  const scrollRef = useRef<HTMLDivElement>(null);

  if (isLoading) {
    return (
      <Loading />
    );
  }
  if (isError) {
    return (
      <ErrorPage erro={error.message} />
    );
  }

  // Group members by role for display
  const News = data.filter(d => d.type.toLowerCase() === "news");
  const Reportage = data.filter(d => d.type.toLowerCase() === "reportage");
  const Videos = data.filter(d => d.type.toLowerCase() === "videos");
  const Podcast = data.filter(d => d.type.toLowerCase() === "podcast");

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (

    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col py-4 md:py-8 gap-y-6 h-full">
          <div className="flex flex-col md:px-16 px-4 py-4 gap-y-4">
            <p className="font-extrabold text-xl md:text-4xl dark:text-white">News</p>
            <div className="relative w-full">
              {/* Botões de navegação */}
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-zinc-800 rounded-full p-2 shadow-md"
                aria-label="Scroll Left"
              >
                <ChevronLeft className="w-6 h-6 text-sand-200" />
              </button>
              {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-zinc-800 rounded-full p-2 shadow-md"
                aria-label="Scroll Right"
              >
                <ChevronRight className="w-6 h-6 text-sand-200" />
              </button>

              {/* Carrossel de notícias */}
              <div
                ref={scrollRef}
                className="flex overflow-x-auto scroll-smooth space-x-6 w-full gap-4 h-96 font-semibold md:px-8 px-4 py-6"
              >
                {News?.map((newsData) => (
                  <NewsCard
                    key={newsData.id}
                    title={newsData.title}
                    link={newsData.link}
                    date={newsData.datePublication}
                    imageUrl={newsData.cover} />
                ))}
              </div>
            </div>

            <div className="flex flex-col md:px-16 px-4 py-4 bg-sand-100/50 gap-y-4">
              <p className="font-extrabold text-xl md:text-4xl dark:text-white">Videos</p>
              <div className="w-full grid gap-6 h-96 font-semibold md:px-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                <div className="flex flex-col border-2 border-white rounded-md justify-between">
                  <div>
                    <img
                      className="w-full object-cover h-44 rounded-t-md"
                      src="https://i.ytimg.com/vi/c4kwbyOYLlM/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCux4hkYcpavkufGybhOkm9H4cL0g"
                      alt="Video"
                    />
                    <p className="px-2 font-semibold text-zinc-800 mb-10 line-clamp-5">Repórter Eco | 08/03/2020</p>
                  </div>
                  <p className="px-2 font-normal text-zinc-500 dark:text-white text-sm">08/03/2020</p>
                  <a
                    className="px-2 text-end font-semibold text-zinc-800 text-sm"
                    href="https://www.youtube.com/watch?v=c4kwbyOYLlM"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Video
                  </a>
                </div>
                {/* Adicione mais vídeos conforme necessário */}
              </div>
            </div>

            <p className="text-2xl font-semibold text-zinc-500 dark:text-white md:px-16 px-4 my-4">Developing...</p>
          </div>
        </div>
      </div>
    </div>
  );
}
