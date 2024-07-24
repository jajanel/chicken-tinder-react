import {Modal, Button, Col, Row, Container, Card} from "react-bootstrap";
import HeartButton from "./HeartButton.jsx";


export default function Match() {

    return (<Container>
        <div
            className="modal show match-modal"
            style={{display: 'block', position: 'initial'}}
        >

            <Modal.Dialog>
                <Card>
                    <Card.Header className="text-center text-uppercase">
                        <Card.Title className="py-3 "> <strong> Its a match !</strong></Card.Title>
                        <Card.Subtitle> You and Chicken like each other </Card.Subtitle>
                    </Card.Header>

                    <Modal.Body className="text-center m-auto">


                        <Row style={{height: "18rem"}}>
                            <Col className="m-auto ">
                                <img
                                    src="https://blog.eggcartonstore.com/wp-content/uploads/2021/11/Chickens-for-Blog1.png"
                                    alt="Profile Picture"
                                    className=" d-flex align-items-center justify-content-center"
                                    style={{height: 170, width: 170, margin: "auto", borderRadius: "50%"}}
                                />
                            </Col>
                            <Col> </Col>
                            <Col className="m-auto ">
                                <img
                                    src="https://cdn.pixabay.com/photo/2022/10/14/16/17/cockscomb-7521639_1280.jpg"
                                    alt="Profile Picture"
                                    className=" d-flex align-items-center justify-content-center"
                                    style={{height: 170, width: 170, margin: "auto", borderRadius: "50%"}}
                                />
                            </Col>
                        </Row>

                    </Modal.Body>

                    <Modal.Body>
                        <Col className="m-auto ">
                            <Row className="d-flex align-items-center justify-content-center p-2">
                                <Button variant="primary match-button p-3 text-uppercase" style={{width: "70%"}}> <strong> Send a
                                    message </strong></Button>

                            </Row>

                            <Row className="d-flex align-items-center justify-content-center p-2">
                                <Button data-mdb-dismiss="modal" variant="secondary p-3 text-uppercase " style={{width: "70%"}}>
                                    <strong>
                                        Keep swiping
                                    </strong></Button>

                            </Row>
                        </Col>
                    </Modal.Body>
                </Card>
            </Modal.Dialog>
        </div>
    </Container>);

}