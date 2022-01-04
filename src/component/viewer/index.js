import React from 'react'
import styled from 'styled-components'
import './viewer.css'
function Viewer() {
  return (
    <Container>
      <div className='wrap-viewer'>
        <img src='/images/viewers-disney.png' alt='' />
      </div>
      <div className='wrap-viewer'>
        <img src='/images/viewers-marvel.png' alt='' />
      </div>
      <div className='wrap-viewer'>
        <img src='/images/viewers-national.png' alt='' />
      </div>
      <div className='wrap-viewer'>
        <img src='/images/viewers-pixar.png' alt='' />
      </div>
      <div className='wrap-viewer'>
        <img src='/images/viewers-starwars.png' alt='' />
      </div>
    </Container>
  )
}

export default Viewer
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  padding: 30px 0px 26px;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`
