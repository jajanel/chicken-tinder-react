import HeartButton from "./HeartButton.jsx";
import {Button, Col, Row} from "react-bootstrap";

export default function SwipeButtons(){
return(
    <>
        <Row className="m-auto">
            <Col className="d-flex align-items-center justify-content-center">
                <Button className="btn btn-light btn-xl btn-circle "
                        id="left" style={{width: "70%"}}>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"
                         fillRule="evenodd" clipRule="evenodd">
                        <path
                            d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                    </svg>
                </Button>
            </Col>
            <Col></Col>
            <Col className="d-flex align-items-center justify-content-center">
                <Button className="btn btn-light btn-xl btn-circle  d-flex align-items-center justify-content-center" id="right">
                    <HeartButton/>
                </Button>
            </Col>
        </Row>
    </>
)
}