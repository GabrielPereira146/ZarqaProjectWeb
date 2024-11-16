
import { ErrorPage } from "../components/error";
import GrantCard from "../components/grantCard";
import { useGrantsData } from "../hooks/useGrantsData";
import { Loading } from "../components/loading";

export function Grants() {

  const { data, isLoading, isError, error } = useGrantsData();

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
            Grants
          </p>
          {data?.map((grantsData) => (
            <div key={grantsData.id}>
              <GrantCard title={grantsData.title} number={grantsData.number} support={grantsData.support} date_start={grantsData.date_start} date_end={grantsData.date_end} abstractText={grantsData.abstractText} link={grantsData.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
