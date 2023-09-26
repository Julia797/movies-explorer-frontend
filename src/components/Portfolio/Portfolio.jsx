import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__brief">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__lists">
          <li className="portfolio__list">
            <a className="portfolio__link" href="https://github.com/Julia797/react-mesto-auth" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Статичный сайт</p>
              <button className="portfolio__button" type="button"></button>
            </a>
          </li> 
          <li className="portfolio__list">
            <a className="portfolio__link" href="https://github.com/Julia797/react-mesto-auth" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Адаптивный сайт</p>
              <button className="portfolio__button" type="button"></button>
            </a>
          </li> 
          <li className="portfolio__list">
            <a className="portfolio__link portfolio__link_end" href="https://github.com/Julia797/react-mesto-auth" target="_blank" rel="noreferrer">
              <p className="portfolio__site">Одностраничное приложение</p>
              <button className="portfolio__button" type="button"></button>
            </a>
          </li> 
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;
