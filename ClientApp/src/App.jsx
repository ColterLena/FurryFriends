import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Header } from './components/Header'
import { NavBar } from './components/NavBar'
import { NavBarClient } from './components/NavBarClient'
import { NavBarDogWalker } from './components/NavBarDogWalker'
import { HomePage } from './pages/HomePage'
import { ClientLogIn } from './pages/ClientLogIn'
import { DogWalkerLogIn } from './pages/DogWalkerLogIn'
import { CreateAnAccount_Client } from './pages/CreateAnAccount_Client'
import { CreateAnAccount_DogWalker } from './pages/CreateAnAccount_DogWalker'
import { BookAWalk_Client } from './pages/BookAWalk_Client'
import { ViewMyProfile_Client } from './pages/ViewMyProfile_Client'
import { ViewMyProfile_DogWalker } from './pages/ViewMyProfile_DogWalker'
import { Calendar_DogWalker } from './pages/Calendar_DogWalker'
import { ViewAllDogWalkers_Client } from './pages/ViewAllDogWalkers_Client'
import { ViewASingleDogWalker_Client } from './pages/ViewASingleDogWalker_Client'
import { ViewASingleClient_DogWalker } from './pages/ViewASingleClient_DogWalker'
import './custom.scss'

export function App() {
  return (
    <>
      <div className="container">
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
          <Route exact path="/HomePage_Client/:id">
            <div className="container">
              <NavBarClient />
              <HomePage id="HomePage" />
            </div>
          </Route>
          <Route exact path="/HomePage_DogWalker/:id">
            <div className="container">
              <NavBarDogWalker />
              <HomePage id="HomePage" />
            </div>
          </Route>
          <Route exact path="/ClientLogIn">
            <div className="container">
              <NavBar />
              <ClientLogIn />
            </div>
          </Route>
          <Route exact path="/CreateAnAccount_Client">
            <div className="container">
              <NavBar />
              <CreateAnAccount_Client />
            </div>
          </Route>
          <Route exact path="/DogWalkerLogIn">
            <div className="container">
              <NavBar />
              <DogWalkerLogIn />
            </div>
          </Route>
          <Route exact path="/CreateAnAccount_DogWalker">
            <div className="container">
              <NavBar />
              <CreateAnAccount_DogWalker />
            </div>
          </Route>
          <Route exact path="/BookAWalk_Client/:id">
            <div className="container">
              <NavBarClient />
              <BookAWalk_Client />
            </div>
          </Route>
          <Route exact path="/ViewMyProfile_Client/:id">
            <div className="container">
              <NavBarClient />
              <ViewMyProfile_Client />
            </div>
          </Route>
          <Route exact path="/ViewMyProfile_DogWalker/:id">
            <div className="container">
              <NavBarDogWalker />
              <ViewMyProfile_DogWalker />
            </div>
          </Route>
          <Route exact path="/Calendar_DogWalker/:id">
            <div className="container">
              <NavBarDogWalker />
              <Calendar_DogWalker />
            </div>
          </Route>
          <Route exact path="/ViewAllDogWalkers_Client/:id">
            <div className="container">
              <NavBarClient />
              <ViewAllDogWalkers_Client />
            </div>
          </Route>
          <Route path="/DogWalker/:id">
            <div className="container">
              <NavBarClient />
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
      </div>
    </>
  )
}
