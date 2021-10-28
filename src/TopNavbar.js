import React from "react";
import { Navbar,Nav,Container } from "react-bootstrap"
import {Link} from "react-router-dom";

function TopNavbar() {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link> <Link className="text-white text-decoration-none" to="/">Home</Link> </Nav.Link>
                            <Nav.Link> <Link className="text-white text-decoration-none" to="/AddList">Add Todo List</Link> </Nav.Link>
                            <Nav.Link> <Link className="text-white text-decoration-none" to="/ShowList">Show Todo List</Link> </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default TopNavbar;