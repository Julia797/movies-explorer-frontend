import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Movies({ saveMovies, handleMovieLike }) {
  const [downloadedMovies, setDownloadedMovies] = useState([]) // все фильмы, загруженные с beatfilm-movies.
  const [isSearchFilms, setIsSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [isLoadingMovies, setIsLoadingMovies] = useState(false) // прелоадер при загрузке фильмов.
  const [errorNoMovie, setErrorNoMovie] = useState(false) // вывод ошибки сервера при отсутствии фильма по запросу.
  const [errorMoviesFirst, setErrorMoviesFirst] = useState(false)// вывод ошибки сервера при первой загрузке фильмов.
  const [selectedFilms, setSelectedFilms] = useState([]) //отобранные фильмы по строке поиска и чекбоксу
  const [inputValue, setInputValue] = useState("");
  const [isValidSearch, setIsValidSearch] = useState(true)
  const { pathname } = useLocation();
  
    const selectionOfFilms = useCallback((input, isChecked, movies) => {
      setIsSearchFilms(input)
      localStorage.setItem('searchfilms', JSON.stringify(input))
      localStorage.setItem('checkbox', JSON.stringify(isChecked))
      localStorage.setItem('downloadedmovies', JSON.stringify(movies))
      setSelectedFilms(movies.filter((item) => {
        const searchName = item.nameRU.toLowerCase().includes(input.toLowerCase())
        if (isChecked) {
          return searchName && item.duration <= 40;
        } else {
          return searchName;
        }
      }))

      if (selectedFilms.length === 0) {
        setErrorNoMovie(true)
      }
    }, [selectedFilms.length])

    function searchForMoviesFirst(input) {
      setIsLoadingMovies(true)
      MoviesApi.getMovies()
        .then((res) => {
          setDownloadedMovies(res)
          selectionOfFilms(input, isChecked, res)
        })
        .catch(err => {
          setErrorMoviesFirst(true)
          console.log('Ошибка. Поиск фильмов завершился неудачей: ', err);
        })
        .finally(() => setIsLoadingMovies(false))
    }

      function searchForMovies(input, isChecked, downloadedMovies) {
        if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
           selectionOfFilms(input, isChecked, downloadedMovies)
           
        } else {
          searchForMoviesFirst(input)
        }
    }

    function handleInputChange(evt) {
      setInputValue(evt.target.value);
      setIsValidSearch(true)
    }

    useEffect(() => {
      if (pathname === '/movies')
      setInputValue(isSearchFilms);
    }, [isSearchFilms, pathname])
  
    useEffect(() => {
      if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
          const search = JSON.parse(localStorage.searchfilms)
          const checked = JSON.parse(localStorage.checkbox)
          const movies = JSON.parse(localStorage.downloadedmovies)
          setDownloadedMovies(movies)
          setIsSearchFilms(search)
          setIsChecked(checked)
          selectionOfFilms(search, checked, movies)
        }
    }, [isChecked, setDownloadedMovies, selectionOfFilms])

    function searchForMoviescheckbox() {
      if(inputValue) {
        if (isChecked) {
          setIsChecked(false)
          selectionOfFilms(inputValue, false, downloadedMovies)
        } else {
          setIsChecked(true)
          selectionOfFilms(inputValue, true, downloadedMovies)
        } 
      } else {
          setIsValidSearch(false)
      }
    }
       
  return (
    <>
        <SearchFilms
          downloadedMovies={downloadedMovies}
          searchForMovies={searchForMovies}
          isChecked={isChecked}
          isSearchFilms={isSearchFilms}
          searchForMoviescheckbox={searchForMoviescheckbox}
          selectionOfFilms={selectionOfFilms}
          saveMovies={saveMovies}
          handleInputChange={handleInputChange}
          isValidSearch={isValidSearch}
        />
        <MoviesCardList
          movies={selectedFilms} 
          handleMovieLike={handleMovieLike}
          errorNoMovie={errorNoMovie}
          saveMovies={saveMovies}
          errorMoviesFirst={errorMoviesFirst}
        />
      </> 
  )
}

export default Movies;
