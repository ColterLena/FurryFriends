import React, { useState, useEffect } from 'react'
import { getUser } from './auth'

export function ViewMyProfile_Client() {
  const [client, setClient] = useState({
    fullName: '',
    email: '',
    homeAddress: '',
    dogName: '',
    dogBreed: '',
    aboutMe: '',
  })

  const user = getUser()

  useEffect(() => {
    fetch(`/api/Clients/${user.id}`)
      .then(response => response.json())
      .then(apiData => {
        setClient(apiData)
      })
  }, [])

  return (
    <>
      <div class="container" id="CreateAnAccountForm">
        <h3>{client.fullName}</h3>
        <img src="http://placekitten.com/300/300" alt="An Animal" />
        <h5>Email</h5>
        <p>{client.email}</p>
        <h5>Home Address</h5>
        <p>{client.homeAddress}</p>
        <h5>Dog's Name</h5>
        <p>{client.dogName}</p>
        <h5>Dog's Breed</h5>
        <p>{client.dogBreed}</p>
        <h5>About Me</h5>
        <p>{client.aboutMe}</p>
      </div>
    </>
  )
}
