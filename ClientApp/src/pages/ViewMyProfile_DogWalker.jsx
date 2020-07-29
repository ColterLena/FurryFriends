import React, { useState, useEffect } from 'react'
import { getUser } from './auth'

export function ViewMyProfile_DogWalker() {
  const [dogWalker, setDogWalker] = useState({
    fullName: '',
    email: '',
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

  const user = getUser()

  useEffect(() => {
    fetch(`/api/DogWalkers/${user.id}`)
      .then(response => response.json())
      .then(apiData => {
        setDogWalker(apiData)
      })
  }, [])

  return (
    <>
      <div class="container" id="MyProfileDogWalker">
        <h2>My Profile</h2>
        <p>Name: {dogWalker.fullName}</p>
        <p>Email: {dogWalker.email}</p>
        <p>Home Address: {dogWalker.homeAddress}</p>
        <p>Fee Per Walk: {dogWalker.feePerWalk}</p>
        <p>About Me: {dogWalker.aboutMe}</p>
        <h5>Schedule</h5>
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
    </>
  )
}
