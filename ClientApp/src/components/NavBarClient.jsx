import React from 'react'
import { getUser } from './auth'

export function NavBarClient() {
  const user = getUser()
  const homePath = `HomePage_Client/${user.id}`
  const viewMyProfilePath = `ViewMyProfile_Client/${user.id}`
  const viewAllDogWalkersPath = `ViewAllDogWalkers_Client/${user.id}`
  const bookAWalk = `BookAWalk_Client/${user.id}`

  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-info" id="NavBar2">
      <a class="navbar-brand" href={homePath}>
        Furry Friends
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href={homePath}>
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={viewMyProfilePath}>
              View My Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={viewAllDogWalkersPath}>
              View All Dog Walkers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href={bookAWalk}>
              Book a Walk
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
