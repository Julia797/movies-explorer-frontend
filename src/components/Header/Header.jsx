import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import burger from '../../images/header-burger.svg';

function Header({ nameHeader, userEmail }) {
  
/* const nameButtonReg = nameHeader === 'signIn' ? 'Регистрация' : nameHeader === 'signUp' ? 'Войти' : 'Выйти'
    
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="логотип Место"/>
      <div className='header__userInfo'>
        <p className={`header__userEmail ${nameHeader === 'free' ? 'header__userEmail_active' : ''}`}>{userEmail}</p>
        <Link className="header__link button" to={nameHeader === 'signUp' ? '/sign-in' : nameHeader === 'signIn' ? '/sign-up' : '/sign-in'} 
          >{nameButtonReg}</Link>
      </div>
    </header>
  );*/
// переделать на нав
  return (
    <header className={nameHeader === "movies" || nameHeader === "saved-movies" ? "header indent" : "header header_themeBlue indent"}>
      <img className="header__logo" src={logo} alt="логотип сайта"/>
      <ul className="header__navigation">
          <li>
            <Link to={'/movies'} className={nameHeader === "movies" ? "header__films header__films_bold" : nameHeader === "saved-movies" ? "header__films" : "header__films header__none"}>Фильмы</Link></li>
          <li>
            <Link to={'/saved-movies'} className={nameHeader === "movies" ? "header__films-save" : nameHeader === "saved-movies" ? "header__films-save header__filmsfilms-save_bold" : "header__films-save header__none"}>Сохранённые фильмы</Link></li>
        </ul>
     
        <Link to={'/profile'} className={nameHeader === "movies" || nameHeader === "saved-movies" ? "header__linkAcc" : "header__none"}>Аккаунт <div className='header__account'></div></Link>
     

      <ul className={nameHeader === "movies" || nameHeader === "saved-movies" ? "header__loginRegistration header__none" : "header__loginRegistration"}>
          <li><Link to={'/sign-up'} className="header__registration active_link">Регистрация</Link></li>
          <li><Link to={'/sign-in'} className="header__login link">Войти</Link></li>
      </ul>

      <img className={nameHeader === "home" ? "header__burger header__burger_close" : "header__burger"} src={burger} alt="кнопка"/>
    </header>
  );
}
export default Header