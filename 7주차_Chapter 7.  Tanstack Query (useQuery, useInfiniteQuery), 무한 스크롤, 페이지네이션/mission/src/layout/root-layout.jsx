import {Outlet} from "react-router-dom";
import Navbar from "../components/bar/navbar";
import Sidebar from "../components/bar/sidebar";

function RootLayout(){
  return (
    <>
      <Navbar/>     
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default RootLayout;