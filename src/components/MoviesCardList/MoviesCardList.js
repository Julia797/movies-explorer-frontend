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
                key = {data._id}
                name={data.name} 
                src={data.image} 
                trailerLink={data.trailerLink}
              />
            )
          })}
        </ul>
      </section>
    </>
  )
}

export default MoviesCardList;
