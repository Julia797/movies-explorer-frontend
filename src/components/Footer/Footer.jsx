import './Footer.css';

function Footer() {
  return (
    <section className="footer">
      <h3 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h3>
      <div className="footer__conteiner">
        <p className="footer__copyright">&copy; 2023</p>
        <nav className="footer__navigation">
          <a className="footer__link" href="https://practicum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/Julia797" target="_blank" rel="noreferrer">Github</a>
        </nav>
      </div>
    </section>
  )
}

export default Footer;