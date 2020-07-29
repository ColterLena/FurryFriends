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
      <div class="container" id="CreateAnAccountForm">
        <h3>{dogWalker.fullName}</h3>
        <img src="http://placekitten.com/300/300" alt="An Animal" />
        <h5>Email</h5>
        <p>{dogWalker.email}</p>
        <h5>Fee Per Walk</h5>
        <p>{dogWalker.feePerWalk}</p>
        <h5>About Me</h5>
        <p>{dogWalker.aboutMe}</p>
        <h5></h5>
        <h5>Work Availability Schedule</h5>
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
