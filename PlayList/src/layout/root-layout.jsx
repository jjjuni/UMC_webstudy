import { Outlet } from 'react-router-dom'
import Navbar from "../component/navbar";
import Footer from '../component/footer';

function RootLayout(){
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default RootLayout;