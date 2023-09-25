import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project">
      <h2 className="about-project__brief">О проекте</h2>
      <div className="about-project__conteiners">
        <div className="about-project__conteiner">
          <h3 className="about-project__title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__conteiner">
          <h3 className="about-project__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__conteiners">
        <div className="about-project__conteiner about-project__conteiner_time1">
          <h3 className="about-project__time">1 неделя</h3>
          <p className="about-project__text">Back-end</p>
        </div>
        <div className="about-project__conteiner about-project__conteiner_time4">
          <h3 className="about-project__time about-project__time_gray">4 недели</h3>
          <p className="about-project__text">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
