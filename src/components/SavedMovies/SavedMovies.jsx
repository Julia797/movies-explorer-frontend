import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';

function SavedMovies({ saveMovies, handleDeleteMovie }) {
  const [isSearchFilms, setIsSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [selectedFilms, setSelectedFilms] = useState(saveMovies) //отобранные фильмы по строке поиска и чекбоксу
  
    const selectionOfFilms = useCallback((input, isChecked, movies) => {
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

  function searchForMovies(input) {
     selectionOfFilms(input, isChecked, saveMovies)
  }

  useEffect(() => {
    selectionOfFilms(isSearchFilms, isChecked, saveMovies)
  }, [selectionOfFilms, saveMovies, isChecked, isSearchFilms])


  function searchForMoviescheckbox() {
    if (isChecked) {
      setIsChecked(false)
      selectionOfFilms(isSearchFilms, false, saveMovies)
    } else {
      setIsChecked(true)
      selectionOfFilms(isSearchFilms, true, saveMovies)
    }
  }

  return (
    <>
        <SearchFilms 
          searchForMovies={searchForMovies}
          isChecked={isChecked}
          searchForMoviescheckbox={searchForMoviescheckbox}
          saveMovies={saveMovies}
          isSearchFilms={isSearchFilms}
        />
        <MoviesCardList
          movies={selectedFilms}
          handleDeleteMovie={handleDeleteMovie}
          saveMovies={saveMovies}
        />
      </> 
  )
}

export default SavedMovies;
