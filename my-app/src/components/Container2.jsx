import React from "react";
import '../css/Container2.css';
import kaos1 from '../img/61.jpg';
import kaos2 from '../img/62.jpg';
import kaos3 from '../img/63.jpg';

function Container2(){
   return(
      <div>
         <hr className="hr1"/>
         <div className="container2">
            <div className="card">
               <img src={kaos1} alt="" />
               <h3>Long Sleeve</h3>
               <h1>75K</h1>
            </div>
            <div className="card">
               <img src={kaos2} alt="" />
               <h3>Long Sleeve</h3>
               <h1>75K</h1>
            </div>
            <div className="card">
               <img src={kaos3} alt="" />
               <h3>Long Sleeve</h3>
               <h1>75K</h1>
            </div>
         </div>
      </div>
   )
}

export default Container2;