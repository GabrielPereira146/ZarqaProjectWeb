import axios from "axios";
import type { PublicationsData } from "../interface/PublicationsData";


const BASE_URL = "http://localhost:8080/publications";

export const fetchAllPublications = async (): Promise<PublicationsData[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
