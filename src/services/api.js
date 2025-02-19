import { REACT_APP_API_KEY, REACT_APP_BASE_URL } from "../../creds";

const API_KEY = REACT_APP_API_KEY;
const BASE_URL = REACT_APP_BASE_URL;

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
};