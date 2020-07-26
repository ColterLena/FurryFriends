import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { authHeader } from './auth'

export function CreateAnAccount_Client() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [newClient, setNewClient] = useState({
    fullName: '',
    email: '',
    password: '',
    homeAddress: '',
    dogName: '',
    dogBreed: '',
    aboutMe: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id

    const updatedClient = { ...newClient, [fieldName]: value }

    setNewClient(updatedClient)
  }

  const handleFormSubmit = async event => {
    event.preventDefault()

    const response = await fetch('/api/Clients', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newClient),
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
      <h2>Create a New Client Account</h2>
      <div class="container">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            <h5>{errorMessage}</h5>
          </div>
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div class="form-group">
          <label for="FullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={newClient.fullName}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="Email">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={newClient.email}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="Password">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            value={newClient.password}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="homeAddress">Home Address</label>
          <input
            type="text"
            className="form-control"
            id="homeAddress"
            value={newClient.homeAddress}
            onChange={handleFieldChange}
            placeholder="1234 Main St Tampa, FL 33629"
          />
        </div>
        <div class="form-group">
          <label for="DogName">What Is Your Dog's Name?</label>
          <input
            type="text"
            className="form-control"
            id="dogName"
            value={newClient.dogName}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="DogBreed">What Breed Is Your Dog?</label>
          <input
            type="text"
            className="form-control"
            id="dogBreed"
            value={newClient.dogBreed}
            onChange={handleFieldChange}
          />
        </div>
        <div class="form-group">
          <label for="AboutMe">
            Please Provide a Brief "About Me" Description for Your Profile
          </label>
          <input
            type="text"
            className="form-control"
            id="aboutMe"
            value={newClient.aboutMe}
            onChange={handleFieldChange}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Create An Account
        </button>
      </form>
    </div>
  )
}
