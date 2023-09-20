import { Link } from 'react-router-dom';
import './LoginRegistrationForm.css';

function LoginRegistrationForm({ nameForm, title, nameButton, children, isValid=true }) {
 
  return (
    <section className="loginRegistrationForm">
      <p className="loginRegistrationForm__title">{title}</p>
      <form className={`form form_${nameForm}`} noValidate name={nameForm} >
        {children}
        <button className={`form__btn-enter  }`} type="submit" aria-label={nameButton}>{nameButton}</button>
      </form>
      {nameForm === `signup` ? <p className="loginRegistrationForm__subtitle">Уже зарегистрированы? <a href="#" className="loginRegistrationForm__link button" >Войти</a></p> : <p className="loginRegistrationForm__subtitle">Ещё не зарегистрированы? <a href="#" className="loginRegistrationForm__link button" >Регистрация</a></p>}
    </section>
  );
}

export default LoginRegistrationForm;

//<button className={`form__btn-enter ${isValid ? '' : 'form__btn-enter_inactive'} }`} type="submit" aria-label={nameButton}>{nameButton}</button>