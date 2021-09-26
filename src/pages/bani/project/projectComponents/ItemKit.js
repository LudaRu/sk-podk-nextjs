import KitItem from "./kitItem";
import CheckBoxGroup from "../../../../components/forms/ChekBoxItem";
import React, {useEffect, useState} from "react";
import Image from "next/image";
import {Button, Col, FloatingLabel, Form, Modal} from "react-bootstrap";

export default function ItemKit({data, title, form, setForm}) {

    const [modalShow, setModalShow] = useState(false);
    const [localCheckList, setLocalCheckList] = useState(false);
    const [summ, setSumm] = useState(0);

    const dataKeys = Object.keys(data);
    const formKeys = Object.keys(form);


    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;

        if (target.type === 'checkbox') {
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
        } else {
            setForm({
                ...form,
                [name]: {[target.value]: true}
            });
        }
    };

    useEffect(() => {
        let sum = 0;
        for (const categKey in form) {
            for (const itemKey in form[categKey]) {
                sum += data[categKey].list[itemKey]
            }
        }
        setSumm(sum);
    }, [form])

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


    const saveKit = (categ, kitname, isMultiple) => {
        const save = {...form};

        if (isMultiple) {
            if (save[categ] && save[categ][kitname] !== undefined) {
                delete save[categ][kitname]
                if (Object.keys(save[categ]).length === 0) {
                    delete save[categ]
                }
            } else {
                if (!save[categ]) {
                    save[categ] = {};
                }
                save[categ][kitname] = true
            }

            console.log(save)
            setForm({
                ...save
            });
        } else {
            save[categ] = {[kitname]: true}

            setForm({
                ...save
            });
        }
    }

    const onSave = (values) => {
        setModalShow(false)
    };

    return (<>
        <div className="p-3 border-bottom">
            <div className="d-flex justify-content-between row">
                <div className="d-flex align-items-center justify-content-between cpoint"
                     onClick={() => setModalShow(true)}>
                    {!formKeys.length && <>
                        <h5 className="mb-0">{title}</h5>
                        <button className="btn btn-primary">
                            Добавить
                        </button>
                    </>
                    }
                </div>
            </div>
            <RenderViewKits
                title={title}
                form={form}
            />

            {!!formKeys.length && <div className="d-flex justify-content-between mt-3">
                <div>
                    <div
                        className="me-3 bg-secondary mb-0 px-3 py-2 rounded text-nowrap">+{Number(summ).toLocaleString()} ₽
                    </div>
                </div>
                <div>
                    <button className="btn btn-secondary" onClick={() => setModalShow(true)}>
                        Изменить
                    </button>
                    <small className="d-block text-end text-danger cpoint" onClick={() => {
                        setForm({})
                    }}>
                        <i className="bi bi-x"></i>удалить
                    </small>
                </div>
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
                <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {dataKeys.map((categKey, j) => (<React.Fragment key={j}>
                    {<h6 className="mt-4 mb-1 mb-0 text-center">{categKey}</h6>}
                    <div className="border rounded bg-light">
                        {Object.keys(data[categKey].list).map((itemKey, i) => (
                            <React.Fragment key={i}>
                                <label className="p-2 cpoint border-bottom d-block">
                                    <div className="d-flex w-100 justify-content-between">
                                        <div className="">{itemKey}</div>
                                        <div className="d-flex justify-content-end gap-2" style={{flex: '1 1 auto'}}>
                                            <div className="text-info mb-0">
                                                <span
                                                    className="badge bg-primary">{data[categKey].list[itemKey].toLocaleString()} ₽</span>
                                            </div>
                                            <input
                                                name={categKey}
                                                className="form-check-input"
                                                type={data[categKey].multiple ? 'checkbox' : 'radio'}
                                                value={itemKey}
                                                checked={form[categKey] && form[categKey][itemKey]}
                                                onChange={() => saveKit(categKey, itemKey, data[categKey].multiple)}
                                            />
                                        </div>
                                    </div>
                                </label>
                            </React.Fragment>
                        ))}
                    </div>
                </React.Fragment>))}

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onSave}>Сохранить</Button>
                <Button variant="secondary" onClick={() => setModalShow(false)}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    </>)
}

function RenderViewKits({form, title}) {
    console.log('form', form)
    const dataKeys = Object.keys(form);

    return <>
        {!!dataKeys.length && <div className="list-group list-group-flush">
            {
                dataKeys.length > 1
                    ? <>
                        <p className="h5">{title}</p>
                        {dataKeys.map((categ, i) => (
                            <div className="py-2 ps-2" key={i}>
                                <p className="mb-0 text-black">{categ}:</p>
                                {form[categ] && Object.keys(form[categ]).length > 1
                                    ? Object.keys(form[categ]).map(elem => (
                                        <small className="d-block"><i className="bi bi-check-circle text-success"></i> {elem}</small>
                                    ))
                                    :  <small className="d-block">{Object.keys(form[categ])[0]}</small>
                                }
                            </div>
                        ))}
                    </>
                    : <>
                        {dataKeys.map((categ, i) => (
                            <div className="py-1" key={i}>
                                <p className="h5">{categ}</p>
                                {form[categ] && Object.keys(form[categ]).length > 1
                                    ? Object.keys(form[categ]).map(elem => (
                                        <small className="d-block"><i className="bi bi-check-circle text-success"></i> {elem}</small>
                                    ))
                                    : <small className="d-block ps-2"> {<>{Object.keys(form[categ])[0]}</>} </small>
                                }
                            </div>
                        ))}
                    </>
            }
        </div>}
    </>;
}
