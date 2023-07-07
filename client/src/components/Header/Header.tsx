// export interface IAppProps {
//     greet: string
//    }

import HeaderCSS from "../../components/Header/Header.module.css"
 import Navbar from "../../components/Navbar";
import {Link} from 'react-router-dom'  

   export default function Header () {
     return (
    <section className={HeaderCSS.navSection}>   
          <Navbar/>         
        <div className={HeaderCSS.heroSection}>
          <h2 className={HeaderCSS.welcome}>Welcome</h2>
          <h1 className={HeaderCSS.Bigtext}>Health care made easy ...</h1>

          <h3 className={HeaderCSS.smallText}>Book an appointment with us </h3>
          <div className={HeaderCSS.heroBtn}>
         <button className={HeaderCSS.join} ><Link to="register" className={HeaderCSS.joinUs}>Join Us</Link></button>
         <button className={HeaderCSS.learn}><Link to="/" className={HeaderCSS.learnMore}>Learn More</Link></button>
          </div>
          
        </div>

    </section>
     );
   }