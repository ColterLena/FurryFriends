import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import { recordAuthentication, getUser } from './auth'

export function DogWalkerLogIn() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [logInDogWalker, setLogInDogWalker] = useState({
    email: '',
    password: '',
  })

  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id
    const updatedUser = { ...logInDogWalker, [fieldName]: value }
    setLogInDogWalker(updatedUser)
  }

  const handleFormSubmit = event => {
    event.preventDefault()
    fetch('/api/DogWalkerSessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(logInDogWalker),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          recordAuthentication(apiResponse)
          const user = getUser()
          window.location = `/HomePage_DogWalker/${user.id}`
        }
      })
  }

  return (
    <div className="Container" id="DogWalkerLogInForm">
      <h2 class="LogInHeader">Dog Walker Log In</h2>
      <div className="container">
        {errorMessage && (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="container">
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={logInDogWalker.email}
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={logInDogWalker.password}
                onChange={handleFieldChange}
              />
            </div>
          </div>
          <button type="submit" class="btn btn-primary">
            Log In
          </button>
        </div>
      </form>
    </div>
  )
}
