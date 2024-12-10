import style from './poster.module.css'

const Poster = ({ movie }) => {
  return (
    <div className={style.posterWrapper}>
      <img className={style.poster} src={`${process.env.VITE_TMDB_POSTER_URL}/${movie.poster_path}`}/>
      <p className='text-[13px] mt-[5px] mb-[5px]'>{movie.title}</p>
    </div>    
  )
}

export default Poster;


