import React from 'react'
import { Counter } from './features/counter/Counter'
import Header from './component/header'
import './App.css'
import Home from './component/home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detail from './component/detail'
import Login from './component/login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/detail'>
            <Detail />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
