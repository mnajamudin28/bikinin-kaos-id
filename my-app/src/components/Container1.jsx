import React from "react";
import '../css/Container1.css';
import editPng from '../img/edit.png';
import discountPng from '../img/discount.png';
import fastTimePng from '../img/fast-time.png';

function Container1(){
   return(
      <div>
         <div className="main-box">   
            <h1>Stay in trend with <span>Bikinin Kaos ID</span></h1>
         </div>
         <div className="out-box">
            <div className="box">
               <img src={editPng} alt="" />
               <h1>As Requested</h1>
               <p>make t-shirts unique in the eyes of your friends.</p>
            </div>
            <div className="box">
               <img src={discountPng} alt="" />
               <h1>Best Price</h1>
               <p>Enjoy the best price for high quality clothing and accessory.</p>
            </div>
            <div className="box">
               <img src={fastTimePng} alt="" />
               <h1>Fast Work</h1>
               <p>fast processing, so you don't have to wait long to use our products.</p>
            </div>
         </div>
         

      </div>
   )
}

export default Container1;