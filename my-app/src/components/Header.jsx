import React from "react";
import "../css/Header.css"
import logo from "../img/logo-kaos.png";
import {Navbar, Container, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header(){
   return(
      <div>
         <Navbar bg="light" variant="light">
            <Container>
               <Navbar.Brand href="#home"><img src={logo} alt="" className="logo"/></Navbar.Brand>
               <div className="toggle"></div>
               <Nav className="me-auto nav-menu">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#features">Features</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
               </Nav>
            </Container>
         </Navbar>
         <p>sdasdasas</p>
      </div>
   );

}

export default Header;