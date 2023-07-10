// import * as React from 'react';

// export interface IAppProps {
// }
import {useState, useEffect} from "react"
import DecaHealth from '../assets/DecaHealth.svg'
import HeaderCSS from "../components/Header/Header.module.css"
import Arrow from "../assets/arrow.svg"  
import {NavLink, Link} from 'react-router-dom' 
import AnchorLink from "react-anchor-link-smooth-scroll";



export default function Navbar () {
  const[collapse, setCollapse] = useState(false)
  const toggleButton = ()=> setCollapse(!collapse)
  // const location = useLocation()
  useEffect(()=>{
    setCollapse(true)
  },[])

  return (
    <>
    <div className={`${HeaderCSS.navContainer} ${"animate__animated animate animate__slideInLeft"}`}>
    <Link to ='/'><img className={HeaderCSS.img} src={DecaHealth} alt="DecaHealth Logo" /></Link>  
    <button  onClick={toggleButton} className={HeaderCSS.toggle} > {collapse ?<i className='fas fa-bars'></i> :<i className='fas fa-times'></i> }</button>
   
    <nav id ={HeaderCSS.navbar1}className={ collapse ?HeaderCSS.navbar : ""} >
      <div className={HeaderCSS.navItem}>        
        <NavLink to ='/'className={HeaderCSS.home} onClick={toggleButton} >Home</NavLink>
        <AnchorLink href="#Contact" className={HeaderCSS.home} onClick={toggleButton}>Contact</AnchorLink>        
        </div>
        <div className={HeaderCSS.navBtn}>
           <Link  onClick={toggleButton}to='/login' className={HeaderCSS.login}><h3>Login</h3></Link>
  
          <button onClick={toggleButton} className={HeaderCSS.joinBtn}><Link to="/register"className={HeaderCSS.joinLink} >JOIN US <img src={Arrow} alt="Arrow Image" /></Link></button>
         </div> 
               
        </nav> 
{/*         
          <ul>
            <Link to="">Home</Link>
            <AnchorLink href="#Contact"  onClick={toggleButton}>Contact</AnchorLink> 
          </ul>

          <ul>
          <Link to="">Login</Link>
          <Link to=""><button>Join Us</button></Link>
          </ul> */}
          
        
          
    </div>
 

     
     
      </>
  );
}
