import { LoaderCircle } from "lucide-react";

export function Loading(){
    return(
        <div className="flex flex-col items-center justify-center h-[55vh] bg-gray-100 dark:bg-zinc-800">
        <LoaderCircle className="w-20 h-20 text-gray-400 dark:text-gray-200 mb-4 animate-spin" />
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Loading...
        </h1>
      </div>
    )
}