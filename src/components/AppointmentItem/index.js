import {format} from 'date-fns'

import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, updateAppointment} = props
  const {title, date, starred, id} = appointmentDetails

  const updateStarred = () => {
    updateAppointment(id)
  }

  return (
    <li className="list-item">
      <div className="title-container">
        <p className="title">{title}</p>
        {starred ? (
          <button
            type="button"
            onClick={updateStarred}
            data-testid="star"
            className="star-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
              className="star-image"
              alt="star"
            />
          </button>
        ) : (
          <button
            type="button"
            onClick={updateStarred}
            data-testid="star"
            className="star-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"
              className="star-image"
              alt="star"
            />
          </button>
        )}
      </div>
      <p className="date-container">
        Date:{' '}
        {format(
          new Date(
            parseInt(date.slice(0, 4)),
            parseInt(date.slice(5, 7)),
            parseInt(date.slice(8, 10)),
          ),
          'dd MMMM yyyy, EEEE',
        )}
      </p>
    </li>
  )
}

export default AppointmentItem
