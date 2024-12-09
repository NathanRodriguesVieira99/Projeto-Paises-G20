
import './styles/globals.css'

import { Navbar } from './components/Navbar/index'
import { Footer } from './components/footer/index'

import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
