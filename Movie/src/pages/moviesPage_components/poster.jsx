import styled from "styled-components";
import PropTypes from 'prop-types';

function Poster({movie}) {
  return (
    <MoviePoster>
      <PosterImage src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
      <MovieTitle>{movie.title}</MovieTitle>
      <MovieDate>{movie.release_date}</MovieDate>
    </MoviePoster>
  );
}

export default Poster;

const MoviePoster = styled.div`
  max-width: calc(100% - 10px);
  display: flex;
  flex-direction: column;

  margin: 0 2px 5px 2px;
  gap:2px;

  transition: all 0.4s ease;

  @container poster-box (min-width: calc(150px * 2)){
    flex: 1 1 calc(100%/2 - 4px);
    max-width: calc(100%/2 - 4px);
  }
  @container poster-box (min-width: calc(150px * 3)){
    flex: 1 1 calc(100%/3 - 4px);
    max-width: calc(100%/3 - 4px);
  }
  @container poster-box (min-width: calc(150px * 4)){
    flex: 1 1 calc(100%/4 - 4px);
    max-width: calc(100%/4 - 4px);
  }
  @container poster-box (min-width: calc(150px * 5)){
    flex: 1 1 calc(100%/5 - 4px);
    max-width: calc(100%/5 - 4px);
  }
  @container poster-box (min-width: calc(150px * 6)){
    flex: 1 1 calc(100%/6 - 4px);
    max-width: calc(100%/6 - 4px);
  }
  @container poster-box (min-width: calc(150px * 7)){
    flex: 1 1 calc(100%/7 - 4px);
    max-width: calc(100%/7 - 4px);
  }
  @container poster-box (min-width: calc(150px * 8)){
    flex: 1 1 calc(100%/8 - 4px);
    max-width: calc(100%/8 - 4px);
  }
  @container poster-box (min-width: calc(150px * 9)){
    flex: 1 1 calc(100%/9 - 4px);
    max-width: calc(100%/9 - 4px);
  }
  @container poster-box (min-width: calc(150px * 10)){
    flex: 1 1 calc(100%/10 - 4px);
    max-width: calc(100%/10 - 4px);
  }
`

const MovieTitle = styled.h2`

  font-family: ${props => props.font || 'Pretendard-Regular'};

  margin: 0 0 0 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
  color: #fff;
  box-sizing: border-box;
  font-size: 13px;
`

const MovieDate = styled.p`

  font-family: ${props => props.font || 'Pretendard-Regular'};

  margin: 0 0 10px 8px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  width: 100%;
  color: #fff;
  box-sizing: border-box;
  font-size: 10px;
`

const PosterImage = styled.img`

  flex: 1 1 calc(100% - 10px);
  max-width: calc(100% - 10px);
  margin: 5px;
  border-radius: 10px;
  box-sizing: border-box;

  min-width: 100px;
  height: auto;

  transition: all 0.3s ease;

  &:hover{
    filter: brightness(50%);
    cursor: pointer;
  }
`;

Poster.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,

  }).isRequired
}