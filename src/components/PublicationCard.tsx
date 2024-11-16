import type { ComponentProps } from 'react'
interface PublicationProps extends ComponentProps<'div'> {
    title: string;
    date: string;
    description: string;
    link: string;
    category: string;
}

const PublicationCard = ({
    title,
    date,
    description,
    link,
    category,
}: PublicationProps) => {

    return (
        <div className="flex flex-col border-2 border-sand-200 rounded-md p-3 gap-2">
            <p className="font-semibold dark:text-white my-4 md:text-2xl text-lg">{title}</p>
            <div className="flex flex-row font-semibold gap-3 w-full md:text-base text-xs">
                <div className="flex flex-col bg-sand-200 bg-opacity-30 text-sand-300 px-2 rounded-lg">
                    <p>{category}</p>
                </div>
                <div className="flex flex-col">
                    <p className="font-normal text-zinc-500">{date}</p>
                </div>
            </div>
            <div className="w-full line-clamp-3 dark:text-white md:text-base text-xs">{description}</div>
            <button type="button" className="text-sand-200 border-2 border-sand-200 rounded-full px-4 py-2 w-fit md:text-base text-xs mt-4">
                <a href={link} target="_blank" rel="noopener noreferrer">
                    Read More
                </a>
            </button>
        </div>
    );
};

export default PublicationCard;