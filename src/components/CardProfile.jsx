import SwipeButtons from "./SwipeButtons.jsx";
import {
    Card, CardImg, Col, Row
} from "react-bootstrap";
import ProfilePicture from "./ProfilePicture.jsx";

// import profile from "assets/temporary-profiles.json";

export default function CardProfile({nom, race, age, description, src}) {

    return (<>


            <Card style={{height: "40rem", background: "#F6F6F6", width:"448px"}}>
                <CardImg src={src} variant="top" className="px-0 py-4" alt="Profile Picture"
                         style={{height: 380, width: 380, margin: "auto", borderRadius: "7% / 13%"}}/>
                <Card.Body className=" py-0">
                <Row>
                    <Col>
                        <Card.Title className="text-start"> {nom} </Card.Title>
                    </Col>
                    <Col>
                        <Card.Subtitle className="text-end mt-auto"> {race}</Card.Subtitle>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card.Subtitle className="text-start py-2"> Age: {age} </Card.Subtitle>
                    </Col>

                </Row>
                <p className="py-2"> {description} </p>
            </Card.Body>
                <Card.Body>

                    <SwipeButtons/>
                </Card.Body>
            </Card>


        </>
    )
}