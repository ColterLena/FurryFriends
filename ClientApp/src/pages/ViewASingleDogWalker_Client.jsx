import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function ViewASingleDogWalker_Client() {
  const params = useParams()

  const id = params.id

  const [dogWalker, setDogWalker] = useState({
    fullName: '',
    email: '',
    homeAddress: '',
    feePerWalk: '',
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
    <div className="container">
      <h2>{dogWalker.fullName}</h2>
      <ul>
        <li>{dogWalker.email}</li>
        <li>{dogWalker.homeAddress}</li>
        <li>{dogWalker.feePerWalk}</li>
      </ul>
    </div>
  )
}
