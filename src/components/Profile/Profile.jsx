import LoginRegistrationForm from '../LoginRegistrationForm/LoginRegistrationForm';
import useFormValidation from '../../hooks/useFormValidation';
import './Profile.css';
import Input from '../Input/Input';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import { EmailReg } from '../../utils/constants';

function Profile({ handleUpdateUser, isOpenEdit, isSuccessful, handleButtonEditClick, outOfAccount }) {
  const [checkButton, setCheckButton] = useState(false);
  const { values, errors, isValid, isInputValid, handleChange, resetForm } = useFormValidation()
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [updateName, setUpdateName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);
  const [updateEmail, setUpdateEmail] = useState(currentUser.email);
  
  useEffect(() => {
    resetForm({ username: currentUser.name, email: currentUser.email })
  }, [resetForm, currentUser, isOpenEdit])
  
  function onSubmitEdite(evt) {
    evt.preventDefault()
      handleUpdateUser(values.username, values.email)
  }
  
  function checkName(evt) {
    const value = evt.target.value;
    setName(value);
    value === updateName ? setCheckButton(false) : setCheckButton(true)
  }

  function checkEmail(evt) {
    const value = evt.target.value;
    setEmail(value);
    value === updateEmail ? setCheckButton(false) : setCheckButton(true)
  }
     
  return (

    isOpenEdit ?

    <LoginRegistrationForm
      nameForm='profile-edit'
      title={`Привет, ${currentUser.name}!`}
      nameButton='Сохранить'
      isValid={isValid}
      onSubmit={onSubmitEdite}
      isSuccessful={isSuccessful}
      checkButton={checkButton}
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
          onChange={(evt) => {
            handleChange(evt)
            checkName(evt)}}
          placeholder='Введите имя'
        />
          
        <Input
           pattern={EmailReg}
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
           onChange={(evt) => {
            handleChange(evt)
            checkEmail(evt)}}
           placeholder='Введите электронную почту'
          /></>
      </fieldset>
      
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
          pattern={EmailReg}
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