import { useLocation } from 'react-router-dom';
import './MoviesCard.css';


function MoviesCard({ name, src, trailerLink, duration }) {
  const { pathname } = useLocation();
  
  return (
    <li className="element__item">
      <a className="element__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="element__foto" src={src} alt={name} />
      </a>
      
      <div className="element__info">
        <h2 className="element__title">{name}</h2>
        <div className="element__save-del">
        {pathname === '/movies' ?
          <button className="element__button element__button_likes" type="button" aria-label="лайк"  />
        :
          <button className="element__button element__button_delete" type="button" aria-label="удалить"  />
        }
        </div>
        </div>  
        <span className='element__duration'>{duration}</span>
      
    </li>
  )
}

export default MoviesCard;
