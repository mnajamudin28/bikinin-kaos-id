import React from "react";
import {Container, Button} from 'react-bootstrap';
import '../css/Banner.css';

function Banner(){

   return(
      <div>
         <Container fluid>            
            {/* <img src={require('../img/slide-1.png')} className="slide" />                
            <h3>Custom Tshirt</h3>
            <p>custom your t-shirt here</p>     */}
            <div className="carousel fluid">
               <h1>Custom t-shirt High Quality</h1>
               <p>your t-shirt model is boring and just like that? order t-shirts according to your request here</p>
               <Button variant="light">Shop Now</Button>
            </div>
            
         </Container>
      </div>
   )
}

export default Banner;