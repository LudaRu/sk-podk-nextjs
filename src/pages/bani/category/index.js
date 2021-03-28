import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CardProduct from "../../../components/cardProduct/cardProduct";

export default function CategoryPage(props) {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CardProduct/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

