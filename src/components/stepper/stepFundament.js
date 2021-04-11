import ListGroup from "../forms/ListGroup";
import React from "react";

/**
 *
 * @param {Kits.фундамент} fundament
 * @returns {JSX.Element}
 * @constructor
 */
export function StepFundament({fundament}) {
    const list = [
        {
            title: <><span className="badge bg-primary fw-bold">0 ₽</span></>,
            description: <>
                <div>Свой фундамент</div>
            </>
        },
    ]

    fundament.forEach(el => list.push({
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name}</div>
    }))

    return <>
        <h3 className="mb-4 text-center">Фундамент</h3>
        <ListGroup list={list}/>
    </>
}
