import { Link } from 'react-router-dom';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__brief">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__lists">
          <li className="portfolio__list">
            <Link to={"https://github.com/Julia797/react-mesto-api-full-gha"} className="portfolio__link" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Статичный сайт</p>
              <div class="portfolio__button"/></Link>
          </li> 
          <li className="portfolio__list">
          <Link to={"https://github.com/Julia797/russian-travel"} className="portfolio__link" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Адаптивный сайт</p>
              <div class="portfolio__button"/></Link>
          </li> 
          <li className="portfolio__list">
          <Link to={"https://github.com/Julia797/how-to-learn"} className="portfolio__link portfolio__link_end"  target="_blank" rel="noreferrer">
              <p className="portfolio__site">Одностраничное приложение</p>
              <div class="portfolio__button"/></Link>
          </li> 
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;
