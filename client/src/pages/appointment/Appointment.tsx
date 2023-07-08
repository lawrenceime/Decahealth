

// export interface IAppProps {
// }



import AppointHeader from "../../components/AppointHeader/AppointHeader"
import AppointmentHero from "../../components/AppointHero/AppointHero"
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard"
// import Footer from "../../components/Footer/Footer"
import AppointCSS from "../appointment/Appointment.module.css"
export default function Appointment () {
    

  return (
     <section className={AppointCSS.container} >
       <AppointHeader/>
       <AppointmentHero/>
       <AppointmentCard/>
       {/* <Footer/> */}
     </section>
  );
}
