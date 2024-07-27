import {Col, Container, FormGroup, Row} from "react-bootstrap";
import ProfilePicture from "../components/ProfilePicture.jsx";

export default function Profile() {
    return (
        <>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center align-items-center bg-dark" >
                            <Col>
                                <ProfilePicture/>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <label htmlFor="">About me...</label>
                                    <textarea className="form-control" id=""
                                              rows="6" cols="10">

                                    </textarea>
                                </FormGroup>
                            </Col>
                    </Col>
                </Row>
            </Container>
        </>
    )
}