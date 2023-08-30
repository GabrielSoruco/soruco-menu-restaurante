import { useState } from "react"
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap"


function CustomNavbar() {
    const [isAdministrator] = useState(true)
    const [isLogged] = useState(false)


    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Home Burger</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Menu</Nav.Link>

                        {
                            (isAdministrator) && (
                                
                                <Nav.Link href="/administration">Admin</Nav.Link>

                            )   
                        }
                        <Nav.Link href="/order">Hace tu pedido</Nav.Link>
                        <NavDropdown title="Redes sociales" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Instagram</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Tik tok</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Twitter
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                {
                    (isLogged) ? (
                        <Nav.Link href="/logout" className="text-dark me-2">Logout</Nav.Link>
                    ) : (
                        <>
                            <Nav.Link href="/login" className="text-dark me-2">Login</Nav.Link>
                            <Nav.Link href="/register" className="text-dark">Registrarse</Nav.Link>
                        </>
                    )
                }
            </Container>
        </Navbar>
    )
}

export default CustomNavbar