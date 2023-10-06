import './Checkbox.css'

function Checkbox({ }) {
 


  return (
    <>
      <div className="checkbox__container">
        <label className="checkbox__switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        <span className="checkbox__slider">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;
