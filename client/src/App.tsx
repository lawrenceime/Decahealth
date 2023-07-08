// import { useState } from 'react'
import Home from "./pages/Home/Home"
import Login from "./pages/Auth/login/Login"
import Register from "./pages/Auth/Register/Register"
import Otp from "./pages/otp/Otp"
import {Routes, Route} from  'react-router-dom'
import Appointment from "./pages/appointment/Appointment"
import './App.css'

function App() {


  return (
    
     <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='login' element = {<Login/>}></Route>     
      <Route path='/register' element = {<Register/>}></Route>
      <Route path='register/:id' element = {<Otp/>}></Route> 
      <Route path='appointment' element = {<Appointment/>}></Route>       
     </Routes>
         
      
      
   
    
      
    
  )
}

export default App
