import SwipeButtons from "./SwipeButtons.jsx";
import {
    Card, CardImg, Col, Container, Row
} from "react-bootstrap";

export default function CardProfile() {
    const profilePicture = ["https://blog.eggcartonstore.com/wp-content/uploads/2021/11/Chickens-for-Blog1.png"];

    return (<>
        <Container>
            <Row>
                <Col>

                    <Card border="light">
                        <CardImg src={profilePicture} variant="top" className="rounded-circle" alt="Profile Picture"
                                 style={{height: 400, width: 400}}/>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <Card.Title className="text-start"> Chickens Name </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Subtitle className="text-end mt-auto"> Chickens Age </Card.Subtitle>
                                </Col>
                            </Row>
                            <Card.Text>
                                Chickens life description and other details
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>

                            <SwipeButtons/>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>
    </>
    )
}