import React from 'react'
import './header.css'
function Header() {
  return (
    <nav className='nav'>
      <img className='logo' src='/images/logo.svg' alt='logo' />
      <div className='nav-menu'>
        <a>
          <img src='/images/home-icon.svg' />
          <span>HOME</span>
        </a>
        <a>
          <img src='/images/search-icon.svg' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='/images/watchlist-icon.svg' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='/images/original-icon.svg' />
          <span>ORIGINAL</span>
        </a>
        <a>
          <img src='/images/movie-icon.svg' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='/images/series-icon.svg' />
          <span>SERIES</span>
        </a>
      </div>
      <img
        className='user-image'
        src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
      />
    </nav>
  )
}

export default Header
