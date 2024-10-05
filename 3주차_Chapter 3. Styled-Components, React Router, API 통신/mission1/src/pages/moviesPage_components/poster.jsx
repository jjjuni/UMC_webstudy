import styled from "styled-components";
import PropTypes from 'prop-types';

function Poster({movie}) {
  return (
    <StyledPoster src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
  );
}

export default Poster;

const StyledPoster = styled.img`
  flex: 1 1 calc(14.21% - 10px);
  max-width: calc(14.21% - 10px);
  margin: 5px;
  border-radius: 10px;
  box-sizing: border-box;

  min-width: 100px;

  transition: all 0.3s ease;

  @media (max-width: 1700px){
    flex: 1 1 calc(16.66% - 10px);
    max-width: calc(16.66% - 10px);
  }

  @media (max-width: 1400px){
    flex: 1 1 calc(20% - 10px);
    max-width: calc(20% - 10px);
  }


  @media (max-width: 1100px){
    flex: 1 1 calc(25% - 10px);
    max-width: calc(25% - 10px);
  }
  @media (max-width: 950px){
    flex: 1 1 calc(33% - 10px);
    max-width: calc(33% - 10px);
  }
  @media (max-width: 600px){
    flex: 1 1 calc(50% - 10px);
    max-width: calc(50% - 10px);
  }
  @media (max-width: 400px){
    flex: 1 1 calc(100% - 10px);
    max-width: calc(100% - 10px);
    min-width: 200px;
  }
    
  &:hover{
    filter: brightness(50%);
  }
`;

Poster.propTypes = {
  movie: PropTypes.shape({

  }).isRequired
}