import { useState } from 'react';
import ModalStyle from "../Modal/Modal.module.css"
 import Arrow from "../../assets/arrow.svg"
//  interface Props{
//   closeModal: ({
//     email : string,
//     textarea : string,
//      date : string
//   })
   
//  }


function ShowModal({closeModal}:any) {
   const [email, setEmail] = useState("")
  return (
     <div className={ModalStyle.modalBackground}>
    <div className={ModalStyle.modalContainer}>
        <button onClick={()=>closeModal(false)} className={ModalStyle.toggle}> <i className='fas fa-times'></i> </button>
        <div className="title">
            <h2>Fill in your appointment details</h2>
        </div>
        <div className={ModalStyle.body}>
            {/* <label htmlFor="">Doctor</label><br/> */}
             <input type="text" 
              className={ModalStyle.modalInput}
              value={`${localStorage.getItem("name")}  `}
             readOnly
             /><br/>
           {/* <label htmlFor="">Doctor'email :</label><br/> */}
          <input type="text"          
            value={`${localStorage.getItem("email")}`}
          className={ModalStyle.modalInput}
          readOnly
          /> <br/>
            {/* <label htmlFor="">Hospital :</label><br/> */}
          <input type="text"          
          value={`${localStorage.getItem("hospital")}`}
          className={ModalStyle.modalInput}
          readOnly
          /><br/>
            {/* <label htmlFor="">Address:</label><br/> */}
          <input type="text"          
        value={`${localStorage.getItem("address")}`}
          className={ModalStyle.modalInput}
          readOnly
          /><br/>
             {/* <label htmlFor="">Your Email:</label><br/> */}
          <input type="text"          
            id ="email" 
            name ="email"
            placeholder='Enter your email'
            value={email}
            onChange ={(e)=>setEmail(e.target.value)}
            className={ModalStyle.modalInput}
       
          /><br/>
          
          <textarea name="" id="" 
          placeholder="Purpose of Visit"
          style={{textAlign:"start"}}
          className={ModalStyle.textarea}
          >
          </textarea>

           
        

        <div className={ModalStyle.divider}></div>

        <div className={ModalStyle.footer}>

            <button className={ModalStyle.bookBtn}>Book Now</button>
            <button className={ModalStyle.cancelBtn}>Cancel</button>
          </div>
      
         
        </div>
    </div>

     </div>
  );
}

export default ShowModal;