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
    const[error, setError] = useState("")
    const [user, setUser] = useState({email : "", password: "", otp: ""});
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
     password : user.password,
     otp : user.otp
  }
      const response = await axios.post("/user/login", userLogin).then((res:any)=>{
          // console.log("Login Successfully", res.data)
           console.log(res.data.message)
          // if(res.data.message){
          //  setError(res.data.message)        
          //  }
          //  else{
          //   setError(res.data)
          //  }
          localStorage.setItem("token", res.data.token)
          
 
      })
     
      toast.success("Register Successful, Check your mail for Otp", {position: toast.POSITION.TOP_CENTER})
      navigate("/appointment")  
      
    return response
    
   
    } catch (error:any) {
      toast.error("Please enter valid details", {position: toast.POSITION.TOP_CENTER})
      console.log("Login Error", error) 
    }
  }
   
     return (
      <>
      <section className={`${LoginStyle.container} ${"animate__animated animate animate__backInLeft"} `}>
       
        <div className={LoginStyle.login}>
        <form className={LoginStyle.form}>
        <h5 className={LoginStyle.error}>{error}</h5>
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
      <input
         className={LoginStyle.logInput1}
          type="text" 
          name='otp'
          value={user.otp}
          onChange={handleChange}
          placeholder='Enter Otp'
        />
    
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
   