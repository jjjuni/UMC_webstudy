import axios from "axios";

import {useEffect, useState} from "react";
import Card from "../components/card";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movies = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1`, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzEyZWI3MDBlNDQyYmNkYTFkY2E2NWI2MGFjZTY2OSIsIm5iZiI6MTcyODEwODgxNC4yNjQ0NzUsInN1YiI6IjY3MDBkMjU1OTI1ZmRmOTI1YjdjZjY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TbqAVTRk04Nq8Zik2t1aVSO1HCNYoObaBCPG36zjd8s`
        }
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