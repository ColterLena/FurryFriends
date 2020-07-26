import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

export function ViewASingleClient_DogWalker() {
  const params = useParams()

  const id = params.id

  const [client, setClient] = useState({
    fullName: '',
    email: '',
    homeAddress: '',
    aboutMe: '',
  })

  useEffect(() => {
    const fetchClient = async () => {
      const response = await fetch(`/api/clients/${id}`)
      const apiData = await response.json()

      setClient(apiData)
    }

    fetchClient()
  }, [])

  return (
    <div className="container">
      <h2>{client.fullName}</h2>
      <ul>
        <li>{client.email}</li>
        <li>{client.homeAddress}</li>
        <li>{client.aboutMe}</li>
      </ul>
    </div>
  )
}
