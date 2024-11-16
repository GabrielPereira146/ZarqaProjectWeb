import { useQuery } from "@tanstack/react-query";
import type { NewsData } from "../interface/NewsData";
import { fetchAllNews } from "../service/NewsService";


export function useNewsData() {
    const query = useQuery<NewsData[], Error>({
        queryKey: ['news-data'],
        queryFn: fetchAllNews,
        retry: 2,
    });
    return {
        ...query,
        data: query.data || [], // Fallback to empty array if data is undefined
    };
}
