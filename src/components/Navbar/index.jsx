import React from 'react'
import { Link } from 'react-router-dom'
import { useFetchG20Countries } from '../../hooks/useFetchG20Countries'
import { Sidebar } from '../../components/Sidebar/index'
import './styles.css'

export const Navbar = () => {
  const { countries, loading } = useFetchG20Countries()

  if (loading) {
    return <div>Carregando...</div>
  }
  return (
    <>
      <nav className='navbar'>
        <Sidebar countries={countries} />
        <h1 className='logo'>G20 Rio 2024 </h1>
        <ul className='links'>
          <li><Link to='/countries'>Paises</Link></li>
          <li><Link to='/authorities'>Autoridades</Link></li>
          <li><Link to='/agendas'>Agenda</Link></li>
        </ul>
      </nav>
    </>
  )
}

