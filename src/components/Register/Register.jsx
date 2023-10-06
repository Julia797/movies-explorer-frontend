import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Register.css';
import Input from "../Input/Input";

function Register({ handleRegister }) {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()
  
   return (
    <LoginRegistrationForm
      nameForm='signup'
      title='Добро пожаловать!'
      nameButton='Зарегистрироваться'
      isValid={isValid}
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
          id="email"
          onChange={handleChange}
          placeholder='Виталий'
        />
        <Input
          nameinput='signup'
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
          nameinput='signup'
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

export default Register;

