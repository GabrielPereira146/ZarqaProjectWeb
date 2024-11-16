import { useNewsData } from "../hooks/useNewsData";
import { Loading } from "../components/loading";
import { ErrorPage } from "../components/error";
import NewslettersCarousel from "../components/newsletterCarousel";
import { useTranslation } from "react-i18next";

export function Newsletter() {

  const { t } = useTranslation(); // Hook para acessar a tradução
  const { data, isLoading, isError, error } = useNewsData();


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

  return (

    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col py-4 md:py-8 gap-y-6 h-full">
          <div className="flex flex-col py-4 gap-y-4">
            {News?.length > 0 && <NewslettersCarousel title={t('newsletter.news')} newsletters={News} />}
            {Reportage?.length > 0 && <NewslettersCarousel title={t('newsletter.reportage')} newsletters={Reportage} />}
            {Videos?.length > 0 && <NewslettersCarousel title={t('newsletter.videos')} newsletters={Videos} />}
            {Podcast?.length > 0 && <NewslettersCarousel title={t('newsletter.podcast')} newsletters={Podcast} />}
          </div>
        </div>
      </div>
    </div>
  );
}
