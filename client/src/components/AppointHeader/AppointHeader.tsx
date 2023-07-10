import {useState, useEffect} from 'react';

// export interface IAppProps {
// }

import DecaHealth from '../../assets/DecaHealth.svg'


import { Link} from 'react-router-dom'
import Appoint from "./Appoint.module.css"

export default function AppointHeader () {
    const[collapse, setCollapse] = useState(false)
    const toggleButton = ()=> setCollapse(!collapse)
    // const location = useLocation()
    useEffect(()=>{
      setCollapse(true)
    },[])
  return (
     <article className={Appoint.wrapper} >

    <Link to ='/'><img className={Appoint.imgHero} src={DecaHealth} alt="DecaHealth Logo" /></Link> 
           
    <button  onClick={toggleButton} className={Appoint.toggle} > {collapse ?<i className='fas fa-bars'></i> :<i className='fas fa-times'></i> }</button>
   
    <nav id ={Appoint.navbar1}className={ collapse ?Appoint.navbar : ""} >
    <button onClick={toggleButton} className={Appoint.joinBtn}><Link to="/"className={Appoint.joinLink} > Log Out</Link></button>   
        
       
               
        </nav> 
     </article>
  );
}