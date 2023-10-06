import './Checkbox.css'

function Checkbox({ }) {
 


  return (
    <>
      <div className="checkbox">
        <label className="checkbox__switch">
          <input type="checkbox"></input>
          <span className="checkbox__sl round"></span>
        </label>
        <span className="checkbox__slider">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;
