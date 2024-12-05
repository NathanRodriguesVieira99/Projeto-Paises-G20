import { Outlet } from 'react-router-dom'
import './styles/globals.css'

import { Navbar } from './components/Navbar/index'
import { Footer } from './components/footer/index'

function App() {

  return (
    <div className="Odin">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
