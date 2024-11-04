import axios from "axios";
import type { TeamData } from "../interface/TeamData";

const BASE_URL = "http://localhost:8080/team";

export const fetchAllMembers = async (): Promise<TeamData[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
