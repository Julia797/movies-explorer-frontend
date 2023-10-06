import LoginRegistrationForm from '../LoginRegistrationForm/LoginRegistrationForm';
import useFormValidation from '../../hooks/useFormValidation';
import './Profile.css';
import Input from '../Input/Input';
import { useState } from 'react';

function Profile({ handleRegister }) {
  const { values, errors, isValid, isInputValid, handleChange } = useFormValidation()
 
  const [isOpenEdit, setIsOpenEdit] = useState(false)

  function handleButtonEditClick() {
    setIsOpenEdit(true)
  }

  function onSubmitEdite(evt) {
    evt.preventDefault()
      setIsOpenEdit(true)
  }
   
  return (

    isOpenEdit ?

    <LoginRegistrationForm
      nameForm='profile-edit'
      title='Привет, Виталий!'
      nameButton='Сохранить'
      isValid={isValid}
      onSubmit={onSubmitEdite}
    >
      <fieldset className='form__input-profile'>
      <><Input
          nameinput='profile'
          name='username'
          type='text'
          title='Имя'
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          minLength='2'
          maxLength='40'
          id='email'
          onChange={handleChange}
          placeholder='Виталий' />
        <Input
           nameinput='profile'
           name='email'
           type='email'
           title='E-mail'
           value={values.email}
           isInputValid={isInputValid.email}
           error={errors.email}
           minLength='2'
           maxLength='40'
           id='email'
           onChange={handleChange}
           placeholder='pochta@yandex.ru' /></>
      </fieldset>
    </LoginRegistrationForm> 
  :
   
    <LoginRegistrationForm
      nameForm='profile'
      title='Привет, Виталий!'
      nameButton='Редактировать'
      onClick={handleButtonEditClick}
    >
      <fieldset className='form__input-profile'>
        <Input
          nameinput='profile'
          name='username'
          type='text'
          title='Имя'
          value={values.username}
          isInputValid={isInputValid.username}
          error={errors.username}
          minLength='2'
          maxLength='40'
          id='email'
          onChange={handleChange}
          placeholder='Виталий'
        />
        <Input
          nameinput='profile'
          name='email'
          type='email'
          title='E-mail'
          value={values.email}
          isInputValid={isInputValid.email}
          error={errors.email}
          minLength='2'
          maxLength='40'
          id='email'
          onChange={handleChange}
          placeholder='pochta@yandex.ru'
        />
       </fieldset>
    </LoginRegistrationForm>
  );
}


export default Profile;

