import './Checkbox.css'

function Checkbox({ }) {
 


  return (
    <>
      <div className="checkbox-container">
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <span className="slider__subtitle">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;
