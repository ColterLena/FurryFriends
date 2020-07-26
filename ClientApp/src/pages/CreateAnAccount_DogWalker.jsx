import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { authHeader } from './auth'

export function CreateAnAccount_DogWalker() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newDogWalker, setNewDogWalker] = useState({
    fullName: '',
    email: '',
    password: '',
    homeAddress: '',
    feePerWalk: '',
    aboutMe: '',
    monday: '',
    tuesday: '',
    wednesday: '',
    thursday: '',
    friday: '',
    saturday: '',
    sunday: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedDogWalker = { ...newDogWalker, [fieldName]: value }

    setNewDogWalker(updatedDogWalker)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    const response = await fetch('/api/DogWalkers', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newDogWalker),
    })

    if (response.status === 401) {
      setErrorMessage('Not Authorized')
      return
    }

    const apiResponse = await response.json()

    if (apiResponse.errors) {
      setErrorMessage(Object.values(apiResponse.errors).join(' '))
    } else {
      history.push('/')
    }
  }
  return (
    <div class="container" id="CreateAnAccountForm">
      <h2>Create a New Dog Walker Account</h2>
      <div class="container">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            <h5>{errorMessage}</h5>
          </div>
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={newDogWalker.fullName}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={newDogWalker.email}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={newDogWalker.password}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="homeAddress">Home Address</label>
          <input
            type="text"
            className="form-control"
            id="homeAddress"
            value={newDogWalker.homeAddress}
            onChange={handleFieldChange}
            placeholder="1234 Main St Tampa, FL 33629"
          />
        </div>
        <div class="form-group">
          <label for="feePerWalk">What Is Your Fee Per Walk?</label>
          <input
            type="text"
            className="form-control"
            id="feePerWalk"
            value={newDogWalker.feePerWalk}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="aboutMe">
            Please Provide a Brief "About Me" Description for Your Profile
          </label>
          <input
            type="text"
            className="form-control"
            id="aboutMe"
            value={newDogWalker.aboutMe}
            onChange={handleFieldChange}
          />
        </div>
        <h4>When Can You Provide Dog Walking Services?</h4>
        <div class="form-group">
          <label for="monday">Monday</label>
          <input
            type="text"
            className="form-control"
            id="monday"
            value={newDogWalker.monday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="tuesday">Tuesday</label>
          <input
            type="text"
            className="form-control"
            id="tuesday"
            value={newDogWalker.tuesday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="wednesday">Wednesday</label>
          <input
            type="text"
            className="form-control"
            id="wednesday"
            value={newDogWalker.wednesday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="thursday">Thursday</label>
          <input
            type="text"
            className="form-control"
            id="thursday"
            value={newDogWalker.thursday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="friday">Friday</label>
          <input
            type="text"
            className="form-control"
            id="friday"
            value={newDogWalker.friday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="saturday">Saturday</label>
          <input
            type="text"
            className="form-control"
            id="saturday"
            value={newDogWalker.saturday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <div class="form-group">
          <label for="sunday">Sunday</label>
          <input
            type="text"
            className="form-control"
            id="sunday"
            value={newDogWalker.sunday}
            onChange={handleFieldChange}
            placeholder="12:00 AM - 12:00 PM"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Create An Account
        </button>
      </form>
    </div>
  )
}
