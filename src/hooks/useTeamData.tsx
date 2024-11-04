import { useQuery } from "@tanstack/react-query";
import type { TeamData } from "../interface/TeamData";
import { fetchAllMembers } from "../service/TeamService";

export function useTeamData() {
    const query = useQuery<TeamData[], Error>({
        queryKey: ['team-data'],
        queryFn: fetchAllMembers, // No need for async/await here as it is already handled in fetchAllMembers
        retry: 2,
    });

    return {
        ...query,
        data: query.data || [], // Fallback to empty array if data is undefined
    };
}
