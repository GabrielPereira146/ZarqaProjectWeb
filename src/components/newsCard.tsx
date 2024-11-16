import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface NewsCardProps extends ComponentProps<"div"> {
  title: string;
  date: string;
  imageUrl: string;
  link: string;
}

export function NewsCard({ title, date, imageUrl, link, className, ...props }: NewsCardProps) {
  return (
    <div className={twMerge(
      "flex flex-col border-2 border-sand-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300",
      className
    )}
      {...props}>
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src={imageUrl}
        alt="Notícia"
      />
      <div className="p-4 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold text-sand-200 mb-2 line-clamp-3">
          {title}
        </h3>
        <p className="text-sm font-medium text-zinc-500 dark:text-white mb-4">
          {date}
        </p>
        <a
          className="text-end font-semibold text-sand-200 text-sm hover:underline mt-auto"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
