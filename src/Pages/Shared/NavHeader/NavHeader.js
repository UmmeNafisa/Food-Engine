import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth'
import './Header.css'
import logo from '../../../Images/download.png'

const NavHeader = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar sticky="top" className="nav-bg " collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='d-flex align-items-center'>
                        <img
                            src={logo}
                            width="90"
                            height="80"
                            className="d-inline-block align-top"
                            alt="Food Engine logo"
                        />
                        <h3 className='text-white'> Food Engine </h3>
                    </Navbar.Brand >
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end nav-link" id="responsive-navbar-nav">
                        <Nav.Link as={Link} to="/home" className="text-white fw-bold header-front" >HOME</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about" className="text-white fw-bold header-front" >ABOUT</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#packages" className="text-white fw-bold header-front" >PACKAGES</Nav.Link>
                        <Nav.Link as={Link} to="/clientDashboard" className="text-white fw-bold header-front" >CLIENT SIDE</Nav.Link>

                        <Nav.Link as={Link} to="/adminDashboard" className="text-white fw-bold header-front"> ADMIN SIDE </Nav.Link>

                        {user?.email || user?.name ?
                            <Button onClick={logOut} varient="light" className="btn btn-all text-white fw-bold"> LOGOUT</Button> : <Nav.Link as={Link} to="/clientLogin"><Button varient="light" className="btn btn-all text-white fw-bold"> Client Login</Button> </Nav.Link>
                        }
                        {(user?.email || user?.name) && <div>
                            <Navbar.Text>
                                <Link to="/profile" className="text-decoration-none fw-bold px-2 text-white">{user?.displayName}</Link>
                                <img className="user-img" src={user?.photoURL} alt="" />
                            </Navbar.Text>
                        </div>
                        }

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavHeader;