import SwipeButtons from "./SwipeButtons.jsx";
import {
    Card, CardImg, Col, Row
} from "react-bootstrap";

// import profile from "assets/temporary-profiles.json";

export default function CardProfile() {
    const profilePicture = ["https://blog.eggcartonstore.com/wp-content/uploads/2021/11/Chickens-for-Blog1.png"];

    return (<>


                    <Card style={{ height: "40rem", background: "#F6F6F6"}}>
                        <CardImg src={profilePicture} variant="top" className="px-0 py-4" alt="Profile Picture"
                                 style={{height: 380, width: 380, margin: "auto", borderRadius: "7% / 13%"}}/>
                        <Card.Body className=" py-0">
                            <Row>
                                <Col>
                                    <Card.Title className="text-start"> Chickens Name </Card.Title>
                                </Col>
                                <Col>
                                    <Card.Subtitle className="text-end mt-auto"> Chickens Race </Card.Subtitle>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Card.Subtitle className="text-start py-2"> Chickens Age </Card.Subtitle>
                                </Col>

                            </Row>
                            <p className="py-2"> Chickens life description and other details convallis vel feugiat nonumes detraxit contentiones  </p>
                        </Card.Body>
                        <Card.Body>

                            <SwipeButtons/>
                        </Card.Body>
                    </Card>


    </>
    )
}