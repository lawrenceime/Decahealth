

// export interface IAppProps {
// }



import AppointHeader from "../../components/AppointHeader/AppointHeader"
import AppointmentHero from "../../components/AppointHero/AppointHero"
import AppointmentCard from "../../components/AppointmentCard/AppointmentCard"
import Footer from "../../components/Footer/Footer"
import AppointCSS from "../appointment/Appointment.module.css"
// import {toast, ToastContainer} from "react-toastify"
// import "react-toastify/ReactToastify.css"
export default function Appointment () {
    // toast.success("Login Successful", {position: toast.POSITION.TOP_CENTER})

  return (
     <section className={AppointCSS.container} >
       <AppointHeader/>
       <AppointmentHero/>
       <AppointmentCard/>
       {/* <ToastContainer></ToastContainer> */}
       <Footer/>
     </section>
  );
}
