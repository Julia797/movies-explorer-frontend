import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Register.css';
import Input from "../Input/Input";
import { EmailReg } from "../../utils/constants";

function Register({ handleRegister, isErrorAll }) {
  const { values, errors, isValid, isInputValid, handleChange, resetForm } = useFormValidation()

  function handleSubmit(evt) {
    evt.preventDefault()
    handleRegister(values.username, values.email, values.password, resetForm)
  }
  return (
    <LoginRegistrationForm
      nameForm='signup'
      title='Добро пожаловать!'
      nameButton='Зарегистрироваться'
      isValid={isValid}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isErrorAll={isErrorAll}
    >
      <fieldset className="form__input form__input_registrationForm">
        <Input
          nameinput='signup'
          name='username'
          type='text'
          title='Имя'
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          minLength="2"
          maxLength="40"
          id="username"
          onChange={handleChange}
          placeholder='Введите имя'
        />
        <Input
          nameinput='signup'
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          id="email"
          onChange={handleChange}
          placeholder='Введите электронную почту'
          pattern={EmailReg}
        />
        <Input
          nameinput='signup'
          name='password'
          type='password'
          title='Пароль'
          value={values.password}
          isInputValid={isInputValid.password}
          error={errors.password}
          minLength = '3' 
          maxLength='20'
          id="contact-password"
          onChange={handleChange}
          placeholder='Введите пароль'
        />
      </fieldset>
    </LoginRegistrationForm>
  );
}

export default Register;

