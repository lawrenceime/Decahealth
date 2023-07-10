// import * as React from 'react';

// export interface IAppProps {
// }
import DecaHealth from '../../assets/DecaHealth.svg'
import FooterCss from '../Footer/Footer.module.css'
import Facebook from  '../../assets/facebook sec-.svg'
import Instagram from  '../../assets/footerInstagram.svg'
import Twitter from  '../../assets/footerTwitter.svg'

const Footer = ()=> {
  return (
   <section className={FooterCss.footSection}>
    <div className={FooterCss.wrapper}>
       <img src={DecaHealth} alt="Logo"  className={FooterCss.logo}/> 
       <p className={FooterCss.paragraph}>Lorem ipsum dolor sit amet consectetur. Sit ullamcorper proin nullam egestas turpis lectus pretium mi.
         Mattis eget fames interdum hendrerit facilisi.</p>
       <div className={FooterCss.socials}>
        <a href=""><img src={Facebook} alt="Facebook Logo" /></a>
        <a href=""><img src={Instagram} alt="Instagram Logo" /></a>
        <a href=""><img src={Twitter} alt="Twitter Logo" /></a>
       </div>
    </div>
   </section>
  );
}
export default Footer