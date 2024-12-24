import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './pages/Landing'
import Navbar from './components/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import SaibaMais from './pages/SaibaMais'
import Projetos from './pages/Projetos'
import Contato from './pages/Contato'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: '/saiba-mais',
    element: <SaibaMais />
  },
  {
    path: '/projetos',
    element: <Projetos />
  },
  {
    path: '/contato',
    element: <Contato /> 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </StrictMode>,
)
