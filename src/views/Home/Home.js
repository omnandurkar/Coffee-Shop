import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import HomeComp1 from '../../components/HomeComp1/HomeComp1';
import HomeComp2 from '../../components/HomeComp2/HomeComp2';
import HomeComp3 from '../../components/HomeComp3/HomeComp3';
import HomeComp4 from '../../components/HomeComp4/HomeComp4';


function Home() {
  return (
    <>

     
        <Navbar />
      
      <HomeComp1/>

      <HomeComp2/>

      <HomeComp3/>

      <HomeComp4/>
      


    <Footer/>

    </>
  )
}

export default Home
