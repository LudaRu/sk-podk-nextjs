import React from "react";
import Image from 'next/image'
import {Col, Container, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import Link from 'next/link';
import css from './layout.module.scss'

function Footer() {
    return <footer className="footer mt-auto py-3 gr-grey">
        <Container>
            <Row>
                <Col>123</Col>
            </Row>
        </Container>
    </footer>;
}

export default function Layout(props) {
    const {children} = props;
    return (
        <>
            <header>
                <Navs/>
            </header>
            <main style={{minHeight: '100%'}}>
                {children}
            </main>
            <Footer/>
        </>
    )
}


function Navs() {
    return <>
        <Container>
            <Row>
                <Navbar collapseOnSelect expand="lg" className="mt-3 shadow-sm rounded-3 bg-white">
                    <Navbar.Brand href="#home">
                        <div style={{    width: '50px'}}>
                            <Image
                                width="397"
                                height="252"
                                src="/img/logo5.png"
                                layout="responsive"
                            />
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link href="/" passHref>
                                <Nav.Link href="#features">Дом</Nav.Link>
                            </Link>
                            <Link href="/bani" passHref>
                                <Nav.Link href="#features">БАни</Nav.Link>
                            </Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <Link href="/bani" passHref>
                                    <NavDropdown.Item>Action</NavDropdown.Item>
                                </Link>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider/>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Link href="/bani" passHref>
                                <Nav.Link>бани</Nav.Link>
                            </Link>
                            <Nav.Link eventKey={2} href="#memes">
                                Dank memes
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Row>
        </Container>

    </>
}
