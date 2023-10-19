import { Link } from 'react-router-dom';
import logo from '../../images/header-logo.svg';
import './Form.css';

function Form({ nameForm, title, nameButton, onSubmit, children, isValid, onClick, isSuccessful, isErrorAll, checkButton }) {

  return (
    <form className={`form form_${nameForm}`} noValidate name={nameForm} onSubmit={onSubmit}>
      <div className='form__logog'>
      <Link to={'/'} className="form__link"><img className={nameForm === 'profile' || nameForm === 'profile-edit' ? 
          'form__logo form__logo_profile' : 'form__logo'} src={logo} alt="логотип сайта"/></Link>
      </div>
    {nameForm === `profile`|| nameForm === 'profile-edit' ? <h1 className="form__title form__title_profile">{title}</h1> : 
      <h1 className="form__title">{title}</h1>}
      {children}
      {nameForm === `profile`|| nameForm === 'profile-edit' ? 
        <span className={`profile__res ${isSuccessful ? 'profile__res profile__res_active' : ''}`}>{isSuccessful ? 'Данные профиля успешно обновлены.' : 'При обновлении профиля произошла ошибка'}</span> : ''}
      {nameForm === 'signup' ?  <span className={`profile__res ${isErrorAll ? 'profile__res profile__res_active' : ''}`}>При регистрации произошла ошибка</span> : ''}
      <button className={nameForm === 'profile' ? 'form__btn-enter form__btn-enter_profile' : 'form__btn-enter button'} type="submit" disabled={nameForm === 'profile-edit' ? (!isValid || !checkButton) : !isValid} aria-label={nameButton} onClick={onClick}>{nameButton}</button>
    </form>
 
 
  );
}

export default Form;
