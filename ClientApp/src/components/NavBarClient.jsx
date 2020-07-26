import React from 'react'

export function NavBarClient() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/HomePage_Client">
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
            <a class="nav-link" href="/HomePage_Client">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ViewMyProfile_Client">
              View My Profile
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ViewAllDogWalkers_Client">
              View All Dog Walkers
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="BookAWalk_Client">
              Book a Walk
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="ViewPhotos_Client">
              View Photos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
