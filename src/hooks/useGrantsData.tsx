import { useQuery } from "@tanstack/react-query";
import type { GrantsData } from "../interface/GrantsData";
import { fetchAllGrants} from "../service/GrantsService";

export function useGrantsData() {
    const query = useQuery<GrantsData[], Error>({
        queryKey: ['grants-data'],
        queryFn: fetchAllGrants,
        retry: 2,
    });

    return {
        ...query,
        data: query.data || [], // Fallback to empty array if data is undefined
    };
}
