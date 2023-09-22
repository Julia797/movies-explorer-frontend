import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Profile.css';

function Profile({ handleRegister }) {
  const { values, errors, isValid, isInputValid } = useFormValidation()
 
  //function handleSubmit(evt) {
   // evt.preventDefault()
  //  handleRegister(values.password, values.email, resetForm)
  //}
 
   return (
    <LoginRegistrationForm
  nameForm='profile'
  title='Привет, Виталий!'
  nameButton='Редактировать'
  //isSending={isSending}
  //onChange={handleChange}
  isValid={isValid}
  //onSubmit={handleSubmit}
  >
    <fieldset className="form__input form__input_loginRegistrationForm">
      <label className="form__label">
      <span className="form__input-span">Имя</span>
        <input
          type="text"
          id="name-input"
          //placeholder="Имя"
          className={`form__item form__item_type_name ${isInputValid.username === undefined || isInputValid.username ? '' : 'form__item_type_error'}`}
          name="username"
          required
          minLength={2}
          maxLength={40}
          value={values.username ? values.username : ''}
          //onChange={handleChange}
      />
      <span className="form__input-error name-input-error">{errors.username}</span>
    </label>  
        
    <label className="form__label">
      <span className="form__input-span">E-mail</span>
      <input
        type="email"
        id="email"
        //placeholder="Email"
        className={`form__item form__item_type_loginRegistrationForm form__item_type_email ${isInputValid.email === undefined || isInputValid.email ? '' : 'form__item_type_error'}`}
        name="email"
        required
        minLength={2}
        maxLength={40}
        value={values.email ? values.email : ''}
        //onChange={handleChange}
        />
        <span className="form__input-error name-input-error">{errors.email}</span>
      </label>
    </fieldset>
  </LoginRegistrationForm>
  );
}


export default Profile;