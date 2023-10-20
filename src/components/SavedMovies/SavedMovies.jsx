import SearchFilms from '../SearchFilms/SearchFilms';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function SavedMovies({ saveMovies, handleDeleteMovie }) {
  const [isSearchFilms, setIsSearchFilms] = useState('')  // текст в строке поиска фильмов.
  const [isChecked, setIsChecked] = useState(false); // состояние чекбокса.
  const [selectedFilms, setSelectedFilms] = useState(saveMovies) //отобранные фильмы по строке поиска и чекбоксу
  const [inputValue, setInputValue] = useState("");
  const [isValidSearch, setIsValidSearch] = useState(true)
  const [errorNoMovie, setErrorNoMovie] = useState(false)
  const { pathname } = useLocation()

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
         
  function handleInputChange(evt) {
    setInputValue(evt.target.value);
    setIsValidSearch(true)
  }
  
  function searchForMovies(input) {
     selectionOfFilms(input, isChecked, saveMovies)
     setErrorNoMovie(true)
  }

  useEffect(() => {
    selectionOfFilms(isSearchFilms, isChecked, saveMovies)
  }, [selectionOfFilms, saveMovies, isChecked, isSearchFilms])

  function searchForMoviescheckbox() {
    if(inputValue) {
      if (isChecked) {
        setIsChecked(false)
        selectionOfFilms(inputValue, false, saveMovies)
      } else {
        setIsChecked(true)
        selectionOfFilms(inputValue, true, saveMovies)
      } 
    } else {
        setIsValidSearch(false)
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
          handleInputChange={handleInputChange}
          isValidSearch={isValidSearch}
          setErrorNoMovie={setErrorNoMovie}
        />
        <MoviesCardList
          movies={selectedFilms}
          handleDeleteMovie={handleDeleteMovie}
          saveMovies={saveMovies}
          errorNoMovie={errorNoMovie}
        />
      </> 
  )
}

export default SavedMovies;
