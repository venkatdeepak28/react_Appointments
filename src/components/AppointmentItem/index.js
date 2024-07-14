// Write your code here
import {format} from 'date-fns'
import './index.css'

const AppointmentItem = props => {
  let star
  const {givenValue, changeStar} = props
  const {id, name, date, isStarred} = givenValue
  const dateValue = format(new Date(date), 'dd MMMM yyyy, EEEE')
  const changeStarred = () => {
    changeStar(id)
  }
  if (isStarred) {
    star =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
  } else {
    star =
      'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'
  }
  return (
    <li className="list-el">
      <div className="appointment-container">
        <p className="list-heading">{name}</p>
        <button
          className="list-btn"
          type="submit"
          onClick={changeStarred}
          testid="star"
        >
          <img className="star-el" src={star} alt="star" />
        </button>
      </div>
      <p>Date: {dateValue}</p>
    </li>
  )
}

export default AppointmentItem
