import SearchCSS from "../AppointHero/AppointHero.module.css"
import SearchIcon from "../../assets/searchIcon.svg"
 const Hero = () =>{
  return (
   <article className={`${SearchCSS.searchwrapper} `}>
     <div className={`${SearchCSS.container}`}>
       <h6 className={SearchCSS.paragraph}>  Find Top Doctors At Your Beck And Call   </h6>

       <div className={SearchCSS.inputButton}>
           <img src={SearchIcon} alt="" className={SearchCSS.icon}/>
            <input type="text" 
             className={SearchCSS.contactInput}
            
             placeholder='Search a doctor '
            />
            <button className={SearchCSS.inputbtn}>Search</button>
        </div>
     </div>
   </article>
    
  )
}
export default Hero