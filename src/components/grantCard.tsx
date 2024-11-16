import type { ComponentProps } from "react";

interface GrantCardProps extends ComponentProps<'div'> {
    title : string,
    number : string,
    support: string,
    date_start: string,
    date_end: string,
    abstractText: string,
    link: string,
  }
  

const GrantCard = ({title, number, support, date_start, date_end, abstractText, link }: GrantCardProps) => {
    return (
        <div className="flex flex-col border-2 border-sand-200 rounded-md p-3 gap-2">
            <p className="font-semibold dark:text-white my-4 md:text-2xl text-lg">
                {title}
            </p>
            <div className="flex font-semibold justify-between 2xl:w-2/5 lg:w-3/5 md:w-5/6 w-full md:text-base text-xs">
                <div className="flex flex-col">
                    <p className="dark:text-white">Process</p>
                    <p className="font-normal text-zinc-500">{number}</p>
                </div>
                <div className="flex flex-col">
                    <p className="dark:text-white">Support modality</p>
                    <p className="font-normal text-zinc-500">{support}</p>
                </div>
                <div className="flex flex-col">
                    <p className="dark:text-white">Tenure</p>
                    <p className="font-normal text-zinc-500">{date_start} - {date_end}</p>
                </div>
            </div>
            <div className="w-full line-clamp-3 dark:text-white md:text-base text-xs">
                {abstractText}
            </div>
            <button
                type="button"
                className="text-sand-200 border-2 border-sand-200 rounded-full px-8 py-2 w-fit md:text-base text-xs hover:scale-105 mt-4"
            >
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About
                </a>
            </button>
        </div>
    );
};

export default GrantCard;