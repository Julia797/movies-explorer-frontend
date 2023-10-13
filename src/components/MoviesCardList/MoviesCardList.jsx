import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'


function MoviesCardList({ movies, saveMovies, addMovie, isLoadingMovies }) {
  
 
  return (
    <>
      <section className="elements" aria-label="видеофильм">
        <ul className="element">
          {movies.map(data => {
            return (
              <MoviesCard 
                key = {data.id}
                name={data.nameRU} 
                src={`https://api.nomoreparties.co${data.image.url}`} 
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
