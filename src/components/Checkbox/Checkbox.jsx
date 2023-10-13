import './Checkbox.css'

function Checkbox({ isChecked, setIsChecked, searchForMoviescheckbox, checked }) {
 
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked)
    searchForMoviescheckbox()
  }
   
  return (
    <>
      <div className="checkbox">
        <label className="checkbox__switch">
          <input type="checkbox" checked={isChecked || checked} onChange={handleCheckboxChange} />
          <span className="checkbox__sl round"></span>
        </label>
        <span className="checkbox__slider">Короткометражки</span>
      </div>
    </>
  )
}

export default Checkbox;