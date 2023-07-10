//  import React from "react"
// export interface IAppProps {
   
//    }
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import Style from '../Register/Register.module.css'
import DecaHealth from '../../../assets/DecaHealth.svg'
import  axios from   "../../../lib/axios"
// import {z} from "zod"
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"


   
   export default function Register () {
    const navigate = useNavigate()
    const [error, setError]= useState<any>("")
    const [user, setUser] = useState({ 
      firstname : "", 
      lastname:"",       
      email : "", 
      password: "",
      gender : "",
      age : ""
    
    });
   
   
    const handleSubmit = async (e: any) => {
  
      try {
        e.preventDefault()
        const userData = {
          firstname : user.firstname,
          lastname : user.lastname,
          email: user.email,
           password : user.password,
           gender : user.gender,
           age : user.age
        };
       
       const response = await axios.post("/user/signup", userData).then((res:any)=>{
          console.log(res.status, res.data)
          if(res.data.message){
            setError(res.data.message)
          }else{
            setError(res.data)
          }
            
        })

        navigate("/login")
        
       
        toast.success("Registration Successful", {position: toast.POSITION.TOP_CENTER})
           
       return response
      //  handleChange(user)
     
       
        
      }  catch (error) {
        toast.error("Please enter valid details", {position: toast.POSITION.TOP_CENTER})
        console.log("error" ,error)
      }
    }

    
      const handleChange = (event:any) => {
       
        const name:string = event.target.name;
        const value = event.target.value;
       
        setUser(values => ({...values, [name]: value}))
        
      }
   
    
     return (
      <>
      <section className={`${Style.container} ${"animate__animated animate animate__backInRight"}`}>
       
       <div className={Style.register}>
       <form className={Style.form}>
       
        <div className={Style.header}><img src={DecaHealth} alt="" /></div>
         <label className={Style.label}>First Name:</label> <br/>
         <input
         className={Style.inputReg}
          type="text" 
          name='firstname'
          value={user.firstname || ""}
          onChange= {handleChange}
          required
        />
         <br/>
      <label className={Style.label}>Last Name:</label><br/>
      
      <input
          type="text" 
          name='lastname'
          value={user.lastname || ""}
          onChange= {handleChange}
          className={Style.inputReg}
          required
        />
        <br/>
        
      <label className={Style.label}> Email:</label><br/>
   
      <input
          type="email" 
          name='email'
          value={user.email || ""}
          onChange= {handleChange}
          className={Style.inputReg}
          required
        /><br/>
      <label className={Style.label}> Password:</label><br/>
   
      <input
          type="password" 
          name='password'
          value={user.password || ""}
          onChange={handleChange}
          className={Style.inputReg}
          required
        />
         <label className={Style.label}> Gender:</label><br/>
   

     <select 
      id="gender"
      value={user.gender}
     name="gender" 
     onChange={handleChange}
     className={Style.select}
    
     
     > <option value="">-- Choose --</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
     </select>
        <br/>
        <label className={Style.label}> Age:</label><br/>
   
   <input
       type="number" 
       name='age'
       value={user.age || ""}
       onChange={handleChange}
       className={Style.inputReg}
       required
     />
      <button  onClick={handleSubmit}  className={Style.registerBtn}>Submit</button>
      <h5>{error}</h5>
    </form>
       </div>
    
     
    <h6  className={Style.alreadyUser}>Are you already a user? <Link to="/login" className={Style.link}> Please login</Link></h6> 
         <ToastContainer></ToastContainer>
      </section>
     
    </>
     );
   }
   