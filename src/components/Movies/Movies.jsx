import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
//import { movies, savedMovies } from '../../utils/initialMovies';
import MoviesApi from '../../utils/MoviesApi';
import { useState } from 'react';



function Movies({ saveMovies }) {
  const [movies, setMovies] = useState([]) // все фильмы, загруженные с beatfilm-movies.
  const [searchFilms, setSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isCheckbox, setIsCheckbox] = useState(false) // состояние чекбокса.
  const [isLoadingMovies, setIsLoadingMovies] = useState(false) // прелоадер при загрузке фильмов.
  const [error, setError] = useState(false) // вывод ошибки при первой загрузке фильмов.

  if (localStorage.token) {
  MoviesApi.getMovies()
        .then((res) => {
          setMovies(res)
          
        })
        .catch(err => {
          
          console.log('Ошибка. Поиск фильма закончился неудачей: ', err);
        })
        .finally(() => console.log('Ошибка. Поиск фильма закончился неудачей: '))
      } else {
       
        localStorage.clear()
    }
   

  
  return (
    <>
        <SearchFilms
         isCheckbox={isCheckbox}
        />
        <MoviesCardList
          movies={movies} 
          saveMovies={saveMovies}
          />
      </> 
  )
}

export default Movies;
