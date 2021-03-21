import React from 'react';
import Image from "next/image";
import {Col, Container, Row} from "react-bootstrap";

// const {API_URL} = process.env


export default function CatalogItem(bani) {
    return <div className="mb-4 bg-white rounded shadow">
        <div className="ratio ratio-4x3">
            <Image
                className="rounded"
                src="/img/accamera-34-1000x750.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="d-flex justify-content-between px-3 border-top pt-2 pb-1">
            <div><span className="h6 fw-bolder">2x4</span> <span>8м<sup>2</sup></span></div>
            <div className="letter-btn text-muted">№ КБ-12</div>
        </div>

        <div className="d-flex justify-content-between pb-3 px-3">
            <div className="d-flex justify-content-between flex-column w-50">
                <div>

                </div>
                <div>
                    <div className="pb-2">
                        <div className="d-flex">
                            <del className="text-muted"> {Number(150000).toLocaleString()}</del>
                            <div className="bg-secondary rounded-1 px-2 ms-2 fw-bolder"> -{Number(12000).toLocaleString()}</div>
                        </div>
                        <div className="h5 fw-bold">{Number(100000).toLocaleString()} ₽</div>
                    </div>
                    <a href="/">Подробнее</a>
                    {/*<div className="d-grid gap-1 me-3">*/}
                    {/*<button className="btn btn-secondary d-block">Купить</button>*/}
                    {/*</div>*/}
                </div>
            </div>

            <div className="w-50">
                <div className="ratio ratio-4x3">
                    <Image
                        className="rounded"
                        src="/img/1_9-1000x750.png"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    </div>
}
