import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import React, {useState} from "react";
import CardProduct from "../../components/cardProduct/cardProduct";

export default function ConstructorBani({baniBySizes}) {
    const [selectSize, setSelectSize] = useState(false);

    const onSelectSize = (event) => {
        console.log(event.target.value)
        setSelectSize(event.target.value)
    }

    const sizes = Object.keys(baniBySizes)
    return (<>
        <Container>
            <Row className="pt-2">
                <Col xs={12}>
                    <FloatingLabel controlId="floatingSelect" label="Размер">
                        <Form.Select onChange={onSelectSize} defaultValue={selectSize}>
                            <option value={false} disabled>Выберите размер</option>
                            {sizes.map((el, i) => (
                                <option key={i} value={el}>{el}</option>
                            ))}
                        </Form.Select>
                    </FloatingLabel>
                </Col>
            </Row>

            {selectSize && <>
                <Row className="pt-5 pb-4">
                    {baniBySizes[selectSize].map(bania => (
                        <Col xs={12} md={4} key={bania.id}>
                            <CardProduct bania={bania}/>
                        </Col>
                    ))}
                </Row>
            </>}
        </Container>
    </>);
}
