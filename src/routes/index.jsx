import { createBrowserRouter } from 'react-router-dom'

import App from '../App'
import Home from '../pages/Home/index'
import Agendas from '../pages/Agendas/index'
import Countries from '../pages/Countries/index'
import Authorities from '../pages/Authorities/index'
import Error from '../pages/Error/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'home',
        element: <Home />
      },

      {
        path: 'countries',
        element: <Countries />
      },
  
      {
        path: 'authorities',
        element: < Authorities />
      },
      {
        path: 'agendas',
        element: <Agendas />
      },
      {
        path: '*',
        element: <Error />
      }
    ]
  }
])

export default router