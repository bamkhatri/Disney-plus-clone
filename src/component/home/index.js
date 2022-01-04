import React from 'react'
import ImgSlider from '../slider'

import './home.css'

function Home() {
  return (
    <main
      className='container'
      style={{
        background: `url('/images/home-background.png') center center / cover no-repeat
    fixed`,
      }}
    >
      <ImgSlider />
    </main>
  )
}

export default Home
