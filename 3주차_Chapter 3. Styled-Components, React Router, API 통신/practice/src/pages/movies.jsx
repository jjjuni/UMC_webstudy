import axios from "axios";

import {useEffect, useState} from "react";
import Card from "../components/card";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(import.meta.env.VITE_MOVIE_API_URL + "/movie/now_playing?language=en-US&page=1", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        },
      })
      setMovies(movies);
    }
    getMovies();
  }, []);

  return (
    <>
      {movies.data?.results.map((movie) => (
        <Card key={movie.id} movie={movie}/>
      ))}
    </>
  );
};

export default Movies