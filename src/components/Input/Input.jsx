
import './Input.css';

          //placeholder="Пароль"
function Input({ name, type, title, value, error, id, isInputValid, minLength, maxLength, onChange }) {
  

  return (
    <>
      <label className="form__label">
        <span className="form__input-span">{title}</span>
        <input
          type={type}
          id={id}
          //placeholder="Email"
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
    </>
  )   
}

export default Input;
