import Special from '../section1/Specializatio.module.css'
import Thumb from '../../../assets/video-thumb.svg'
import Arrow from '../../../assets/arrow-next.svg'
import Play from '../../../assets/btn-circle.png'
import { Link } from 'react-router-dom'
   const Specialization = () =>{
     return (
    <section className={Special.specialContainer} >   
      <div className={Special.row}>
       
        <div className={Special.flex}>

        <div className={Special.thumbContainer}>
            <img src={Thumb} alt="Thumb image" className={Special.thumb} />
            <img src={Play} alt="Video Play"  className={Special.thumbInner}/>
            </div>
            <div className={Special.right}>
            <div className={Special.divider}></div>
            <h2 className={Special.specialHeader}>
            Our Doctors Specialize in you  
            </h2>
            <p className={Special.paragraph}> Fix an appointment with a doctor in just a few clicks , your health is our concern. </p>
           <Link to='/register' className={Special.paragraph2Link}><p className={Special.paragraph2}>See Doctors <img src={Arrow} alt="arrow-next" className={Special.arrowImg} /></p></Link> 
            </div>
           
           
            
        </div>
      </div>

    </section>
     );
   }
   export default Specialization