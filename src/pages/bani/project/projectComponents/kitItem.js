import Image from "next/image";
import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";

const {API_URL} = process.env

export default function KitItem({checked, modalBody, modalTitle, modalShow, setModalShow}) {

    return (<>
        <div className="p-3 border-bottom">
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
                                <div><small className="text-grey">{modalTitle}</small>: <span>{checked.name}</span>
                                </div>
                                <div className="text-grey">
                                    <small>{checked.shortDesc}</small>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between col-12 col-md-4 mt-mb-4">
                            <div>
                                <div
                                    className="me-3 bg-secondary mb-0 px-3 py-2 rounded text-nowrap">+{Number(checked.price).toLocaleString()} ₽
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
                        <h5 className="mb-0">{modalTitle}</h5>
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
            centered
            scrollable
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{modalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{modalBody}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setModalShow(false)}>Отмена</Button>
            </Modal.Footer>
        </Modal>
    </>);
}
