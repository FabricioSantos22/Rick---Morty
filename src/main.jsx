import { createBrowserHistory } from '@remix-run/router'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Personagens from './pages/Personagens'
import PersonagensInfo from './pages/PersonagensInfo'
import './index.css'

const router = createBrowserRouter([
  {path:'/', element: <Personagens/>},
  {path:'/personagem/:idPersonagem',element: <PersonagensInfo/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(

    <RouterProvider router={router}/>
  
)
