import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Header from './templates/header.jsx'; // Caso o arquivo tenha essa extensão.


import Footer from './templates/footer'
import { Button } from 'react-bootstrap'


import 'bootstrap/dist/css/bootstrap.min.css';

import './custom.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './pages/Home'
import SobreMim from './pages/SobreMim'
import Contato from './pages/Contato'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "sobremim",
    element: <SobreMim/>,
  }, {
    path: "contato",
    element: <Contato/>,
  }
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <Header/>
    <RouterProvider router={router} />
    
  </StrictMode>,
)
