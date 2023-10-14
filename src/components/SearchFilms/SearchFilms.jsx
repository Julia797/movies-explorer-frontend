import './SearchFilms.css';
import Checkbox from '../Checkbox/Checkbox';
import useFormValidation from '../../hooks/useFormValidation';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'

function SearchFilms({ isChecked, setIsChecked, saveMovies, searchForMovies, checked, downloadedMovies, selectionOfFilms, isLoadingMovies, isSearchFilms, searchForMoviescheckbox, searchForMoviesFirst }) {
  const { values, handleChange, resetForm } = useFormValidation()
  const { pathname } = useLocation()
  const [isValid, setIsValid] = useState(true)

  function handleSubmit(evt) {
    evt.preventDefault()
    if (evt.target.searchFilms.value) {
      console.log(evt.target.searchFilms.value);
      searchForMovies(evt.target.searchFilms.value, isChecked, downloadedMovies )
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
  
  useEffect(() => {
    if ((pathname === '/movies')) {
      resetForm({ searchFilms: isSearchFilms })
    }
  }
    , [isSearchFilms, pathname, resetForm])

  return (
    <section className="searchFilms" aria-label="поиск фильмов">
      
        <form className="searchFilms__form" noValidate onSubmit={handleSubmit} name={'searchFilms'}>
        <div className="searchFilms__conteiner">
          <input 
          className="searchFilms__input" 
          type="text" 
          placeholder="Фильм" 
          required 
          onChange={(evt) => {
            handleChange(evt)
            setIsValid(true)}} 
          name='searchFilms'
          value={values.searchFilms || ''}
          /> 
          <button type="submit" className="searchFilms__button">Найти</button>
        </div>
        <span className={isValid ? "searchFilms_error" : "searchFilms_error search__error_active"} >Введите ключевое слово</span>
        <Checkbox 
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          searchForMoviescheckbox={searchForMoviescheckbox}
          checked={checked}
        />
          
        </form>
      
    </section>
  );
}

export default SearchFilms;

/*return (
  <section className="searchFilms" aria-label="поиск фильмов">
    <div className="searchFilms__conteiner">
      <form className="searchFilms__form" noValidate  onSubmit={onSubmit} name={'searchFilms'} value={values.search}>
        <input className="searchFilms__input" type="text" placeholder="Фильм" required onChange={handleChange} /> 
        <button type="submit" className="searchFilms__button">Найти</button>
        <Checkbox/>
      </form>
    </div>
  </section>
);
}*/