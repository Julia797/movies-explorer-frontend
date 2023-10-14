import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesApi from '../../utils/MoviesApi';
import { useCallback, useEffect, useState } from 'react';

function Movies({ saveMovies, handleMovieLike,  handleDeleteMovie}) {
  const [downloadedMovies, setDownloadedMovies] = useState([]) // все фильмы, загруженные с beatfilm-movies.
  const [isSearchFilms, setIsSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [isLoadingMovies, setIsLoadingMovies] = useState(false) // прелоадер при загрузке фильмов.
  const [error, setError] = useState(false) // вывод ошибки сервера при первой загрузке фильмов.
  const [selectedFilms, setSelectedFilms] = useState([]) //отобранные фильмы по строке поиска и чекбоксу
  
    const selectionOfFilms = useCallback((input, isChecked, movies) => {
      setIsSearchFilms(input)
      localStorage.setItem('searchfilms', JSON.stringify(input))
      localStorage.setItem('checkbox', JSON.stringify(isChecked))
      localStorage.setItem('downloadedmovies', JSON.stringify(movies))
      //setIsSearchFilms(input)
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

      function searchForMovies(input, isChecked, downloadedMovies) {
        if (localStorage.downloadedmovies && localStorage.searchfilms && localStorage.checkbox) {
           selectionOfFilms(input, isChecked, downloadedMovies)
           
        } else {
          searchForMoviesFirst(input)
          console.log('ошибка  не тут');
        }
    }

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
    }, [downloadedMovies, isChecked,  selectionOfFilms])
  
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
          isSearchFilms={isSearchFilms}
          error={error}
          searchForMoviescheckbox={searchForMoviescheckbox}
          selectionOfFilms={selectionOfFilms}
          saveMovies={saveMovies}
         />
        <MoviesCardList
          movies={selectedFilms} 
          handleMovieLike={handleMovieLike}
          error={error}
        />
      </> 
  )
}

export default Movies;
