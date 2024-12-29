import { Container, Row, Col } from "react-bootstrap";
import "./Home.css"

function Home(){
    return(
        <div>
            <Container fluid="md">
                <Row>
                    <Col>1 of 2</Col>
                    <Col xs={6}>2 of 2</Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
            </Container>
        </div>

    );
}

export default Home;