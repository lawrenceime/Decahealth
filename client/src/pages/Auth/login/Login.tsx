// export interface IAppProps {
//     greet: string
//    }
// import React,{FC} from 'react';
// interface Input {
//   email: "String"

// }
import { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
 import LoginStyle from '../login/Login.module.css'
 import DecaHealth from '../../../assets/DecaHealth.svg'
 import axios from '../../../lib/axios';
 import {toast, ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"

   export default function Login() {

    const navigate = useNavigate()
    const [user, setUser] = useState({email : "", password: ""});
    const handleChange = (event:any) => {
      const name:string = event.target.name;
      const value = event.target.value;
      setUser(values => ({...values, [name]: value}))     
    }
   const  handleSubmit = async(e:any)=>{
    try {
      e.preventDefault()
  const userLogin = {
     email : user.email,
     password : user.password
  }
      const response = await axios.post("/user/login", userLogin).then((res:any)=>{
          console.log("Login Successfully", res.data)
          localStorage.setItem("token", res.data.token)
 
      })
      
     
      navigate("/appointment")  
    return response
    
   
    } catch (error:any) {
      console.log("Login Error")
    }
  }
   
     return (
      <>
      <section className={`${LoginStyle.container} ${"animate__animated animate animate__backInLeft"} `}>
        <div className={LoginStyle.login}>
        <form className={LoginStyle.form}>
          <div className={LoginStyle.header}> <img src={DecaHealth} alt="" /></div>
      <label className={LoginStyle.label}>Email:</label>
        <input
        className={LoginStyle.logInput}
          type="text" 
          name='email'
          value={user.email}
          onChange= {handleChange}
        />
      
      <br/>
      <label className={LoginStyle.label}> Password:</label>
        <input
         className={LoginStyle.logInput}
          type="text" 
          name='password'
          value={user.password}
          onChange={handleChange}
        />
      
      <br/>
    
 <br/>
      <Link to="" className={LoginStyle.forgetPassLink}><p className={LoginStyle.forgetPass}>Forget password ?</p></Link>
      <button className={LoginStyle.logBtn} onClick={handleSubmit}>Login</button>
      
    </form>
    
        </div>
        <h6 className={LoginStyle.h3}>Are you a new user?   <Link to="/register"  className={LoginStyle.newUser}>Create an account </Link></h6>
        <ToastContainer></ToastContainer>
      </section>  
      
    </>  
     );
   }
   