import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import { addMovie } from '../../utils/MainApi';
import { useEffect } from 'react';
import { useState } from 'react';


function MoviesCard({ data, src, trailerLink, handleDeleteMovie, handleMovieLike }) {
  const { pathname } = useLocation();
  const [isLiked, setIsLiked] = useState(false)

  /*useEffect(() => {
    if (pathname === '/movies')
      setClick(saveMovies.some(element => data.id === element.movieId))
  }, [saveMovies, setClick, pathname, data.id])

  const handleLikeClick = () => {
    if (saveMovies.some(element => data.id === element.movieId)) {
      setClick(true)
      addMovie(data)
    } else {
      setClick(false)
      addMovie(data)
    }
  }*/
  
  const handleLikeClick = () => {
    if (!isLiked) {
      handleMovieLike(data)
      setIsLiked(true)
    } else {
      handleMovieLike(data)
      setIsLiked(false)
    }
  }
  //onClick={handleDeleteMovie(data._id)}

  
  function convertToTime(number) {
    const hours = Math.floor(number / 60)
    const minutes = number % 60
    return (`${hours}ч ${minutes < 10 ? '0' : ''}${minutes}м`)
  }
  
  return (
    <li className="element__item">
      <a className="element__link" href={trailerLink} target="_blank" rel="noreferrer">
        <img className="element__foto" src={src} alt={data.nameRU} />
      </a>
      
      <div className="element__info">
        <h2 className="element__title">{data.nameRU}</h2>
        <div className="element__save-del">
        {pathname === '/movies' ?
          <button className={`element__button element__button_likes ${isLiked ? 'element__button_likesActive' : ''}`} onClick={handleLikeClick} type="button" aria-label="лайк"  />
        :
          <button className="element__button element__button_delete" type="button" onClick={() => handleDeleteMovie(data._id)} aria-label="удалить"  />
        }
        </div>
        </div>  
        <span className='element__duration'>{convertToTime(data.duration)}</span>
      
    </li>
  )
}

export default MoviesCard;
