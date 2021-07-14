import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const {API_URL} = process.env

/**
 *
 * @param {Bani} bania
 * @returns {JSX.Element}
 * @constructorBani
 */
export default function CardProduct({bania}) {
    return bania.plan_3d && <div className="mb-4 bg-white rounded shadow">
        <Link href={`/bani/project/${bania.slug}`} passHref>
            <a>
                <div className="ratio ratio-4x3">
                    <Image
                        className="rounded"
                        src={API_URL + bania.plan_3d.url}
                        layout="fill"
                        objectFit="contain"
                        sizes="
                        (min-width: 360px) 360px,
                        (min-width: 576px) 640px,
                        (min-width: 768px) 828px,
                        (min-width: 992px) 1000px
                        "
                    />
                </div>
            </a>
        </Link>
        <div className="d-flex justify-content-between px-3 border-top pt-2 pb-1">
            <div>
                <span className="h6 fw-bolder">{`${bania.opt_size_bani_w}x${bania.opt_size_bani_h}`}</span>
                {' '}
                <span>{bania.opt_size_bani_w * bania.opt_size_bani_h}м<sup>2</sup></span>
            </div>
            <div className="letter-btn text-muted">№ {bania.name}</div>
        </div>

        <div className="d-flex justify-content-between pb-3 px-3">
            <div className="d-flex justify-content-between flex-column w-50">
                <div>

                </div>
                <div>
                    <div className="pb-2">
                        {/*<div className="d-flex">*/}
                        {/*    <div className="text-muted text-cross"> {Number(150000).toLocaleString()}</div>*/}
                        {/*    <div className="bg-primary rounded-1 px-2 ms-2 fw-bolder"> -{Number(12000).toLocaleString()}</div>*/}
                        {/*</div>*/}
                        <div className="h5 fw-bold"><small>от</small> {Number(bania.price_1).toLocaleString()} ₽</div>
                    </div>
                    <Link href="/bani/project" passHref>
                        <a className="icon-link">Подробнее<i className="bi bi-chevron-right"></i></a>
                    </Link>
                </div>
            </div>

            <div className="w-50">
                <div className="ratio ratio-4x3">
                    <Image
                        className="rounded"
                        src={API_URL + bania.images[0].url}
                        layout="fill"
                        objectFit="cover"
                        sizes="
                        (min-width: 180px) 180px,
                        (min-width: 360px) 360px,
                        (min-width: 576px) 640px,
                        (min-width: 768px) 828px,
                        (min-width: 992px) 1000px"
                    />
                </div>
            </div>
        </div>
    </div>
}
