import React from 'react'
import Movies from '../movies'
import ImgSlider from '../slider'
import Viewer from '../viewer'

import './home.css'

function Home() {
  return (
    <main
      className='container'
      style={{
        background: `url('/images/home-background.png') center center / cover
      no-repeat fixed`,
      }}
    >
      <ImgSlider />
      <Viewer />
      <Movies />
    </main>
  )
}

export default Home
