import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Login.css';
import Input from "../Input/Input";

function Login({ handleLogin, isSending }) {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()

  return (
    <LoginRegistrationForm
      nameForm='signin'
      title='Рады видеть!'
      nameButton='Войти'
      isValid={isValid}
    >
    <fieldset className="form__input form__input_loginForm">
      <Input
        nameinput='signin'
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
        placeholder='pochta@yandex.ru'
      />
      <Input
        nameinput='signin'
        name='password'
        type='password'
        title='Пароль'
        value={values.password}
        isInputValid={isInputValid.password}
        error={errors.password}
        minLength = '3'
        maxLength='20'
        id="contact-password"
        placeholder='Введите пароль'
        onChange={handleChange}
      />
      </fieldset>
  </LoginRegistrationForm>
  );
}

export default Login;

