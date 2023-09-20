import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  
    
  return (
    <div className="not-found indent">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <a className="not-found__link">Назад</a>
    </div>
      
  );
}
    export default PageNotFound

    //<Link to="/" className="not-found__link">Назад</Link>