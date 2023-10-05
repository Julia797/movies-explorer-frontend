
import './Input.css';

         
function Input({ nameinput, name, placeholder, type, title, value, error, id, isInputValid, minLength, maxLength, onChange }) {
  

  return (

   <>
     {nameinput === 'profile' ?

    
    <>
      <label className="form__labelProfile">
        <span className="form__input-span">{title}</span>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`form__itemProfile form__item_type_loginRegistrationForm form__item_type_${name} ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
          name={name}
          required
          minLength={minLength || ''}
          maxLength={maxLength || ''}
          value={value ? value : ''}
          onChange={onChange} />
      </label>
    </>
     
    :
      <label className="form__label ">
        <span className="form__input-span form__input-span_film">{title}</span>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          className={`form__item form__item_type_loginRegistrationForm form__item_type_${name} ${isInputValid === undefined || isInputValid ? '' : 'form__item_type_error'}`}
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
