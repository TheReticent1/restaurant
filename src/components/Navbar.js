import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../images/logo.png';
import NavLink from 'react-bootstrap/NavLink';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoMdCart } from 'react-icons/io';
import { MdRestaurantMenu } from 'react-icons/md';

export default class Navigation extends React.Component {
  render() {
    return (
      <NavbarWrapper>
        <Navbar collapseOnSelect fixed="top" expand="lg" className="navBg">
          <Navbar.Brand>
            <Link to="/">
              <img
                alt=""
                src={logo}
                className="d-inline-block align-top logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle className="btn-color" />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <NavLink>
                <Link to="/order" className="links"><IoMdCart /> Order Food</Link>
              </NavLink>
              <NavLink>
                <Link to="/booktable" className="links"><MdRestaurantMenu /> Book a Table</Link>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </NavbarWrapper>
    );
  }
}

const NavbarWrapper = styled.div`
  .links{
    color:rgba(255,255,255,0.5);
  }
 .links:hover{
   text-decoration:none;
   color:rgba(255,255,255,0.9);
 }
 .btn-color{
   background:rgba(255,255,255,0.5);
   outline-style:none;
  }
  .btn-color:hover{
   background:rgba(255,255,255,0.9)!important;    
  }
 .logo{
   height:80px;
   width:80px;
 }
 @media only screen and (max-width:768px){
   .logo{
     width:60px;
     height:60px;
   }
 }
`