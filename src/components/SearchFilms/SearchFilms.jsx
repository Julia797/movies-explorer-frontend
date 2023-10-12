import './SearchFilms.css';
import Checkbox from '../Checkbox/Checkbox';
import useFormValidation from '../../hooks/useFormValidation';
import { useState } from 'react';

function SearchFilms({ isChecked, setIsChecked, searchForMovies }) {
  const { values, handleChange, resetForm } = useFormValidation()

  const [isValid, setIsValid] = useState(true)

  function handleSubmit(evt) {
    evt.preventDefault()
    if (evt.target.searchFilms.value) {
      searchForMovies(evt.target.searchFilms.value)
      setIsValid(true)
    } else {
      setIsValid(false)
    }
  }
           
  return (
    <section className="searchFilms" aria-label="поиск фильмов">
      
        <form className="searchFilms__form" noValidate onSubmit={handleSubmit} name={'searchFilms'} value={values.searchFilms || ''}>
        <div className="searchFilms__conteiner">
          <input 
          className="searchFilms__input" 
          type="text" 
          placeholder="Фильм" 
          required 
          onChange={(evt) => {
            handleChange(evt)
            setIsValid(true)}} 
          name='searchFilms'/> 
          <button type="submit" className="searchFilms__button">Найти</button>
        </div>
        <span className={isValid ? "searchFilms_error" : "searchFilms_error search__error_active"} >Введите ключевое слово</span>
        <Checkbox 
          isChecked={isChecked}
          setIsChecked={setIsChecked}
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