import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

export const Navbar = () => {


  return (
    <>
      <nav className='navbar'>
        <h1 className='logo'><Link to={'home'}>G20 Rio 2024</Link> </h1>
        <ul className='links'>
          <li><Link to='/home'>Home</Link></li>
          <li><Link to='/countries'>Countries</Link></li>
          <li><Link to='/authorities'>Authorities</Link></li>
          <li><Link to='/agendas'>Agenda</Link></li>
        </ul>
      </nav>
    </>
  )
}

