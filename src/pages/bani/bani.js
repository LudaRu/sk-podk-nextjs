import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import CardProduct from "../../components/cardProduct/cardProduct";

export default function BaniPage(props) {
    return (
        <>
            <div className="pt-3 pb-3">
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h1>Каркасные бани</h1>
                        </Col>
                        <Col xs={12}>
                            <div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput"
                                           placeholder="Поиск"/>
                                    <label htmlFor="floatingInput">Поиск</label>
                                </div>
                            </div>
                            <div className="d-flex flex-wrap">
                                <div className="me-2 mb-2">Размер бани:</div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">3x3</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">3x4</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">4x4</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">4x6</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">5x5</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">5x6</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">6x6</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">6x7</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">6x8</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">6x9</div>
                                </div>
                                <div className="h4">
                                    <div className="badge bg-secondary me-2 mb-2 px-4 border">7x7</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="bg-light pt-5 pb-4">
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
            </div>
        </>
    )
}

