import './SearchFilms.css';
import Checkbox from '../Checkbox/Checkbox';
import useFormValidation from '../../hooks/useFormValidation';

function SearchFilms({ onSubmit }) {
  const {values, handleChange} = useFormValidation()
   
  return (
    <section className="searchFilms" aria-label="поиск фильмов">
      
        <form className="searchFilms__form" noValidate  onSubmit={onSubmit} name={'searchFilms'} value={values.search}>
        <div className="searchFilms__conteiner">
          <input className="searchFilms__input" type="text" placeholder="Фильм" required onChange={handleChange} /> 
          <button type="submit" className="searchFilms__button">Найти</button>
        </div>
        <Checkbox/>
          
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