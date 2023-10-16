import LoginRegistrationForm from "../LoginRegistrationForm/LoginRegistrationForm";
import useFormValidation from "../../hooks/useFormValidation";
import './Register.css';
import Input from "../Input/Input";

function Register({ handleRegister }) {
  const { values, errors, isValid, isInputValid, handleChange, resetForm, setIsErrorAll } = useFormValidation()

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
          onChange={(evt) => {
            handleChange(evt)
            setIsErrorAll(false)
          }}
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
          minLength="2"
          maxLength="40"
          id="email"
          onChange={(evt) => {
            handleChange(evt)
            setIsErrorAll(false)
          }}
          placeholder='Введите электронную почту'
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
          onChange={(evt) => {
            handleChange(evt)
            setIsErrorAll(false)
          }}
          placeholder='Введите пароль'
        />
      </fieldset>
    </LoginRegistrationForm>
  );
}

export default Register;

