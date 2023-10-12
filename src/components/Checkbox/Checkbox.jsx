import './Checkbox.css'

function Checkbox({ isChecked, setIsChecked }) {
 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <div className="checkbox">
        <label className="checkbox__switch">
          <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
          <span className="checkbox__sl round"></span>
        </label>
        <span className="checkbox__slider">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;