import { useState } from 'react';
// import { Link } from 'react-router-dom';

 import DecaHealth from '../../assets/DecaHealth.svg'
 import style from  "../otp/otp.module.css"
 import axios from "../../lib/axios"
 import { useNavigate } from 'react-router-dom';
 import {toast, ToastContainer} from "react-toastify"
 import "react-toastify/ReactToastify.css"
   export default function Otp() {
    const navigate = useNavigate()
    const [user, setUser] = useState({otp : ""});
    const [verifyOtp, setVeryOtp] = useState<any>('')

    const handleChange = (event:any) => {
      const name:string = event.target.name;
      const value = event.target.value;
      setUser(values => ({...values, [name]: value}))
    }
    const handleSubmit =async(e:any)=>{
     try {
        e.preventDefault()
       const response = await axios.post('/user/login', verifyOtp).then((res)=>{
       const data = res.data

       if(data.success){
        navigate('/login')
        // toast.success("Registration Successful", {position: toast.POSITION.TOP_CENTER})
        
       }else{
        console.log( )
       }
       })
      
      return response
     } catch (error) {
        console.log("error")
     } 
    }

     return (
      <>
      <section className={style.container}>
        <div className={style.login}>

        <form className={style.form}>
          <div className={style.header}> <img src={DecaHealth} alt="" /></div>  
    
        <input
         className={style.logInput}
          type="text" 
          name='otp'
          value={user.otp}
          onChange={handleChange}          
        />     
      <br/> 
  
      <button className={style.logBtn} onClick={handleSubmit}>Verify Otp</button>
      
    </form>
    
        </div>
        <ToastContainer></ToastContainer>
      </section>  
      
    </>  
     );
   }