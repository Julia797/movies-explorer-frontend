import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';
import { useCallback, useEffect, useState } from 'react';

function Movies({ saveMovies, addMovie }) {
  const [downloadedMovies, setDownloadedMovies] = useState([]) // все фильмы, загруженные с beatfilm-movies.
  const [isSearchFilms, setIsSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [isLoadingMovies, setIsLoadingMovies] = useState(false) // прелоадер при загрузке фильмов.
  const [error, setError] = useState(false) // вывод ошибки сервера при первой загрузке фильмов.
  const [selectedFilms, setSelectedFilms] = useState([]) //отобранные фильмы по строке поиска и чекбоксу
  
    const selectionOfFilms = useCallback((input, isChecked, movies) => {
      //setIsSearchFilms(input)
      //addInLocalStorage(movies, input, isChecked)
      localStorage.setItem('searchfilms', JSON.stringify(input))
      localStorage.setItem('checkbox', JSON.stringify(isChecked))
      setIsSearchFilms(input)
      setSelectedFilms(movies.filter((item) => {
        const searchName = item.nameRU.toLowerCase().includes(input.toLowerCase())
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
          //setIsChecked(false)
          localStorage.setItem('downloadedmovies', JSON.stringify(res))
          selectionOfFilms(input, isChecked, res)
        })
        .catch(err => {
          setError(true)
          console.log('Ошибка. Поиск фильмов завершился неудачей: ', err);
        })
        .finally(() => setIsLoadingMovies(false))
    }
    //const movies = JSON.parse(localStorage.downloadedmovies)

      function searchForMovies(input) {
        if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
          const movies = JSON.parse(localStorage.downloadedmovies)
          setDownloadedMovies(movies)
          selectionOfFilms(input, isChecked, movies)
        } else {
          searchForMoviesFirst(input)
        }
    }

    useEffect(() => {
      if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
          //const movies = JSON.parse(localStorage.downloadedmovies)
          const search = JSON.parse(localStorage.searchfilms)
          const checked = JSON.parse(localStorage.checkbox)
          //console.log(movies);
          console.log(search);
          //setIsLoadingMovies(movies)
          //console.log(checked);
          setIsSearchFilms(search)
          console.log(isSearchFilms)
          setIsChecked(checked)
      }
    }, [])
  

    function searchForMoviescheckbox() {
      if (isChecked) {
        setIsChecked(false)
        selectionOfFilms(isSearchFilms, false, downloadedMovies)
        localStorage.setItem('checkbox', JSON.stringify(false))
        } else {
        setIsChecked(true)
        selectionOfFilms(isSearchFilms, true, downloadedMovies)
        localStorage.setItem('checkbox', JSON.stringify(true))
      }
    }
    
  return (
    <>
        <SearchFilms
          downloadedMovies={downloadedMovies}
          searchForMovies={searchForMovies}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isSearchFilms={isSearchFilms}
          //search={search}
          checked={isChecked}
          searchForMoviesFirst={searchForMoviesFirst}
          searchForMoviescheckbox={searchForMoviescheckbox}
          selectionOfFilms={selectionOfFilms}
         />
        <MoviesCardList
          movies={selectedFilms} 
          saveMovies={saveMovies}
          addMovie={addMovie}
          isLoadingMovies
          />
      </> 
  )
}

export default Movies;
