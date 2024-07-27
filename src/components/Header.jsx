import {Dropdown, DropdownButton, Navbar} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="nav bg-primary">
                <Container fluid>
                    <Navbar.Brand href="/">Chicken Tender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link  to="/findlove" as={Link} className="nav-link">Find Love</Nav.Link>
                            <Nav.Link to="/matches" as={Link} className="nav-link">Matches</Nav.Link>
                        </Nav>
                            <DropdownButton className="nav-link" align="end" variant="secondary"  to="/profile" title="My Profile">
                                <Dropdown.Item to="/profile" as={Link} className="nav-link">See my Profile</Dropdown.Item>
                                <Dropdown.Item to="/account" as={Link} className="nav-link">My account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item to="/logout" as={Link} className="nav-link">Log out</Dropdown.Item>
                            </DropdownButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
        ;
}