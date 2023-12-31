import './AboutMe.css';
import foto from '../../images/about-mefoto.jpg'

function AboutMe() {
  return (
    <section className="about-me">
      <h2 className="about-me__brief">Студент</h2>
      <div className="about-me__conteiners">
        <div className="about-me__conteiner">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__job">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__history">Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет экономики СГУ. 
            У&nbsp;меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить. 
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;. После того, как прошёл курс по&nbsp;веб-разработке,
            начал заниматься фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.</p>
        <a className="about-me__github" href="https://github.com/Julia797" target="_blank" rel="noreferrer">Github</a>
      </div>
      <img src={foto} alt="аватар" className="about-me__foto"/>
      </div>
    </section>
  )
}

export default AboutMe;
