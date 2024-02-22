import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import HomeComp1 from '../../components/HomeComp1/HomeComp1';
import HomeComp2 from '../../components/HomeComp2/HomeComp2';


function Home() {
  return (
    <>

      <div className='bg  '>
        <Navbar />
      </div>
      <HomeComp1/>

      <HomeComp2/>
      


    <Footer/>

    </>
  )
}

export default Home
