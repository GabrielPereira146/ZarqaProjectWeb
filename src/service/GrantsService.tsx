import axios from "axios";
import type { GrantsData } from "../interface/GrantsData";

const BASE_URL = "http://localhost:8080/grants";

export const fetchAllGrants = async (): Promise<GrantsData[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
