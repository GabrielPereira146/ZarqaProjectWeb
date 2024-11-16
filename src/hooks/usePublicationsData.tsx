import { useQuery } from "@tanstack/react-query";
import type { PublicationsData } from "../interface/PublicationsData";
import { fetchAllPublications } from "../service/PublicationsService";


export function usePublicationsData() {
    const query = useQuery<PublicationsData[], Error>({
        queryKey: ['grants-data'],
        queryFn: fetchAllPublications,
        retry: 2,
    });

    return {
        ...query,
        data: query.data || [], // Fallback to empty array if data is undefined
    };
}
