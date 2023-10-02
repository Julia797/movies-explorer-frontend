import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import './LoginRegistrationForm.css';

function LoginRegistrationForm({ nameForm, title, nameButton, onSubmit, children, isValid=true }) {

   
  return (
    <section className="loginRegistrationForm">
      <form className={`form form_${nameForm}`} noValidate name={nameForm} onSubmit={onSubmit} >
        <div className='loginRegistrationForm__logog'>
          <img className={nameForm === 'profile' ? 'loginRegistrationForm__logo loginRegistrationForm__logo_profile' : 'loginRegistrationForm__logo'} src={logo} alt="логотип сайта"/>
        </div>
      {nameForm === `profile` ? <p className="loginRegistrationForm__title loginRegistrationForm__title_profile">{title}</p> : <p className="loginRegistrationForm__title">{title}</p>}
        {children}
        <button className={nameForm === 'profile' ? 'form__btn-enter form__btn-enter_profile' : 'form__btn-enter'} type="submit" aria-label={nameButton}>{nameButton}</button>
      </form>
      {nameForm === `signup` ? <p className="loginRegistrationForm__subtitle">Уже зарегистрированы? <Link className="loginRegistrationForm__link button" to={'/sign-in'}>Войти</Link></p> : nameForm === `signin` ? <p className="loginRegistrationForm__subtitle" >Ещё не зарегистрированы? <Link className="loginRegistrationForm__link button" to={'/sign-up'}>Регистрация</Link></p> : <Link className="loginRegistrationForm__link  loginRegistrationForm__link_exit button" to={'/'} >Выйти из аккаунта</Link>}
    </section>
  );
}

export default LoginRegistrationForm;
