import './Input.css';
         
function Input({ nameinput, name, placeholder, type, title, value, error, id, isInputValid, minLength, maxLength, onChange, disabled }) {
  
  return (
   <>
      {nameinput === 'profile' ?
        <>
         <label className="input input_profile">
            <span className="form__input-span">{title}</span>
            <input
             type={type}
             id={id}
             placeholder={placeholder}
             className={`form__item form__item_profile form__item_type_loginRegistrationForm form__item_type_${name} 
              ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
             name={name}
             required
             disabled={disabled}
             minLength={minLength || ''}
             maxLength={maxLength || ''}
             value={value ? value : ''}
             onChange={onChange} />
         </label>
       </>
    :
      <label className="input">
        <span className="form__input-span form__input-span_film">{title}</span>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`form__item form__item_type_loginRegistrationForm form__item_type_${name} 
            ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
          name={name}
          required
          minLength={minLength || ''}
          maxLength={maxLength || ''}
          value={value ? value : ''} 
          onChange={onChange}
        />
        <span className={`form__input-error ${name === 'username' ? 'name-input-error' : ''}`} >{error}</span>
      </label>
    }
    </>
  )   
}

export default Input;
