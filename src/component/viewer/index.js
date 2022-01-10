import React from 'react'
import styled from 'styled-components'
import './viewer.css'
function Viewer() {
  return (
    <div className='Container'>
      <div className='wrap'>
        <img src='/images/viewers-disney.png' alt='' />
      </div>
      <div className='wrap'>
        <img src='/images/viewers-marvel.png' alt='' />
      </div>
      <div className='wrap'>
        <img src='/images/viewers-national.png' alt='' />
      </div>
      <div className='wrap'>
        <img src='/images/viewers-pixar.png' alt='' />
      </div>
      <div className='wrap'>
        <img src='/images/viewers-starwars.png' alt='' />
      </div>
    </div>
  )
}

export default Viewer
