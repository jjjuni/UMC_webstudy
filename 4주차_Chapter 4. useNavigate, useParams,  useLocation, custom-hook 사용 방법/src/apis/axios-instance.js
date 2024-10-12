import axios from 'axios';

const axiosInstance = axios.create({
    headers:{
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
    baseURL: import.meta.env.VITE_MOVIE_API_URL,
})

export {axiosInstance}