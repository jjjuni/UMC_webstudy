import axios from "axios";

const axiosTMDBInstance = axios.create({
  headers: {
    Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
  },
  baseURL: process.env.VITE_MOVIE_API_URL,
});

export { axiosTMDBInstance };
