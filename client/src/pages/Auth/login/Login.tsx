// export interface IAppProps {
//     greet: string
//    }
// import React,{FC} from 'react';
// interface Input {
//   email: "String"

// }
import { useState } from 'react';
import { Link } from 'react-router-dom';
 import LoginStyle from '../login/Login.module.css'
 import DecaHealth from '../../../assets/DecaHealth.svg'

   export default function Login() {
    const [user, setUser] = useState({email : "", password: ""});
    const handleChange = (event:any) => {
      const name:string = event.target.name;
      const value = event.target.value;
      setUser(values => ({...values, [name]: value}))     
    }
   
     return (
      <>
      <section className={LoginStyle.container}>
        <div className={LoginStyle.login}>
        <form className={LoginStyle.form}>
          <div className={LoginStyle.header}> <img src={DecaHealth} alt="" /></div>
      <label className={LoginStyle.label}>Email:
        <input
        className={LoginStyle.logInput}
          type="text" 
          name='email'
          value={user.email}
          onChange= {handleChange}
        />
      </label>
      <br/>
      <label className={LoginStyle.label}> Password:
        <input
         className={LoginStyle.logInput}
          type="text" 
          name='password'
          value={user.password}
          onChange={handleChange}
        />
      </label>
      <br/>
    
 <br/>
      <Link to="" className={LoginStyle.forgetPassLink}><p className={LoginStyle.forgetPass}>Forget password ?</p></Link>
      <button className={LoginStyle.logBtn}>Login</button>
      
    </form>
    
        </div>
        <h3 className={LoginStyle.h3}>Are you a new user?   <Link to="/register"  className={LoginStyle.newUser}>Create an account </Link></h3>
      </section>  
      
    </>  
     );
   }
   