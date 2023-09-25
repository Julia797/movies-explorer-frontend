import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__brief">Портфолио</h2>
      <nav className="portfolio__navigation">
        <ul className="portfolio__lists">
          <li className="portfolio__list">
            <a className="portfolio__link" href="https://github.com/Julia797/how-to-learn" target="_blank" rel="noreferrer">Статичный сайт</a>
            <button className="portfolio__button" type="button"></button>
          </li> 
          <li className="portfolio__list">
            <a className="portfolio__link" href="https://github.com/Julia797/russian-travel" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            <button className="portfolio__button" type="button"></button>
          </li> 
          <li className="portfolio__list">
            <a className="portfolio__link" href="https://github.com/Julia797/react-mesto-auth" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            <button className="portfolio__button" type="button"></button>
          </li> 
        </ul>
      </nav>
    </section>
  )
}

export default Portfolio;
