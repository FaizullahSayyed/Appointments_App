import {Component} from 'react'
import {v4} from 'uuid'

import AppointmentItem from '../AppointmentItem'

import './index.css'

class Appointments extends Component {
  state = {title: '', date: '', appointmentsList: [], starredOn: false}

  updateTitle = event => {
    this.setState({title: event.target.value})
  }

  updateDate = event => {
    this.setState({date: event.target.value})
  }

  addAppointment = event => {
    event.preventDefault()
    const {title, date} = this.state
    const newAppointment = {id: v4(), title, date, starred: false}
    this.setState(prevState => ({
      appointmentsList: [...prevState.appointmentsList, newAppointment],
      title: '',
      date: '',
    }))
  }

  updateButtonStatus = () => {
    this.setState(prevState => ({
      starredOn: !prevState.starredOn,
    }))
  }

  onClickUpdateAppointment = id => {
    this.setState(prevState => ({
      appointmentsList: prevState.appointmentsList.map(eachAppointment => {
        if (eachAppointment.id === id) {
          return {...eachAppointment, starred: !eachAppointment.starred}
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {title, date, starredOn, appointmentsList, starred} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="input-container">
            <div className="input-field-and-image-container">
              <div className="input-field-and-heading-container">
                <h1 className="main-heading">Add Appointment</h1>
                <form className="form-container">
                  <div className="title-input-container">
                    <label htmlFor="titleInput" className="input-label">
                      Title
                    </label>
                    <br />
                    <input
                      className="input-field"
                      type="text"
                      placeholder="Title"
                      onChange={this.updateTitle}
                      value={title}
                      id="titleInput"
                    />
                  </div>
                  <div className="date-input-container">
                    <label htmlFor="dateInput" className="input-label">
                      Date
                    </label>
                    <br />

                    <input
                      className="input-field"
                      type="date"
                      onChange={this.updateDate}
                      value={date}
                      id="dateInput"
                    />
                  </div>

                  <div>
                    <button
                      className="add-button"
                      type="button"
                      onClick={this.addAppointment}
                    >
                      {' '}
                      Add
                    </button>
                  </div>
                </form>
              </div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
                className="appointments-image"
              />
            </div>
          </div>
          <hr className="hr-line" />
          <div className="outer_list-container">
            <div className="star-button-container">
              <h1 className="list-heading">Appointments</h1>
              <div>
                <button
                  type="button"
                  className={starredOn ? 'button-clicked' : 'button-un-clicked'}
                  onClick={this.updateButtonStatus}
                >
                  Starred
                </button>
              </div>
            </div>
            <ul className="list-container">
              {starredOn
                ? appointmentsList.map(
                    eachAppointment =>
                      eachAppointment.starred && (
                        <AppointmentItem
                          key={eachAppointment.id}
                          appointmentDetails={eachAppointment}
                          updateAppointment={this.onClickUpdateAppointment}
                        />
                      ),
                  )
                : appointmentsList.map(eachAppointment => (
                    <AppointmentItem
                      key={eachAppointment.id}
                      appointmentDetails={eachAppointment}
                      updateAppointment={this.onClickUpdateAppointment}
                    />
                  ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
