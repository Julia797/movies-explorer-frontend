import './SearchFilms.css';
import Checkbox from '../Checkbox/Checkbox';
import useFormValidation from '../../hooks/useFormValidation';

function SearchFilms({ onSubmit, isCheckbox }) {
  const { values, errors, isValid, isInputValid, handleChange, resetForm } = useFormValidation()

  function handleSubmit(evt) {
    evt.preventDefault()
    
  }
     
  return (
    <section className="searchFilms" aria-label="поиск фильмов">
      
        <form className="searchFilms__form" noValidate  onChange={handleChange} onSubmit={handleSubmit} name={'searchFilms'} value={values.search}>
        <div className="searchFilms__conteiner">
          <input className="searchFilms__input" type="text" isValid={isValid} placeholder="Фильм" required onChange={handleChange} name='search'/> 
          <button type="submit" className="searchFilms__button"disabled={!isValid} >Найти</button>
        </div>
        <span className={isValid ? "searchFilms_error" : "searchFilms_error search__error_active"} >Введите ключевое слово</span>
        <Checkbox  isCheckbox={isCheckbox}/>
          
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