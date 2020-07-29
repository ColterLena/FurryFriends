import React from 'react'
import { getUser } from './auth'

export function NavBarDogWalker() {
  const user = getUser()
  const homePath = `HomePage_DogWalker/${user.id}`
  const viewMyProfilePath = `ViewMyProfile_DogWalker/${user.id}`
  const calendarPath = `Calendar_DogWalker/${user.id}`
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
            <a class="nav-link" href={calendarPath}>
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
