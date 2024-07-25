import {Dropdown, Navbar, SplitButton} from "react-bootstrap";
import {Container} from "react-bootstrap";
import {Nav} from "react-bootstrap";




export default function Header() {
    return (
        <>
            <Navbar expand="lg" className="nav bg-primary">
                <Container fluid>
                    <Navbar.Brand href="#home">Chicken Tender</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px'}}
                            navbarScroll
                        >
                            <Nav.Link href="#findlove">Find Love</Nav.Link>
                            <Nav.Link href="#matches">Matches</Nav.Link>
                        </Nav>
                            <SplitButton align="end" variant="secondary" title="My Profile">
                                <Dropdown.Item href="profile">See my Profile</Dropdown.Item>
                                <Dropdown.Item href="#account">My account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#logout">Log out</Dropdown.Item>
                            </SplitButton>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
        ;
}