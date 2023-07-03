// export interface IAppProps {
//     greet: string
//    }
import DecaHealth from "../../assets/DecaHealth.svg"
import Hero from "../../components/Header/Header.module.css"
import Arrow from "../../assets/arrow.svg"   
   export default function Header () {
     return (
    <section className={Hero.section}>
   
      <nav className={Hero.nav}>
      <div className={Hero.navItem}>
     <a href=""><img className={Hero.img} src={DecaHealth} alt="DecaHealth Logo" /></a> 
       
       <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
       </ul>
       
        </div>
        <div className={Hero.navBtn}>
           <a href="" className={Hero.login}><h3>Login</h3></a>

          <button className={Hero.joinBtn}><a className={Hero.joinLink} href="" >JOIN US <img src={Arrow} alt="Arrow Image" /></a></button>
         </div>
       
        
        </nav> 

    </section>
     );
   }