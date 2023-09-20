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
    <header className="header header_themeBlue indent">
      <img className="header__logo" src={logo} alt="логотип сайта"/>
      <ul className="header__navigation">
          <li><a href="#" className="header__films">Фильмы</a></li>
          <li><a href="#" className="header__films-save link">Сохранённые фильмы</a></li>
        </ul>
     
      <p className="header__account">Аккаунт</p>
     

      <ul className="header__loginRegistration">
          <li><a href="#" className="header__registration active_link">Регистрация</a></li>
          <li><a href="#" className="header__login link">Войти</a></li>
        </ul>

        <img className="header__burger" src={burger} alt="кнопка"/>
    </header>
  );
}
export default Header