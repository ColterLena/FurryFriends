import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function SingleDogWalkerFromList(props) {
  const dogWalker = props.dogWalker
  return (
    <Link
      key={dogWalker.id}
      to={`/DogWalker/${props.dogWalker.id}`}
      className="list-group-item list-group-item-action"
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{dogWalker.fullName}</h5>
      </div>
      <p className="mb-1">Fee Per Walk: {dogWalker.feePerWalk}</p>
    </Link>
  )
}

export function ViewAllDogWalkers_Client() {
  const [dogWalkers, setDogWalkers] = useState([])

  useEffect(() => {
    fetch('/api/DogWalkers')
      .then(response => response.json())
      .then(apiData => {
        setDogWalkers(apiData)
      })
  }, [])

  return (
    <>
      <div className="container">
        {dogWalkers.map(dogWalker => (
          <SingleDogWalkerFromList key={dogWalker.id} dogWalker={dogWalker} />
        ))}
      </div>
    </>
  )
}
