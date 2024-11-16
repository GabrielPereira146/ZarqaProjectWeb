import { Frown } from "lucide-react";
import type { ComponentProps } from "react";

interface ErrorPageProps extends ComponentProps<'div'> {
  erro: string;
}

export function ErrorPage({ erro }: ErrorPageProps) {
  return (
    <div className="flex flex-col items-center justify-center h-[55vh] bg-gray-100 dark:bg-zinc-800">
      <div className="text-center flex flex-col items-center">
        <Frown className="w-32 h-32 text-gray-400 dark:text-gray-200 mb-4" />
        <h1 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 dark:text-gray-400 ">
          We couldn't load the team data. Please check your connection and try again.
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {erro}
        </p>
      </div>
    </div>
  );
}
