import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

function MoviesCardList({ movies, saveMovies, handleMovieLike, handleDeleteMovie, isLoadingMovies, errorNoMovie }) {
  const { pathname } = useLocation()
  const [visibleMovies, setVisibleMovies] = useState([]);
  const [isButtonOn, setIsButtonOn] = useState(false);

  const getCardsCount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 16;
    } else if (screenWidth >= 1168) {
      return 12;
    } else if (screenWidth >= 768) {
      return 8;
    } else if (screenWidth >= 749) {
      return 4;
    } else {
      return 5;
    }
  };
 
  const сount = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1280) {
      return 4;
    } else if (screenWidth >= 1170) {
      return 3;
    } else if (screenWidth >= 768) {
      return 2;
    } else if (screenWidth >= 750) {
      return 1;
    } else {
      return 2;
    }
  };
 
  useEffect(() => {
    setVisibleMovies(movies.slice(0, getCardsCount()));
    setIsButtonOn(movies.length > getCardsCount());
  }, [movies]);

  const handleShowMore = () => {
    setVisibleMovies(prevVisibleMovies => [
      ...prevVisibleMovies,
      ...movies.slice(prevVisibleMovies.length, prevVisibleMovies.length + сount())
    ]);

    if (visibleMovies.length + getCardsCount() >= movies.length) {
      setIsButtonOn(false);
    }
  };
 
  return (
    <>
      <section className="elements" aria-label="видеофильм">
        <ul className="element">
          {isLoadingMovies ? <Preloader /> :
            (pathname === '/movies') ?
            visibleMovies.map(data => {
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
        {isButtonOn && pathname === '/movies' && <button className="elements__more" type="button" name="more" onClick={handleShowMore}>Ещё</button>}
      </section>
    </>
  )
}

export default MoviesCardList;

