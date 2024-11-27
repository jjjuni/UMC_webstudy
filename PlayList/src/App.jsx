import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar'
import './App.css'
import './font.css'
import CartPage from './page/CartPage'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import RootLayout from './layout/root-layout'
import PlayListPage from './page/PlayListPage'
import ModalPortal from './component/ModalPortal'
import AlertModal from './component/AlertModal'
import { useSelector } from 'react-redux'

function App() {

  const modal = useSelector((state) => state.modal);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      children: [
        {
          index: true,
          element: 
          <>
            <PlayListPage/>
          </>
        },
        {
          path: 'cart',
          element: <CartPage/>
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App