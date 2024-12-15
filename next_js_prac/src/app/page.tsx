import { axiosTMDBInstance } from './apis/axios-instance';
import Poster from './component/poster/poster';
import style from './page.module.css';

export default async function Home() {
  
  // const getMovies = async () => {
  //   try {
  //     const response = await axiosTMDBInstance.get(`/movie/now_playing?language=ko-KR&page=1`);
  //     return response.data; // API 응답 데이터 반환
  //   } catch (error) {
  //     console.log("Error fetching movies:", error);
  //     return { results: [] }; // 기본값 반환
  //   }
  // };

  // const movies = await getMovies();

  const data = await fetch(`${process.env.VITE_MOVIE_API_URL}/movie/now_playing?language=ko-KR&page=1`, {
    headers: {
      Authorization: `Bearer ${process.env.VITE_TMDB_TOKEN}`,
    },
  })
  const movies = await data.json()
  
  return (
    <div className="flex flex-col pt-20 justify-center items-center">
      <h1 className={style.title}>상영 중인 영화</h1>
      <div className={style.container}>
        <div className={style.posterWrapper}>
          {movies?.results?.map((movie: { id: number; title: string }) => (
            <Poster key={movie.id} movie={movie}/>
          ))}
        </div>
      </div>
    </div>
  );
}

