import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import './nav.css';
import {LinkContainer} from 'react-router-bootstrap';
import { useSelector } from 'react-redux';

const Navigation=(props)=> {
    const isLogin = useSelector((state)=> state.isLogin)

    const isLoggedIn = props.isLoggedIn;
    const id = localStorage.getItem("id");
    const path = "/users/"+id;
    const profile = "Hii "+ localStorage.getItem("username") +"!!";

    const [border, setBorder] = useState("")

    useEffect(() => {
        document.addEventListener("scroll", () => {
            setBorder(window.scrollY > 50 ? "navbar-scroll" : "");
            
          });
    }, [])

    return (
        <Navbar fixed="top" className={border}  collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand>
                <LinkContainer to="/">
                    <Nav.Link>Blog<span>spot</span>{isLogin}</Nav.Link>
                </LinkContainer>  
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <LinkContainer to="/">
                        <Nav.Link className="color">Home</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav>
                
                {!isLoggedIn ? 
                    <Nav.Link >
                        <LinkContainer className="color login" to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                    </Nav.Link> : 
                <NavDropdown title={profile} id="collasible-nav-dropdown">
                    <NavDropdown.Item >
                        <LinkContainer to="/postblog">
                            <Nav.Link>Post Blogs</Nav.Link>
                        </LinkContainer>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                        <LinkContainer to={path}>
                            <Nav.Link>View Blogs</Nav.Link>
                        </LinkContainer>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={props.logout}>Logout</NavDropdown.Item>
                </NavDropdown>
                }
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation
