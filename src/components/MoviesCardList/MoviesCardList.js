import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';


function MoviesCardList({ movies }) {
  
 
  return (
    <>
      <section className="elements" aria-label="видеофильм">
        <ul className="element">
          {movies.map(data => {
            return (
              <MoviesCard 
                key = {data.movieId}
                name={data.nameRu} 
                src={data.image} 
                trailerLink={data.trailerLink}
                duration={data.duration}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default MoviesCardList;
