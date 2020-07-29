import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { recordAuthentication, getUser } from './auth'

export function ClientLogIn() {
  const history = useHistory()
  const [errorMessage, setErrorMessage] = useState()
  const [logInClient, setLogInClient] = useState({
    email: '',
    password: '',
  })
  const handleFieldChange = event => {
    const value = event.target.value
    const fieldName = event.target.id
    const updatedUser = { ...logInClient, [fieldName]: value }
    setLogInClient(updatedUser)
  }
  const handleFormSubmit = event => {
    event.preventDefault()
    fetch('/api/ClientSessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(logInClient),
    })
      .then(response => response.json())
      .then(apiResponse => {
        if (apiResponse.status === 400) {
          setErrorMessage(Object.values(apiResponse.errors).join(' '))
        } else {
          recordAuthentication(apiResponse)
          const user = getUser()
          window.location = `/HomePage_Client/${user.id}`
        }
      })
  }
  return (
    <div className="Container" id="LogInForm">
      <h2 class="LogInHeader">Client Log In</h2>
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
                value={logInClient.email}
                onChange={handleFieldChange}
              />
            </div>
            <div className="form-group col-md-6">
              <label for="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={logInClient.password}
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
