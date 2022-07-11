import React from 'react';
import Header from './Header';
import Banner from './Banner';
import Container1 from './Container1';
import Container2 from './Container2'


function Home(){
   return(
      <div>
         <Header/>
         <Banner />
         <Container1 />
         <Container2 />
      </div>
   )
}

export default Home;