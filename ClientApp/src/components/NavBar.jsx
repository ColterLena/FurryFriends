import React from 'react'

export function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-info" id="NavBar1">
      <a class="navbar-brand" href="/">
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
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/ClientLogIn">
              Client Log In
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/DogWalkerLogIn">
              Dog Walker Log In
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/CreateAnAccount_Client">
              Create a Client Account
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/CreateAnAccount_DogWalker">
              Create a Dog Walker Account
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
