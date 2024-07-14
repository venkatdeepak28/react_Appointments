// Write your code here
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentItem from '../AppointmentItem'
import './index.css'

const appointmentArray = []

const starredArray = []

class Appointments extends Component {
  state = {
    nameValue: '',
    dateValue: '',
    givenArray: appointmentArray,
    isChecked: 'inactive',
  }

  getStarred = () => {
    const {isChecked, givenArray} = this.state
    const filteredArray = givenArray.filter(
      eachObj => eachObj.isStarred === true,
    )
    console.log(isChecked)
    if (isChecked === 'inactive') {
      this.setState({givenArray: filteredArray, isChecked: 'active'})
    } else {
      this.setState({givenArray: appointmentArray, isChecked: 'inactive'})
    }
  }

  changeStarred = id => {
    starredArray.map(eachObj => !eachObj.isStarred)
    this.setState(prevState => ({
      givenArray: prevState.givenArray.map(eachValue => {
        if (eachValue.id === id) {
          return {...eachValue, isStarred: !eachValue.isStarred}
        }
        return eachValue
      }),
    }))
  }

  changeName = event => {
    this.setState({nameValue: event.target.value})
  }

  changeDate = event => {
    this.setState({dateValue: event.target.value})
  }

  addAppointment = () => {
    const {nameValue, dateValue} = this.state
    const obj = {
      id: uuidv4(),
      name: nameValue,
      date: dateValue,
      isStarred: false,
    }
    starredArray.push(obj)
    this.setState(prevState => ({
      givenArray: [...prevState.givenArray, obj],
      nameValue: '',
      dateValue: '',
    }))
  }

  render() {
    const {nameValue, dateValue, givenArray} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div>
            <h1 className="main-heading">Add Appointment</h1>
            <div className="text-container">
              <div className="date-container">
                <label htmlFor="title">Title</label>
                <br />
                <input
                  className="input-el"
                  type="text"
                  value={nameValue}
                  onChange={this.changeName}
                  placeholder="Title"
                  id="title"
                />
                <br />
                <label htmlFor="date">Date</label>
                <br />
                <input
                  className="input-el"
                  type="date"
                  value={dateValue}
                  onChange={this.changeDate}
                  id="date"
                />
                <div>
                  <button
                    className="custom-btn"
                    type="submit"
                    onClick={this.addAppointment}
                  >
                    Add
                  </button>
                </div>
              </div>
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <div className="horizontal-el">
            <hr />
            <div className="heading-el">
              <h1 className="list-heading">Appointments</h1>
              <button className="star-btn" onClick={this.getStarred}>
                Starred
              </button>
            </div>
          </div>
          <ul className="list-prop">
            {givenArray.map(eachValue => (
              <AppointmentItem
                key={eachValue.id}
                givenValue={eachValue}
                changeStar={this.changeStarred}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
