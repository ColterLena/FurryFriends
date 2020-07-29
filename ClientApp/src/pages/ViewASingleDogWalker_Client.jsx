import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function ViewASingleDogWalker_Client() {
  const params = useParams()

  const id = params.id

  const [dogWalker, setDogWalker] = useState({
    fullName: '',
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

  useEffect(() => {
    const fetchDogWalker = async () => {
      const response = await fetch(`/api/DogWalkers/${id}`)
      const apiData = await response.json()

      setDogWalker(apiData)
    }

    fetchDogWalker()
  }, [])

  return (
    <div className="container" id="SingleDogWalker">
      <h2>Dog Walker Profile</h2>
      <p>Name: {dogWalker.fullName}</p>
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
  )
}
