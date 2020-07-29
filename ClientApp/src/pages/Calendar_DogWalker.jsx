import React, { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getUser, authHeader } from './auth'

export function Calendar_DogWalker() {
  const [errorMessage, setErrorMessage] = useState()
  const history = useHistory()

  const params = useParams()

  const id = params.id

  const [dogWalker, setDogWalker] = useState({
    fullName: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  })

  useEffect(() => {
    const fetchDogWalker = async () => {
      const response = await fetch(`/api/DogWalkers/${id}`)
      const apiData = await response.json()

      setDogWalker(apiData)
    }

    fetchDogWalker()
  }, [])

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedDogWalker = { ...dogWalker, [fieldName]: value }

    setDogWalker(updatedDogWalker)
  }

  const handleFormSubmit = event => {
    fetch(`/api/DogWalkers/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(dogWalker),
    })
      .then(response => {
        return response.json()
      })
      .then(apiData => {
        console.log(apiData)
      })
  }

  return (
    <>
      <div class="container">
        <h2>Work Availability Schedule for {dogWalker.fullName}</h2>
        <ul>
          <li>Monday: {dogWalker.monday}</li>
          <li>Tuesday: {dogWalker.tuesday}</li>
          <li>Wednesday: {dogWalker.wednesday}</li>
          <li>Thursday: {dogWalker.thursday}</li>
          <li>Friday: {dogWalker.friday}</li>
          <li>Saturday: {dogWalker.saturday}</li>
          <li>Sunday: {dogWalker.sunday}</li>
        </ul>
      </div>
      <p></p>
      <div class="container">
        <h3>Please Submit the Form Below to Change Your Work Schedule</h3>
        <div class="container">
          {errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label htmlFor="monday">Monday</label>
            <input
              type="text"
              className="form-control"
              id="monday"
              value={dogWalker.monday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tuesday">Tuesday</label>
            <input
              type="text"
              className="form-control"
              id="tuesday"
              value={dogWalker.tuesday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="wednesday">Wednesday</label>
            <input
              type="text"
              className="form-control"
              id="wednesday"
              value={dogWalker.wednesday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="thursday">Thursday</label>
            <input
              type="text"
              className="form-control"
              id="thursday"
              value={dogWalker.thursday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="friday">Friday</label>
            <input
              type="text"
              className="form-control"
              id="friday"
              value={dogWalker.friday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="saturday">Saturday</label>
            <input
              type="text"
              className="form-control"
              id="saturday"
              value={dogWalker.saturday}
              onChange={handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="sunday">Sunday</label>
            <input
              type="text"
              className="form-control"
              id="sunday"
              value={dogWalker.sunday}
              onChange={handleFieldChange}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Change Schedule
          </button>
        </form>
      </div>
    </>
  )
}
