import { Link } from 'react-router-dom';
import './HeaderPopup.css';
function HeaderPopup({ isOpen, onClose, setIsOpen }) {

  function onClickLink() {
    setIsOpen(false) 
  }
  
  return (
    <>
      <div className={`headerPopup ${isOpen && 'headerPopup_opened'}`}>
        <div className='headerPopup__container'>
          <button
            className='headerPopup__btn-close'
            type='button'
            aria-label='закрыть'
            onClick={onClose} />
          <div className='headerPopup__navigations'>
            <ul className='headerPopup__navigation'>
              <li><Link to={'/'} className='headerPopup__title' onClick={onClickLink}>Главная</Link></li>
              <li><Link to={'/movies'} className='headerPopup__title' onClick={onClickLink}>Фильмы</Link></li>
              <li><Link to={'/saved-movies'} className='headerPopup__title'onClick={onClickLink}>Сохранённые фильмы</Link></li>
            </ul>
            <Link to={'/profile'} className='headerPopup__linkAcc' onClick={onClose}>Аккаунт <div className='headerPopup__account'></div></Link>
          </div>
        </div>
      </div>  
    </>
  )
}

export default HeaderPopup
