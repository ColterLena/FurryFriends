import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { NavBarClient } from './components/NavBarClient'
import { NavBarDogWalker } from './components/NavBarDogWalker'
import { HomePage } from './pages/HomePage'
import { LogIn } from './pages/LogIn'
import { CreateAnAccount_Client } from './pages/CreateAnAccount_Client'
import { CreateAnAccount_DogWalker } from './pages/CreateAnAccount_DogWalker'
import { BookAWalk_Client } from './pages/BookAWalk_Client'
import { ViewMyProfile_Client } from './pages/ViewMyProfile_Client'
import { ViewMyProfile_DogWalker } from './pages/ViewMyProfile_DogWalker'
import { UploadPhotos_DogWalker } from './pages/UploadPhotos_DogWalker'
import { ViewPhotos_Client } from './pages/ViewPhotos_Client'
import { Calendar_DogWalker } from './pages/Calendar_DogWalker'
import { ViewAllDogWalkers_Client } from './pages/ViewAllDogWalkers_Client'
import { ViewASingleDogWalker_Client } from './pages/ViewASingleDogWalker_Client'
import { ViewASingleClient_DogWalker } from './pages/ViewASingleClient_DogWalker'
import './custom.scss'

export function App() {
  return (
    <>
      <div className="container">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <div className="container">
            <NavBar />
            <HomePage id="HomePage" />
          </div>
        </Route>
        <Route exact path="/HomePage_Client">
          <div className="container">
            <NavBarClient />
            <HomePage id="HomePage" />
          </div>
        </Route>
        <Route exact path="/HomePage_DogWalker">
          <div className="container">
            <NavBarDogWalker />
            <HomePage id="HomePage" />
          </div>
        </Route>
        <Route exact path="/LogIn">
          <div className="container">
            <NavBar />
            <LogIn />
          </div>
        </Route>
        <Route exact path="/CreateAnAccount_Client">
          <div className="container">
            <NavBar />
            <CreateAnAccount_Client />
          </div>
        </Route>
        <Route exact path="/CreateAnAccount_DogWalker">
          <div className="container">
            <NavBar />
            <CreateAnAccount_DogWalker />
          </div>
        </Route>
        <Route exact path="/BookAWalk_Client">
          <div className="container">
            <NavBarClient />
            <BookAWalk_Client />
          </div>
        </Route>
        <Route exact path="/ViewMyProfile_Client">
          <div className="container">
            <NavBarClient />
            <ViewMyProfile_Client />
          </div>
        </Route>
        <Route exact path="/ViewMyProfile_DogWalker">
          <div className="container">
            <NavBarDogWalker />
            <ViewMyProfile_DogWalker />
          </div>
        </Route>
        <Route exact path="/UploadPhotos_DogWalker">
          <div className="container">
            <NavBarDogWalker />
            <UploadPhotos_DogWalker />
          </div>
        </Route>
        <Route exact path="/ViewPhotos_Client">
          <div className="container">
            <NavBarClient />
            <ViewPhotos_Client />
          </div>
        </Route>
        <Route exact path="/Calendar_DogWalker/:id">
          <div className="container">
            <NavBarDogWalker />
            <Calendar_DogWalker />
          </div>
        </Route>
        <Route exact path="/ViewAllDogWalkers_Client">
          <div className="container">
            <NavBarClient />
            <ViewAllDogWalkers_Client />
          </div>
        </Route>
        <Route path="/DogWalker/:id">
          <div className="container">
            <NavBarDogWalker />
            <ViewASingleDogWalker_Client />
          </div>
        </Route>
        <Route path="/Client/:id">
          <div className="container">
            <NavBarDogWalker />
            <ViewASingleClient_DogWalker />
          </div>
        </Route>
      </Switch>
      <div className="container">
        <footer></footer>
      </div>
    </>
  )
}
