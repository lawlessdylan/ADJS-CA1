/**
 * @Author: dylanlawless
 * @Date:   2019-10-22T19:34:15+01:00
 * @Last modified by:   dylanlawless
 * @Last modified time: 2019-11-08T21:13:57+00:00
 */
import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav'
import { Navbar } from 'react-bootstrap';



class MyNav extends React.Component{

render(){
    return(



        <Navbar className="my-nav" expand="lg"  variant="dark">
        <Navbar.Brand>
              <Link to='/'>
                <h3 className="nav-heading">NEWS</h3>
              </Link>

           </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto testtest">

              <Nav.Item className="navbar-large">
                  <Link to='/'>
                        <div className="navbar-links">MOST RECENT</div>
                  </Link>
              </Nav.Item>

              <Nav.Item className="navbar-large">
                  <Link to='/business'>
                     <div className="navbar-links">BUSINESS</div>
                  </Link>
              </Nav.Item>
              <Nav.Item className="navbar-large" >
                  <Link to='/tech'>
                        <div className="navbar-links">TECHNOLOGY</div>
                  </Link>
              </Nav.Item>
           </Nav>
         </Navbar.Collapse>

        </Navbar>



    );

}


}

export default MyNav;
