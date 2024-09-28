import { MOVIES } from '../mocks/movies';
import './Movie.css';

function Movie() {
  return (
    <div className='movie-list'>
      {MOVIES.results.map(movie => (
        <div key={movie.id} className='poster-box'>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className='movie-poster' />
        </div>
      ))}
    </div>
  );
}

export default Movie