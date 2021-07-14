import {Button, Modal} from "react-bootstrap";
import CheckBoxGroup from "../../../../components/forms/ChekBoxItem";
import React, {useEffect, useState} from "react";
import Image from "next/image";

const {API_URL} = process.env

export default function ModalSingleCheck(props) {
    const [checked, setChecked] = useState({})
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {

    }, [checked])

    const onChecked = (val) => {
        const resultPrice = props.price - (checked.price || 0) + val.price;
        props.setPrice(resultPrice)
        setChecked(val);
        setModalShow(false)
    }

    const list = []

    if (props.data) {
        list.push({
            name: 'нет',
            price: 0,
            img: '',
            shortDesc: ''
        })
        props.data.forEach(el => list.push({
            name: el.name,
            price: el.price,
            img: el.img,
            shortDesc: el.short_desk,
            more: el.more,
            id: el.id,
        }))
    } else if (props.list) {
        props.list.forEach(item => {
            const subList = []
            item.data.forEach(el => {
                subList.push({
                    name: el.name,
                    price: el.price,
                    img: el.img,
                    shortDesc: el.short_desk,
                    more: el.more,
                    id: el.id,
                })
            })

            list.push({
                title: item.title,
                list: subList,
            })
        })
    } else if (props.otdelka) {

        props.otdelka.forEach(item => {
            const shortDesc = [<div className="mt-4">{item.data.items.map(row => (
                <p className="">{row.category}: {row.name}</p>
            ))}</div>]
            list.push({
                name: item.title,
                price: item.data.price,
                shortDesc: shortDesc
            })
        })
    }


    return (
        <>
            <div className="p-3 rounded mb-4 bg-white shadow-sm">
                <div className="d-flex justify-content-between row">
                    {checked.name && checked.name !== 'нет' ?
                        <>
                            <div className="d-flex col-12 col-md-8">
                                {checked.img && checked.img.url &&
                                <div className="d-none d-lg-block ratio ratio-1x1 bg-secondary rounded border me-4"
                                     style={{width: '60px'}}>
                                    <Image
                                        className="rounded"
                                        src={API_URL + checked.img.url}
                                        layout="fill"
                                        objectFit="cover"
                                        sizes="(min-width: 50) 50px,"
                                    />
                                </div>
                                }
                                <div className="d-flex flex-column justify-content-center">
                                    <div><small className="text-grey">{props.title}</small>: <span>{checked.name}</span>
                                    </div>
                                    <div className="text-grey">
                                        <small>{checked.shortDesc}</small>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between col-12 col-md-4 mt-mb-4">
                                <div>
                                    <div
                                        className="me-3 bg-secondary mb-0 px-3 py-2 rounded text-nowrap">+ {Number(checked.price).toLocaleString()} ₽
                                    </div>
                                </div>
                                <div>
                                    <button className="btn btn-secondary" onClick={() => setModalShow(true)}>
                                        Изменить
                                    </button>
                                </div>
                            </div>
                        </>
                        : <div className="d-flex align-items-center justify-content-between cpoint" onClick={() => setModalShow(true)}>
                            <h5 className="mb-0">{props.title}</h5>
                            <button className="btn btn-primary">
                                Добавить
                            </button>
                        </div>
                    }
                </div>
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
                    <Modal.Title id="contained-modal-title-vcenter">{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.data || props.otdelka ?
                        <CheckBoxGroup list={list} checked={checked} setChecked={onChecked}/> :
                        <>
                            {list.map((el, i) => (
                                <div key={i}>
                                    <p>{el.title}</p>
                                    <CheckBoxGroup list={el.list} checked={checked} setChecked={onChecked}/>
                                </div>
                            ))}
                        </>
                    }

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setModalShow(false)}>Отмена</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
