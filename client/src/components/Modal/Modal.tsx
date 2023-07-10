import { useState } from 'react';
import ModalStyle from "../Modal/Modal.module.css"
import axios from "../../lib/axios"
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/ReactToastify.css"

//  interface Props{
//   closeModal: ({
//     email : string,
//     textarea : string,
//      date : string
//   })
   
//  }


function ShowModal({closeModal}:any) {
  const navigate = useNavigate()
   const [appointment, setAppointment] = useState({
  name: localStorage.getItem("name"),
   hospital:localStorage.getItem("hospital"),
   email : localStorage.getItem("email"),
   address: localStorage.getItem("address"),
   message : "",
   userEmail : ""


   })
   
    const handleChange = (event:any)=>{
      event.preventDefault()
      const name:string = event.target.name;
      const value = event.target.value;
     
      setAppointment(values => ({...values, [name]: value}))
    }
    
  
   
   const handleSubmit = async(e:any)=>{
    e.preventDefault()
  try {
 

   
    const books = {
      doctor : appointment.name,
      doctorEmail : appointment.email,
     userEmail : appointment.userEmail,
     hospitalName :appointment.hospital,
     hospitalAddress : appointment.address,
     purposeOfVisit : appointment.message,
      dateOfAppointment : `${new Date()}`
      
    }
    console.log("my Books" , books)
    const response = await axios.post("/appointment", books).then((res:any)=>{
      console.log(res.status, res.data)
         console.log(res.error)
    })

    

    closeModal(false)
    toast.success("Appointment booked Successful,kindly check your email", {position: toast.POSITION.TOP_CENTER})
      window.location.reload()
   return response
   


  } catch (error) {
    console.log("error")
  }
   }
  return (
     <div className={ModalStyle.modalBackground}>
    <div className={ModalStyle.modalContainer}>
        <button onClick={()=>closeModal(false)} className={ModalStyle.toggle}> <i className='fas fa-times'></i> </button>
        <div className="title">
            <h2>Fill in your appointment details</h2>
        </div>
        <div className={ModalStyle.body}>
            
             <input type="text" 
              className={ModalStyle.modalInput}
               name ="name"
              value={`${localStorage.getItem("name")}`}
             readOnly
             required
             /><br/>
           
          <input type="text"          
            value={`${localStorage.getItem("email")}`}
            required
          className={ModalStyle.modalInput}
          readOnly
          /> <br/>
            
          <input type="text"   
          name="hospital"       
          value={`${localStorage.getItem("hospital")}`}

          className={ModalStyle.modalInput}
            required
          readOnly
          /><br/>
         
          <input type="text" 
          
          name ="address"
        value={`${localStorage.getItem("address")}`}
          className={ModalStyle.modalInput}
          required
          readOnly
          /><br/>
            
          <input type="text"          
            id ="email" 
            name ="userEmail"
            placeholder='Enter your email'
            value={appointment.userEmail}
            onChange ={handleChange}
            className={ModalStyle.modalInput}
         required
          /><br/>
          
          <textarea  id="" 
          name= "message"
          placeholder="Purpose of Visit"
          value ={appointment.message}
          onChange={handleChange}
          style={{textAlign:"start"}}
          className={ModalStyle.textarea}
          required
          >
          </textarea>

           
        

        <div className={ModalStyle.divider}></div>

        <div className={ModalStyle.footer}>

            <button className={ModalStyle.bookBtn} onClick={handleSubmit}>Book Now</button>
            <button className={ModalStyle.cancelBtn}  onClick={()=>closeModal(false)} >Cancel</button>
          </div>
      
         
        </div>
    </div>
    <ToastContainer></ToastContainer>
     </div>
  );
}

export default ShowModal;