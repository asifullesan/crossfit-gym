import React from 'react';
import './NavSection.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../Image/Logo/logo.png'
import { Link } from 'react-router-dom';
const NavSection = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img src={logo} alt=''/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link className='nav-option' as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/about-us' >About</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/cross-fit' >CrossFit</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/fitness' >Fitness</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/trainers' >Trainers</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/testimonials' >Testimonials</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/' >Blog</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/' >Shop</Nav.Link>
                            <Nav.Link className='nav-option' as={Link} to='/contact' >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavSection;