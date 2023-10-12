import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';
import { useCallback, useEffect, useState } from 'react';



function Movies({ saveMovies }) {
  const [downloadedMovies, setDownloadedMovies] = useState([]) // все фильмы, загруженные с beatfilm-movies.
  const [searchFilms, setSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [isLoadingMovies, setIsLoadingMovies] = useState(false) // прелоадер при загрузке фильмов.
  const [error, setError] = useState(false) // вывод ошибки сервера при первой загрузке фильмов.
  const [selectedFilms, setSelectedFilms] = useState([]) //отобранные фильмы по строке поиска и чекбоксу

  
    function addInLocalStorage(movies, searchFilms, isChecked) {
      localStorage.setItem('searchfilms', JSON.stringify(searchFilms))
      localStorage.setItem('checkbox', JSON.stringify(isChecked))
      localStorage.setItem('downloadedmovies', JSON.stringify(movies))
    }
   
    /*function getLocalStorageData() {
      const movies = JSON.parse(localStorage.downloadedmovies)
      const search = JSON.parse(localStorage.searchfilms)
      const checked = JSON.parse(localStorage.checkbox)
      return { movies, search, checked };
    }*/

    const selectionOfFilms = useCallback((input, isChecked, movies) => {
      setSearchFilms(input)
      addInLocalStorage(movies, input, isChecked)
      setSelectedFilms(movies.filter((item) => {
        const searchName = item.nameRU.toLowerCase().includes(input.toLowerCase())
        console.log(searchName);
        if (isChecked) {
          return searchName && item.duration <= 40;
        } else {
          return searchName;
        }
      }))   
    }, [])

    function searchForMoviesFirst(input) {
      console.log(input);
      setIsLoadingMovies(true)
      MoviesApi.getMovies()
        .then((res) => {
          setDownloadedMovies(res)
          selectionOfFilms(input, isChecked, res)
        })
        .catch(err => {
          setError(true)
          console.log('Ошибка. Поиск фильмов завершился неудачей: ', err);
        })
        .finally(() => setIsLoadingMovies(false))
    }
   
      function searchForMovies(input) {
        if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
          const movies = JSON.parse(localStorage.downloadedmovies)
          const search = JSON.parse(localStorage.searchfilms)
          const checked = JSON.parse(localStorage.checkbox)
          setSearchFilms(search)
          setIsChecked(checked)
          setDownloadedMovies(movies)
          selectionOfFilms(search, checked, movies)
        } else {
          searchForMoviesFirst(input)
        }
    }
      
  return (
    <>
        <SearchFilms
          searchForMovies={searchForMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <MoviesCardList
          movies={selectedFilms} 
          saveMovies={saveMovies}
          />
      </> 
  )
}

export default Movies;
