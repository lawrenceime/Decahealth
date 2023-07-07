// import * as React from 'react';
import Header from '../../components/Header/Header'
import HomeCSS from "../../pages/Home/Home.module.css"
 import Specialization from '../../components/Sections/section1/Specialization';
 import Expert from '../../components/Sections/section2/Expert'
 import Contact from '../../components/Sections/section3/ContactUs'
 import Footer from '../../components/Footer/Footer'
// export interface Props {
//  greet: string
// }

const Home = () =>{
  return (
    <main className={HomeCSS.main}>
      <Header/>
      <Specialization/>
      <div className={HomeCSS.divider}></div>
      <Expert/>
      <Contact/>
      <Footer/>
    </main>
  );
}
export default Home
