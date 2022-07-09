import React from "react";
import "../css/Header.css"
import logo from "../img/logo-kaos.png";
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
   return(
      <div>
         <div >
            <Container fluid>
               <Navbar className="Navbar">
                  <Navbar.Brand href="#home"><img src={logo} alt="" className="logo" /></Navbar.Brand>
                  <div className="toggle"></div>
                  <Nav className="me-auto nav-menu">
                     <Nav.Link href="Banner" className="txt-nav">Banner</Nav.Link>
                     <Nav.Link href="#features" className="txt-nav">Features</Nav.Link>
                     <Nav.Link href="#pricing" className="txt-nav">Pricing</Nav.Link>
                  </Nav>
               </Navbar>
            </Container>
         </div>
         
      </div>
   );

}

export default Header;