import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import HomeComp1 from '../../components/HomeComp1/HomeComp1';


function Home() {
  return (
    <>

      <div className='bg  '>
        <Navbar />
        <HomeComp1/>

      
      </div>
      


    <Footer/>

    </>
  )
}

export default Home
