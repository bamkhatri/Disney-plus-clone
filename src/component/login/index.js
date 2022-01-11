import React from 'react'

import './login.css'
function Login() {
  return (
    <div
      className='login-container'
      style={{
        backgroundImage: `url(/images/login-background.jpg)`,
      }}
    >
      <div className='cta'>
        <div className='cta-logo'>
          <img src='/images/cta-logo-one.svg' alt='images-cta' />
        </div>
        <div className='sign-up'>
          <a>GET ALL THERE</a>
        </div>
        <div className='sign-up-disc'>
          <p>
            The Walt Disney Company is a worldwide entertainment company. The
            Company operates in four business segments: Media Networks, Parks,
            Experiences and Products, Studio Entertainment, and
            Direct-To-Consumer (DTC) and International.
          </p>
        </div>
        <div className='cta-logo-two'>
          <img src='/images/cta-logo-two.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Login
