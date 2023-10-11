/* eslint-disable react-hooks/rules-of-hooks */
import LoginRegistrationForm from '../LoginRegistrationForm/LoginRegistrationForm';
import useFormValidation from '../../hooks/useFormValidation';
import './Profile.css';
import Input from '../Input/Input';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext } from 'react';
import { useEffect } from 'react';
//

function Profile({ handleUpdateUser, isOpenEdit, setIsOpenEdit, handleButtonEditClick, outOfAccount }) {
  const { values, errors, isValid, isInputValid, handleChange, resetForm } = useFormValidation()
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    resetForm({ username: currentUser.name, email: currentUser.email })
  }, [resetForm, currentUser, isOpenEdit])

  
  console.log(CurrentUserContext);
  function onSubmitEdite(evt) {
    evt.preventDefault()
      handleUpdateUser(values.username, values.email)
  }

   
  return (

    isOpenEdit ?

    <LoginRegistrationForm
      nameForm='profile-edit'
      title={`Привет, ${currentUser.name}!`}
      nameButton='Сохранить'
      isValid={isValid}
      onSubmit={onSubmitEdite}
    >
      <fieldset className='profile profile_edit'>
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
          id='username'
          onChange={handleChange}
          placeholder='Введите имя'
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
           placeholder='Введите электронную почту'
        /></>
      </fieldset>
      <span className='error-server'></span> 
      </LoginRegistrationForm>
  :
   
    <LoginRegistrationForm
      nameForm='profile'
      title={`Привет, ${currentUser.name}!`}
      nameButton='Редактировать'
      onSubmit={handleButtonEditClick}
      outOfAccount={outOfAccount}
    >
      <fieldset className='profile'>
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
          id='username'
          onChange={handleChange}
          placeholder='Введите имя'
          disabled={!isOpenEdit}
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
          placeholder='Введите электронную почту'
          disabled={!isOpenEdit}
        />
       </fieldset>
    </LoginRegistrationForm>
  );
}


export default Profile;

