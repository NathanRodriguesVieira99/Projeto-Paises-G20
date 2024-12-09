import { createBrowserRouter, Navigate } from 'react-router-dom'

import App from '../App'
import Agendas from '../pages/Agendas/index'
import AgendamentoForm from '../components/AgendamentoForm'
import Countries from '../pages/Countries/index'
import Authorities from '../pages/Authorities/index'
import AuthoritiesForm from '../components/AuthoritiesForm'
import Error from '../pages/Error/index'
import Home from '../pages/Home/index'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to='/home' />
      },
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
        element: <AuthoritiesForm />
      },
      {
        path: 'authorities/:country',
        element: <Authorities />
      },
      {
        path: 'agendamento',
        element: <AgendamentoForm /> 
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