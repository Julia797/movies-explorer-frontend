import './AboutProject.css';

function AboutProject() {
  return (
    <section className="aboutProject">
      <h2 className="aboutProject__brief">О проекте</h2>
      <div className="aboutProject__conteiners">
        <div className="aboutProject__conteiner">
          <h3 className="aboutProject__title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__conteiner">
          <h3 className="aboutProject__title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__conteiners">
        <div className="aboutProject__conteiner aboutProject__conteiner_time1">
          <h3 className="aboutProject__time">1 неделя</h3>
          <p className="aboutProject__text">Back-end</p>
        </div>
        <div className="aboutProject__conteiner aboutProject__conteiner_time4">
          <h3 className="aboutProject__time aboutProject__time_gray">4 недели</h3>
          <p className="aboutProject__text">Front-end</p>
        </div>
      </div>
    </section>
  )
}

export default AboutProject;
