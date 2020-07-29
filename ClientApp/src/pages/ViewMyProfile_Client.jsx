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
    <div class="container" id="MyProfileClient">
      <h2>My Profile</h2>
      <p>Name: {client.fullName}</p>
      <p>Email: {client.email}</p>
      <p>Home Address: {client.homeAddress}</p>
      <p>Dog Name: {client.dogName}</p>
      <p>Dog Breed: {client.dogBreed}</p>
      <p>About Me: {client.aboutMe}</p>
    </div>
  )
}
