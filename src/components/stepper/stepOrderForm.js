import React, {useState} from "react";
import {Button, Col, Form, Row} from "react-bootstrap";
import {AddressSuggestions, FioSuggestions} from "react-dadata";
import {Formik} from 'formik';
import {string, object, bool} from 'yup';

export default function stepOrderForm() {
    const [checked, setChecked] = useState({})

    return {
        component: <FormExample checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

const schema = object().shape({
    firstName: string().required(),
    lastName: string().required(),
    city: string().required(),
    state: string().required(),
    zip: string().required(),
    terms: bool().required().oneOf([true], 'Terms must be accepted'),
});

function FormExample() {
    return (
        <Formik
            validationSchema={schema}
            onSubmit={console.log}
            initialValues={{
                firstName: 'Mark',
                lastName: 'Otto',
                username: '',
                city: '',
                state: '',
                zip: '',
                terms: false,
            }}
        >
            {({
                  handleSubmit,
                  handleChange,
                  handleBlur,
                  values,
                  touched,
                  isValid,
                  errors,
              }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="4" controlId="validationFormik01"  className="position-relative">
                            <div className="form-floating">
                                <Form.Control
                                    placeholder="First name"
                                    type="text"
                                    name="firstName"
                                    value={values.firstName}
                                    onChange={handleChange}
                                    isValid={touched.firstName && !errors.firstName}
                                />
                                <Form.Label>First name</Form.Label>
                                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
                            </div>
                        </Form.Group>
                        <Form.Group as={Col} md="4" controlId="validationFormik02">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={values.lastName}
                                onChange={handleChange}
                                isValid={touched.lastName && !errors.lastName}
                            />

                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} md="6" controlId="validationFormik03">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="City"
                                name="city"
                                value={values.city}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.city}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik04">
                            <Form.Label>State</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="State"
                                name="state"
                                value={values.state}
                                onChange={handleChange}
                                isInvalid={!!errors.state}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.state}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col} md="3" controlId="validationFormik05">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Zip"
                                name="zip"
                                value={values.zip}
                                onChange={handleChange}
                                isInvalid={!!errors.zip}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.zip}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            name="terms"
                            label="Agree to terms and conditions"
                            onChange={handleChange}
                            isInvalid={!!errors.terms}
                            feedback={errors.terms}
                            id="validationFormik0"
                        />
                    </Form.Group>
                    <Button type="submit">Submit form</Button>
                </Form>
            )}
        </Formik>
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
