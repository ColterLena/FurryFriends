import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { authHeader, getUser } from './auth'

function SingleDogWalkerFromList(props) {
  const dogWalker = props.dogWalker
  return (
    <option key={dogWalker.id}>
      {dogWalker.fullName}:{dogWalker.email}
    </option>
  )
}

export function BookAWalk_Client() {
  const [dogWalkers, setDogWalkers] = useState([])
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()
  useEffect(() => {
    fetch('/api/DogWalkers')
      .then(response => response.json())
      .then(apiData => {
        setDogWalkers(apiData)
      })
  }, [])

  const [newBooking, setNewBooking] = useState({
    dogWalkerFullName: '',
    dogWalkerEmail: '',
    clientFullName: '',
    clientEmail: '',
    clientPhoneNumber: '',
    dayOfBooking: '',
    timeOfBooking: '',
    pickUpAddress: '',
    pickUpInstructions: '',
  })

  const user = getUser()
  const handleFormSubmit = async event => {
    event.preventDefault()

    const response = await fetch('/api/Bookings', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newBooking),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
      return
    } else {
      history.push(`/HomePage_Client/${user.id}`)
      console.log(newBooking)
    }
  }

  const handleSelectChange = event => {
    const value = event.target.value

    const splitValue = value.split(':')

    const updatedBooking = {
      ...newBooking,
      dogWalkerFullName: splitValue[0],
      dogWalkerEmail: splitValue[1],
    }

    setNewBooking(updatedBooking)
  }

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedBooking = { ...newBooking, [fieldName]: value }

    setNewBooking(updatedBooking)
  }

  return (
    <>
      <div className="container" id="CreateAnAccountForm">
        <form onSubmit={handleFormSubmit}>
          <div className="container">
            {errorMessage && (
              <div className="alert alert-danger" role="alert">
                <h5>{errorMessage}</h5>
              </div>
            )}
          </div>
          <div className="form-row" id="CreateAnAccountDropDown">
            <label for="exampleFormControlSelect1">
              Which Walker Would You Like to Use?
            </label>
            <select
              className="form-control"
              id="dogWalkerFullName"
              onChange={handleSelectChange}
            >
              <option>Please Select One Dog Walker</option>
              {dogWalkers.map(dogWalker => (
                <SingleDogWalkerFromList
                  key={dogWalker.id}
                  dogWalker={dogWalker}
                />
              ))}
            </select>
          </div>
          <div className="form-group">
            <label for="clientFullName">What is your full name?</label>
            <input
              type="text"
              className="form-control"
              id="clientFullName"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="email">What is the best email to reach out at?</label>
            <input
              type="text"
              className="form-control"
              id="clientEmail"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="PhoneNumber">
              What is the best phone number to reach you at?
            </label>
            <input
              type="text"
              className="form-control"
              id="clientPhoneNumber"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="DayOfAppointment">
              What Day Would You Like to Book the Appointment?
            </label>
            <input
              type="text"
              className="form-control"
              id="dayOfBooking"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="TimeOfAppointment">
              What Time Would You Like to Book the Appointment?
            </label>
            <input
              type="text"
              className="form-control"
              id="timeOfBooking"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="Address">What is the Pick Up Address?</label>
            <input
              type="text"
              className="form-control"
              id="pickUpAddress"
              placeholder="1234 Main St, Tampa, FL 33629"
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label for="inputZip">What Are Your Pick-Up Instructions?</label>
            <input
              type="text"
              className="form-control"
              id="pickUpInstructions"
              onChange={handleFieldChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Book a Walk
          </button>
        </form>
      </div>
    </>
  )
}
