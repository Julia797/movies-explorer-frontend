import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';

function Header({ nameHeader, isLoggedIn, onClick }) {
  
  return (
    <header className={nameHeader === "movies" || nameHeader === "saved-movies" || nameHeader === "profile" ?
      "header indent" : "header header_themeBlue indent"}>
           
      <Link to={'/'} className="header__logo"><img className="header__img" src={logo} alt="логотип сайта"/></Link>
      
      <ul className="header__navigation">
          <li>
            <Link to={'/movies'} className={nameHeader === "movies" || nameHeader === "profile" ? 
              "header__films header__films_bold" : nameHeader === "saved-movies" ? "header__films" : nameHeader === 'home' && isLoggedIn ? 
              "header__films header__films_in" : "header__films header__none"}>Фильмы</Link></li>
          <li>
            <Link to={'/saved-movies'} className={nameHeader === "movies" || nameHeader === "profile" ? 
             "header__films-save" : nameHeader === 'home' && isLoggedIn ? "header__films-save header__films-save_in" : nameHeader === "saved-movies" ?
             "header__films-save header__filmsfilms-save_bold" : "header__films-save header__none"}>Сохранённые фильмы</Link></li>
        </ul>
     
        <Link to={'/profile'} className={nameHeader === "movies" || nameHeader === "saved-movies" || nameHeader === "profile" ? 
          "header__linkAcc" : nameHeader === 'home' && isLoggedIn ? "header__linkAcc header__linkAcc_in" : "header__none"}>Аккаунт <div className='header__account'>
            </div></Link>
     

      <ul className={nameHeader === "movies" || nameHeader === "saved-movies" || nameHeader === "profile" ? 
        "header__loginRegistration header__none" : nameHeader === 'home' && isLoggedIn ? "header__loginRegistration header__none" : "header__loginRegistration"}>
          <li><Link to={'/signup'} className="header__registration">Регистрация</Link></li>
          <li><Link to={'/signin'} className="header__login link">Войти</Link></li>
      </ul>

      <button type='button' className={nameHeader === 'home' && isLoggedIn ? "header__burger header__burger_white" : nameHeader === "home" ?
       "header__burger header__burger_close" : "header__burger"} onClick={onClick}></button>
    </header>
  );
}
export default Header