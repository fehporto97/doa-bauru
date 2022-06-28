import { Col, Row } from "react-bootstrap";
import Card from "../telas/Card.jsx";

function DestaqueCards({ongs}) {
    return (
        <Row>
            {ongs.map((ong) => (<Col md={3}><Card img={ong.photo} title={ong.name}/></Col>))}
        </Row>
    );
}

export default DestaqueCards;