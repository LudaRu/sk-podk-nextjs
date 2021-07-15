import KitItem from "./kitItem";
import CheckBoxGroup from "../../../../components/forms/ChekBoxItem";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Button, Col, FloatingLabel, Form, Modal} from "react-bootstrap";

export default function Otdelka({data, form, setForm}) {

    const [modalShow, setModalShow] = useState(false);
    const [localCheckList, setLocalCheckList] = useState(false);
    const [summ, setSumm] = useState(false);

    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        console.log(target)

        if (target.type === 'checkbox' ) {
            let x = {...form[name]};

           if (!target.checked && target.value) {
               delete x[target.value]
           } else {
               x[target.value] = true
           }

            setForm({
                ...form,
                [name]: x
            });
        } else  {
            setForm({
                ...form,
                [name]: {[target.value]: true}
            });
        }
    };

    console.log(form)

    // useEffect(() => {
    //     let sum = 0;
    //     const saveCheckOtdelka = {...form};
    //     const checkedSubKit = Object.keys(form);
    //     checkedSubKit.forEach((categ) => {
    //         data[categ].list.forEach(el => {
    //             if(el.name === form[categ]) {
    //                 saveCheckOtdelka[categ] = {};
    //                 saveCheckOtdelka[categ][el.name] = +el.price
    //                 sum += +el.price
    //             }
    //         })
    //     })
    //     setSumm(sum)
    //     setLocalCheckList(saveCheckOtdelka)
    //
    // }, [form])


    const subKits = Object.keys(data);
    const checkedSubKit = Object.keys(form);

    const saveKit = (categ, kitname, isMultiple) => {
        const save = {};
        save[categ] = kitname
        setForm({...form, ...save})
    }

    const onSave = (values) => {
        console.log(values)
        setModalShow(false)
    };

    return (<>
        <div className="p-3 border-bottom">
            <div className="d-flex justify-content-between row">
                <div className="d-flex align-items-center justify-content-between cpoint" onClick={() => setModalShow(true)}>
                    <h5 className="mb-0">Отделка</h5>

                    {!checkedSubKit.length ?
                        <button className="btn btn-primary">
                            Добавить
                        </button>
                    :
                        <div className="d-flex justify-content-between col-12 col-md-4 mt-mb-4">
                            <div>
                                <div
                                    className="me-3 bg-secondary mb-0 px-3 py-2 rounded text-nowrap">+ {Number(summ).toLocaleString()} ₽
                                </div>
                            </div>
                            <div>
                                <button className="btn btn-secondary" onClick={() => setModalShow(true)}>
                                    Изменить
                                </button>
                            </div>
                        </div>
                    }

                </div>
            </div>

            { !!checkedSubKit.length && <div className="list-group list-group-flush">
                {checkedSubKit.map((categ, i) => (
                    <div className="py-1" key={i}>
                        <span className="fw-bold">{categ}: </span>
                        <small>{Object.keys(form[categ])[0]}</small>
                        <small className="rounded bg-secondary px-2 py-1">+{localCheckList?.[categ]?.[Object.keys(form[categ])[0]]}</small>
                    </div>
                ))}
            </div>}
        </div>

        <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">Отделка</Modal.Title>

                {/*<div className="d-flex gap-4">*/}
                {/*    <div className="p-3 bg-secondary">Своими руками</div>*/}
                {/*    <div className="p-3 bg-warning">Дача эконом</div>*/}
                {/*    <div className="p-3 bg-danger">Тёплая премиум</div>*/}
                {/*</div>*/}
            </Modal.Header>
            <Modal.Body>
                {subKits.map((categ) => (<>
                    <h6 className="mt-4 mb-1 mb-0 text-center">{categ}</h6>
                    <div className="border rounded bg-light">
                        {data[categ].list.map((kit, i) => (
                            <div className="p-2 cpoint border-bottom" >
                                <div className="d-flex w-100 justify-content-between">
                                    <div className="text-muted">{kit.name}</div>
                                    <div className="d-flex justify-content-end gap-2" style={{flex: '1 1 auto'}}>
                                        <div className="text-info mb-0">
                                            <span className="badge bg-primary">{kit.price.toLocaleString()} ₽</span>
                                        </div>
                                        <input
                                            name={categ}
                                            className="form-check-input"
                                            type={data[categ].multiple ? 'checkbox' : 'radio'}
                                            value={kit.name}
                                            onChange={handleInputChange}
                                            checked={form[categ] && form[categ][kit.name]}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>))}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onSave}>Сохранить</Button>
                <Button variant="secondary" onClick={() => setModalShow(false)}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    </>)
}