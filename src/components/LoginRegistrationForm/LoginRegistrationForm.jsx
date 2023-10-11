import { Link } from 'react-router-dom';
import './LoginRegistrationForm.css';
import Form from "../Form/Form";

function LoginRegistrationForm({ nameForm, title, onSubmit, nameButton, isValid=true, onClick, children, outOfAccount }) {
   
  return (
    <section className="loginRegistrationForm">
      <Form
        nameForm={nameForm}
        title={title}
        nameButton={nameButton}
        onSubmit={onSubmit}
        children={children} 
        isValid={isValid}
        onClick={onClick}
      />

      {nameForm === `signup` ? <p className="loginRegistrationForm__subtitle">Уже зарегистрированы? <Link className="loginRegistrationForm__link button" 
      to={'/signin'}>Войти</Link></p> : nameForm === `signin` ? 
        <p className="loginRegistrationForm__subtitle" >Ещё не зарегистрированы? <Link className="loginRegistrationForm__link button" 
        to={'/signup'}>Регистрация</Link></p> : nameForm === `profile-edit` ? 
        <Link className="loginRegistrationForm__link  loginRegistrationForm__link_exit loginRegistrationForm__link_none" to={'/'} >Выйти из аккаунта</Link> : 
        <Link className="loginRegistrationForm__link  loginRegistrationForm__link_exit button" to={'/'} onClick={outOfAccount} >Выйти из аккаунта</Link>}
    </section>
  );
}

export default LoginRegistrationForm;
