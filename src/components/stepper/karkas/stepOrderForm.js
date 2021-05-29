import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {AddressSuggestions, FioSuggestions} from "react-dadata";
import {Formik, useFormik} from 'formik';
import {string, object, bool} from 'yup';

export default function stepOrderForm() {
    const [checked, setChecked] = useState({})

    const schema = object().shape({
        fio: string().required(),
        email: string().email().required(),
        address: string().required(),
        phone: string().required(),
        date: string().required(),
    });

    const formik = useFormik({
        initialValues: {
            fio: '',
            email: '',
            address: '',
            phone: '',
            date: '',
        },
        validationSchema: schema,
        handleSubmit: values => {},
    });


    return {
        component: <FormExample formik={formik} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        nextParams: {
            type: 'submit',
            form: 'formMy',
        },
        onNext: (SW) => {
            formik.validateForm().then((err) => {
                if (!Object.keys(err).length) {
                    SW.nextStep()
                } else {
                    console.log('errr')
                }
            })

            // formik.handleSubmit
            // SW.nextStep()
        },
    }
}


function FormExample({formik}) {
    return (
        <Form noValidate id="formMy" onSubmit={formik.handleSubmit} className="p-3 bg-white rounded shadow-sm">
            <Row className="mb-3">
                <Col xs={12}>
                    <h4 className="mb-4">Оформить заказ</h4>
                </Col>

                <Form.Group as={Col} md="6" controlId="validationFormik01" className="position-relative mb-3">
                    <div className="form-floating">
                        <Form.Control
                            placeholder="ФИО"
                            type="text"
                            name="fio"
                            value={formik.values.fio}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.fio && !!formik.errors.fio}
                            isValid={formik.touched.fio && !formik.errors.fio}
                        />
                        <Form.Label>ФИО</Form.Label>
                    </div>
                </Form.Group>

                <Form.Group as={Col} md="6" controlId="validationFormik02" className="position-relative mb-3">
                    <div className="form-floating">
                        <Form.Control
                            placeholder="E-mail"
                            type="text"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.email && !!formik.errors.email}
                            isValid={formik.touched.email && !formik.errors.email}
                        />
                        <Form.Label>E-mail</Form.Label>
                    </div>
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationFormik032" className="position-relative mb-3">
                    <div className="form-floating">
                        <Form.Control
                            type="text"
                            placeholder="Адрес строительства"
                            name="address"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.address && !!formik.errors.address}
                            isValid={formik.touched.address && !formik.errors.address}
                        />
                        <Form.Label>Адрес строительства</Form.Label>
                    </div>
                </Form.Group>

                <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormi71503"
                    className="position-relative mb-3"
                >
                    <div className="form-floating">
                        <Form.Control
                            type="text"
                            placeholder="Телефон"
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.phone && !!formik.errors.phone}
                            isValid={formik.touched.phone && !formik.errors.phone}
                        />
                        <Form.Label>Телефон</Form.Label>
                    </div>
                </Form.Group>

                <Form.Group
                    as={Col}
                    md="6"
                    controlId="validationFormik103"
                    className="position-relative mb-3"
                >
                    <div className="form-floating">
                        <Form.Control
                            type="date"
                            placeholder="Дата строительства"
                            name="date"
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            isInvalid={formik.touched.date && !!formik.errors.date}
                            isValid={formik.touched.date && !formik.errors.date}
                        />
                        <Form.Label>Дата строительства</Form.Label>
                    </div>
                </Form.Group>
            </Row>
        </Form>
    );
}

function StepOrderFormC2({checked, setChecked}) {
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
    </div>
}
