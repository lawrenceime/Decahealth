//  import React from "react"
// export interface IAppProps {
   
//    }
import { useState } from 'react';
import {useNavigate} from "react-router-dom"
import { Link } from 'react-router-dom';
import Style from '../Register/Register.module.css'
import DecaHealth from '../../../assets/DecaHealth.svg'
import  axios from   "../../../lib/axios"


   
   export default function Register () {
    const navigate = useNavigate()
    const [user, setUser] = useState({ 
      firstname : "", 
      lastname:"",       
      email : "", 
      password: "",
      gender : "",
      age : ""
    
    });
   
    const handleSubmit = async (e:any) => {
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
        })

        navigate("/register/otp")
       return response
        
     
      
        
      }  catch (error) {
        console.log("error")
      }
    }
      const handleChange = (event:any) => {
       
        const name:string = event.target.name;
        const value = event.target.value;
       
        setUser(values => ({...values, [name]: value}))
        
      }
   
    
     return (
      <>
      <section className={Style.container}>
       <div className={Style.register}>
       <form className={Style.form}>
        <div className={Style.header}><img src={DecaHealth} alt="" /></div>
         <label className={Style.label}>First Name:</label> <br/>
         <input
         className={Style.input}
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
          required
        />
        <br/>
        
      <label className={Style.label}> Email:</label><br/>
   
      <input
          type="email" 
          name='email'
          value={user.email || ""}
          onChange= {handleChange}
          required
        /><br/>
      <label className={Style.label}> Password:</label><br/>
   
      <input
          type="text" 
          name='password'
          value={user.password || ""}
          onChange={handleChange}
        />
         <label className={Style.label}> Gender:</label><br/>
   
   <input
       type="text" 
       name='gender'
       value={user.gender || ""}
       onChange={handleChange}
     />
        <br/>
        <label className={Style.label}> Age:</label><br/>
   
   <input
       type="number" 
       name='age'
       value={user.age || ""}
       onChange={handleChange}
     />
      <button  onClick={handleSubmit}  className={Style.registerBtn}>Submit</button>
    </form>
       </div>
    
     
    <h3  className={Style.alreadyUser}>Are you already a user? <Link to="/login" className={Style.link}> Please login</Link></h3> 
        
      </section>
     
    </>
     );
   }
   