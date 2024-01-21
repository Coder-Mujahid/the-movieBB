import { Outlet } from "react-router-dom";
import './App.css'
import Navbar from './component/Navbar'
import Footer from "./Footer";

function App() {
  
  return (
    <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
    </>
  )
}

export default App
