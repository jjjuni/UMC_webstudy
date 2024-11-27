import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './component/navbar'
import './App.css'
import './font.css'
import PlayListPage from './PlayListPage'
import Footer from './component/footer'

function App() {

  return (
    <>
      <Navbar/>
      <PlayListPage/>
      <Footer/>
    </>
  )
}

export default App