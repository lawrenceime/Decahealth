import { useEffect, useState } from "react";
import Location from "../../assets/location.svg";
// import DoctorImg from "../../assets/Doctor.svg";
import Review from "../../assets/review.svg";
import axios from "../../lib/axios";
import ShowModal from "../Modal/Modal";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"

import CardCSS from "../AppointmentCard/AppointmentCard.module.css";

const Card = () => {
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
//   const [search, setSearch] = useState<any[]>([]);
  const [doctors, setDoctors] = useState<any[]>([]);

  const searchDoctor = async () => {
    try {
      const response = await axios.get("/doctor/get-doctors");
      const data = await response.data.allDoctors;
    //   setSearch(data.allDoctors);
      console.log(data);
      setDoctors(data);
      // const  doctors = data.map((doctor:any)=> })
      //  return doctors

    //   toast.success("Appointment booked Successful,kindly check your email", {position: toast.POSITION.TOP_CENTER})
    
    } catch (error) {
      console.log("ERROR");
    }
  };

  useEffect(() => {
    searchDoctor();
  }, []);


  const bookAppointment = (doctorName:string, email:string, hospital:string, address:string) => {
    localStorage.setItem("name", doctorName)
    localStorage.setItem("email", email)
    localStorage.setItem("hospital", hospital)
    localStorage.setItem("address", address)
    setShow(true)
  }

  return (
    <article className={CardCSS.wrapper}>
      <div className={CardCSS.row} >
        {doctors.map((doctor: any, id:number  ) => (
          <div className={CardCSS.card} key ={doctor.id} >
            <img
         
              src={doctor.image}
              alt="Doctor Image"
              className={CardCSS.DoctorImg}
            />
            <h2 className={CardCSS.h2}>{doctor.firstName} {doctor.lastName}
            
            </h2>
            <h4 className={CardCSS.h4}>{doctor.specialization}</h4>
            <p className={CardCSS.paragraph}>
              {" "}
              <img
                src={Location}
                alt="Location"
                className={CardCSS.imgLocate}
              />
              {doctor.hospital}
            </p>
            <span className={CardCSS.span}>
              <img
                src={Review}
                alt="Doctor Rating"
                className={CardCSS.rating}
              />
              <img
                src={Review}
                alt="Doctor Rating"
                className={CardCSS.rating}
              />
              <img
                src={Review}
                alt="Doctor Rating"
                className={CardCSS.rating}
              />
              <img
                src={Review}
                alt="Doctor Rating"
                className={CardCSS.rating}
              />
            </span>
            <h5  className={CardCSS.status}>Status : {doctor.status}</h5>
            <h5  className={CardCSS.email}>Email : {doctor.email}</h5>

            <button className={CardCSS.booking} onClick={() => bookAppointment(`${doctor.firstName + ' ' + doctor.lastName}`, doctor.email, doctor.hospital, doctor.address)}>Book an appointment</button>
          </div>
        ))}
  <ToastContainer></ToastContainer>
      </div>

      {show && <ShowModal closeModal={setShow} 
         booking = {''}
      />}
    </article>
  );
};
export default Card;
