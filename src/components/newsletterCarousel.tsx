import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsCard } from "./newsCard";
import type { NewsData } from "../interface/NewsData";

interface NewslettersCarouselProps {
  title: string;
  newsletters: NewsData[];
}

const NewslettersCarousel: React.FC<NewslettersCarouselProps> = ({ title, newsletters }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -window.innerWidth + 300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left:  window.innerWidth - 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col md:px-16 px-4 py-4 gap-y-4">
      <p className="font-extrabold text-xl md:text-4xl dark:text-white">{title}</p>
      <div className="relative w-full">

        {/* Botões de navegação */}
        <button
          type="button"
          onClick={scrollLeft}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-zinc-800 rounded-full p-2 shadow-md"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6 text-sand-200" />
        </button>

        <button
          type="button"
          onClick={scrollRight}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-zinc-800 rounded-full p-2 shadow-md"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6 text-sand-200" />
        </button>
        <div ref={scrollRef} className="w-full overflow-x-auto scrollbar-none">
          <div
            
            className="flex scroll-smooth space-x-6 gap-4 h-96 font-semibold px-4 py-6 md:px-8"
          >

            {newsletters.map((newsletter) => (
            <NewsCard
              key={newsletter.id}
              title={newsletter.title}
              link={newsletter.link}
              date={newsletter.datePublication}
              imageUrl={newsletter.cover}
               className="min-w-60 max-w-72"
            />
          ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewslettersCarousel;
