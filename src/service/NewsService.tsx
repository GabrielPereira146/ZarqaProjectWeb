import axios from "axios";
import type { NewsData } from "../interface/NewsData";  

const BASE_URL = "http://localhost:8080/newsletters";

export const fetchAllNews = async (): Promise<NewsData[]> => {
    const response = await axios.get(BASE_URL);
    return response.data;
};
