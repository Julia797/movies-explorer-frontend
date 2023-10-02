import './Promo.css';
import { HashLink } from 'react-router-hash-link'

function Promo() {
  return (
    <section className="promo">
      <div className="promo__conteiner">
        <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <HashLink smooth to='#aboutProject' className="promo__link" href="#about-project">Узнать больше</HashLink>
      </div>
      <div className="landing__logo rotation"></div>
    </section>
  )
}

export default Promo;
