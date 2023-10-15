import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import { useLocation } from 'react-router-dom';

function MoviesCardList({ movies, saveMovies, handleMovieLike, handleDeleteMovie, isLoadingMovies, errorNoMovie }) {
  const { pathname } = useLocation()
  
  function handleMore() {
    
  }

  return (
    <>
      <section className="elements" aria-label="видеофильм">
        <ul className="element">
          {isLoadingMovies ? <Preloader /> :
            (pathname === '/movies') ?
              movies.map(data => {
                return (
                  <MoviesCard 
                    data={data}
                    src={`https://api.nomoreparties.co${data.image.url}`}
                    handleMovieLike={handleMovieLike}
                    saveMovies={saveMovies}
                    key={data.id}
                  />
                )             
            }) : movies.length !== 0 ?
                  movies.map(data => {
                    return (
                      <MoviesCard 
                        data={data}
                        src={data.image}
                        handleDeleteMovie={handleDeleteMovie}
                        key={data._id}
                      />
                    )  
                  }) : errorNoMovie ?
                    <span className="element__error">Во время запроса произошла ошибка. Возможно, проблема с 
                      соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</span>
                    : 
                    <span className='element__error'>Ничего не найдено</span>
          } 
        </ul>
        {pathname === '/movies' && <button className="elements__more" type="button" name="more" onClick={handleMore}>Ещё</button>}
      </section>
    </>
  )
}

export default MoviesCardList;

