import { Link } from 'react-router-dom';
import './SearchFilms.css';
import Checkbox from '../Checkbox/Checkbox';
import useFormValidation from '../../hooks/useFormValidation';

function SearchFilms({ onSubmit }) {
  const {values, handleChange} = useFormValidation()
   
  return (
    <section className="searchFilms">
      <div className="searchFilms__conteiner">
        <form className="searchFilms__form" noValidate  onSubmit={onSubmit} name={'searchFilms'} value={values.search}>
          <input className="searchFilms__input" type="text" placeholder="Фильм" required onChange={handleChange} /> 
          <button type="submit" className="searchFilms__button">Найти</button>
        </form>
      </div>
      <Checkbox/>
    </section>
  );
}

export default SearchFilms;

