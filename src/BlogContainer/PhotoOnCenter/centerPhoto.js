import React from 'react';
import { Image, Row, Col, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import './PhotoCenter.css';
export default function CenterPhoto() {

    return (
        <div className="centerPhoto">
            <Container>
                <Row>
                    <Col xs={6} md={4}>
                        <Image src={"/images/centerph.jpg"} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

