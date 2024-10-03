import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import DangNhap from '../pages/DangNhap';
import React, { useState } from 'react'; 

const Header = () => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);


    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid className="d-flex justify-content-between align-items-center">
                <div className='d-flex align-items-center ms-3'>
                    <img
                        src={`${process.env.PUBLIC_URL}/Logo RFID NAMVIET.png`}
                        alt="RFID Nam Viet"
                        className="img-fluid me-2"
                        style={{ width: '50px', height: 'auto' }}
                    />
                    <Navbar.Brand as={Link} to="/">RFID Nam Viet</Navbar.Brand>
                </div>
                <div className='me-3'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/xulydulieu">Statistical</Nav.Link>

                            <Nav.Link onClick={handleShow}>
                                Login <i className="fa-solid fa-user"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    
                    {show && <DangNhap handleShow={handleShow} />}
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
