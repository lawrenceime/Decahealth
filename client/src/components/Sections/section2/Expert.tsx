import Experts from '../section2/Expert.module.css'
import Testimonial from '../../../assets/testimonial-user.svg'
import Testimonials from '../../../assets/testimonial.svg'
import Star from '../../../assets/star.svg'
import Nostar from '../../../assets/no-star.svg'

  const Expert = () =>{
    return(
        <section className={Experts.container} >   
        <div className={Experts.row}>
          <div className={Experts.top}>
            <h2 className={Experts.heading}>Our Experts</h2>
            <p className={Experts.paragraph}>Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics </p>
          </div>
          <div className={Experts.bottom}>
           <div className={Experts.card}>
            <img src={Testimonial} alt="Testimonial image" className={Experts.testimonialImg} />
            <p className={Experts.paragraph2}>Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year.</p>
            <div className={Experts.flex}>
                <img src={Nostar} alt=" rating" />
                <img src={Nostar} alt="rating" />
                <img src={Nostar} alt="rating" />
                <img src={Nostar} alt="rating" />
                <img src={Star} alt="rating" />
            </div>
            <div>
                <h5 className={Experts.doctor} >Regina Miles</h5>
                <h6 className={Experts.designer}>Dentist</h6>
            </div>

           </div>
           <div className={Experts.card}>
            <img src={Testimonials} alt="Testimonial image"className={Experts.testimonialImg} />
            <p className={Experts.paragraph2}>Slate helps you see how many more days 
you need to work to reach your financial 
goal for the month and year.</p>
            <div className={Experts.flex}>
            <img src={Nostar} alt=" rating" />
                <img src={Nostar} alt="rating" />
                <img src={Nostar} alt="rating" />
                <img src={Nostar} alt="rating" />
                <img src={Star} alt="rating"/>
            </div>
            <div>
                <h5 className={Experts.doctor}>Bobby Miles</h5>
                <h6 className={Experts.designer}>Doctor</h6>
            </div>

           </div>
          </div>
        </div>
        
        </section>
    )
  }
export default Expert