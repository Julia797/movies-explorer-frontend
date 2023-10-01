import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Login.css';
import Input from "../Input/Input";

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
    <fieldset className="form__input form__input_loginForm">
      <Input
        name='email'
        type='email'
        title='E-mail'
        value={values.email}
        isInputValid={isInputValid.email}
        error={errors.email}
        minLength="2"
        maxLength="40"
        id="email"
        onChange={handleChange}
      />
      <Input
        name='password'
        type='password'
        title='Пароль'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        minLength = '3'
        id="contact-password"
        onChange={handleChange}
      />
      </fieldset>
  </LoginRegistrationForm>
  );
}

export default Login;

/*return (
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
}*/