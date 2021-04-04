import React, {useState} from "react";
import {Col, Row} from "react-bootstrap";
import {AddressSuggestions, FioSuggestions} from "react-dadata";

export function StepOrderForm(props) {
    const [fio, setFio] = useState();
    const [value, setValue] = useState();
    return <div className="bg-white rounded p-3">
        <Row>

            <Col xs={12}>
                <h3 className="mb-4 text-center">Оформление заказа</h3>
            </Col>
            <Col xs={12} md={6}>
                <div className="mb-3">
                    <FioSuggestions
                        count={4}
                        customInput={(props) => (<div className="form-floating">
                            <input {...props} className="form-control" placeholder="ФИО"/>
                            <label>ФИО</label>
                        </div>)}
                        token="9f46cd45926d39ac5aec7f33cf8d5e87d7c11a8a"
                        value={fio}
                        onChange={setFio}
                    />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                    <label>Email</label>
                </div>
            </Col>
            <Col xs={12} md={12}>
                <AddressSuggestions
                    count={4}
                    customInput={(props) => (<div className="form-floating">
                        <input {...props} className="form-control" placeholder="Адрес строительства"/>
                        <label>Адрес строительства</label>
                    </div>)}
                    token="9f46cd45926d39ac5aec7f33cf8d5e87d7c11a8a" value={value} onChange={setValue}/>
            </Col>

            <Col xs={12} md={6}>
                <div className="form-floating mt-3">
                    <input type="phone" className="form-control" placeholder="Телефон"/>
                    <label>Телефон</label>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="form-floating mt-3">
                    <input type="date" className="form-control" placeholder="Начало строительства"/>
                    <label>Начало строительства</label>
                </div>
            </Col>
        </Row>
    </div>;
}
