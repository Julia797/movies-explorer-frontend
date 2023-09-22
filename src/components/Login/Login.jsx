import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Login.css';

function Login({ handleLogin, isSending }) {
  const { values, errors, isValid, isInputValid, handleChange, resetForm } = useFormValidation()

//function handleSubmit(evt) {
 // evt.preventDefault()
//  handleLogin(values.password, values.email, resetForm)
//}

  return (
    <LoginRegistrationForm
  nameForm='signin'
  title='Рады видеть!'
  //isSending={isSending}
  nameButton='Войти'
  //onSubmit={handleSubmit}
  //onChange={handleChange}
  isValid={isValid}
  >
    <fieldset className="form__input form__input_loginRegistrationForm">
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
      <label className="form__label">
        <span className="form__input-span">Пароль</span>
        <input
          type="password"
          id="contact-password"
          //placeholder="Пароль"
          className={`form__item form__item_type_loginRegistrationForm form__item_type_password ${isInputValid.password === undefined || isInputValid.password ? '' : 'form__item_type_error'}`}
          name="password"
          required
          minLength={8}
          maxLength={20}
          //onChange={handleChange}
          value={values.password ? values.password : ''}
        />
        <span className="form__input-error contact-input-error">{errors.password}</span>
      </label>
      </fieldset>
  </LoginRegistrationForm>
  );
}

export default Login;
