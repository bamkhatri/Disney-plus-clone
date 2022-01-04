import React from 'react'
import { Counter } from './features/counter/Counter'
import Header from './component/header'
import './App.css'
import Home from './component/home'

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
    </div>
  )
}

export default App
