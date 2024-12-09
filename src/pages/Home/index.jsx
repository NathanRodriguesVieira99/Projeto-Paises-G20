import React from 'react'
import RIO from '../../assets/wallpaperHome.jpg'

import './styles.css'

const Home = () => {
  return (
    <>
      <img
        src={RIO}
        alt="rio de janeiro"
        style={{ width: '100%', height: '90vh', objectFit: 'cover' }}
      />
    </>
  )
}

export default Home