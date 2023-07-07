// import * as React from 'react';
import ContactCSS from '../section3/Contact.module.css'
// export interface IAppProps {
// }

const Contact = ()=> {
  return (
  <section className={ContactCSS.container} id="Contact">
    <div className={ContactCSS.Wrapper}>
        <div className={ContactCSS.contactHead}>
          <h1 className={ContactCSS.header}>REACH OUT TO US </h1>
          <p className={ContactCSS.paragraph}>Problems trying to resolve the conflict between <br/> 
the two major realms of Classical physics: Newtonian mechanics </p>
        </div>
        <div className={ContactCSS.inputButton}>
            <input type="text" 
             className={ContactCSS.contactInput}
             placeholder='Place your text '
            />
            <button className={ContactCSS.inputbtn}>Contact us</button>
        </div>
    </div>
  </section>
  );
}
export default Contact