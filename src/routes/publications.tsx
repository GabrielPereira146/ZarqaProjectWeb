import { ErrorPage } from "../components/error";
import { Loading } from "../components/loading";
import PublicationCard from "../components/PublicationCard";
import { usePublicationsData } from "../hooks/usePublicationsData";

export function Publications() {

  const { data, isLoading, isError, error } = usePublicationsData();
  
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

  return (
    <div className="flex flex-col w-full h-auto justify-center gap-8 bg-white dark:bg-zinc-800">
      <div className="h-auto w-full gap-4 md:gap-8 bg-white dark:bg-zinc-800">
        <div className="flex flex-col md:px-16 px-4 py-4 md:py-8 gap-4 h-full">
          <p className="font-extrabold text-xl md:text-4xl dark:text-white">
            Publications
          </p>
          {data?.map((publiData) => (
            <div key={publiData.id}>
               <PublicationCard title={publiData.title} date={publiData.datePublication} description={publiData.abstractText} link={publiData.link} category={publiData.typePublication}/>
            </div>
          ))}
        
        </div>
      </div>
    </div>
  )
}
