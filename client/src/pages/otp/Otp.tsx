import { useState } from 'react';
// import { Link } from 'react-router-dom';

 import DecaHealth from '../../assets/DecaHealth.svg'
 import style from  "../otp/otp.module.css"
   export default function Otp() {
    const [user, setUser] = useState({otp : ""});
    const handleChange = (event:any) => {
      const name:string = event.target.name;
      const value = event.target.value;
      setUser(values => ({...values, [name]: value}))
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
    
 <br/>
  
      <button className={style.logBtn}>Verify Otp</button>
      
    </form>
    
        </div>
       
      </section>  
      
    </>  
     );
   }