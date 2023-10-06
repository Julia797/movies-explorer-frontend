import logo from '../../images/header-logo.svg';
import './Form.css';

function Form({ nameForm, title, nameButton, onSubmit, children, isValid, onClick }) {
   
  return (
    <form className={`form form_${nameForm}`} noValidate name={nameForm} onSubmit={onSubmit}>
      <div className='form__logog'>
        <img className={nameForm === 'profile' || nameForm === 'profile-edit' ? 
          'form__logo form__logo_profile' : 'form__logo'} src={logo} alt="логотип сайта"/>
      </div>
    {nameForm === `profile`|| nameForm === 'profile-edit' ? <p className="form__title form__title_profile">{title}</p> : 
      <p className="form__title">{title}</p>}
      {children}
      <button className={nameForm === 'profile' ? 'form__btn-enter form__btn-enter_profile' : 'form__btn-enter button'} 
        type="submit" disabled={!isValid} aria-label={nameButton} onClick={onClick}>{nameButton}</button>
    </form>
      
  );
}

export default Form;
