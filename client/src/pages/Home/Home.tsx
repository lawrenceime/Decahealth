// import * as React from 'react';
import Header from '../../components/Header/Header'
import HomeCSS from "../../pages/Home/Home.module.css"

// export interface Props {
//  greet: string
// }

const Home = () =>{
  return (
    <main className={HomeCSS.main}>
      <Header/>
    </main>
  );
}
export default Home
