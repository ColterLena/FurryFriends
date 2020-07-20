import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { NavBarClient } from './components/NavBarClient'
import { NavBarDogWalker } from './components/NavBarDogWalker'
import { HomePage } from './pages/HomePage'
import { LogIn } from './pages/LogIn'
import { CreateAnAccount } from './pages/CreateAnAccount'
import { BookAWalkClient } from './pages/BookAWalkClient'
import { ViewProfileClient } from './pages/ViewProfileClient'
import { ViewProfileDogWalker } from './pages/ViewProfileDogWalker'
import { UploadPhotosDogWalker } from './pages/UploadPhotosDogWalker'
import { ViewPhotosClient } from './pages/ViewPhotosClient'
import { CalendarDogWalker } from './pages/CalendarDogWalker'
import { ViewAllDogWalkersClient } from './pages/ViewAllDogWalkersClient'
import './custom.scss'

export function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <div class="container">
            <NavBar />
            <HomePage />
          </div>
        </Route>
        <Route exact path="/LogIn">
          <LogIn />
        </Route>
        <Route exact path="/CreateAnAccount">
          <CreateAnAccount />
        </Route>
        <Route path="/Client">
          <NavBarClient />
          <HomePage />
        </Route>
        <Route path="/DogWalker">
          <NavBarDogWalker />
          <HomePage />
        </Route>
        <Route exact path="/BookAWalkClient">
          <BookAWalkClient />
        </Route>
        <Route exact path="/ViewProfileClient">
          <ViewProfileClient />
        </Route>
        <Route exact path="/ViewProfileDogWalker">
          <ViewProfileDogWalker />
        </Route>
        <Route exact path="/UploadPhotosDogWalker">
          <UploadPhotosDogWalker />
        </Route>
        <Route exact path="/ViewPhotosClient">
          <ViewPhotosClient />
        </Route>
        <Route exact path="/CalendarDogWalker">
          <CalendarDogWalker />
        </Route>
        <Route exact path="/ViewAllDogWalkersClient">
          <ViewAllDogWalkersClient />
        </Route>
      </Switch>
    </>
  )
}
