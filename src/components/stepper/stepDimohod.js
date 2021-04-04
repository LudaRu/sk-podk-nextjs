import React from "react";
import ListGroup from "../forms/ListGroup";

/**
 *
 * @param {Kits.печное.дымоход} dimohod
 * @returns {JSX.Element}
 * @constructor
 */
export function StepDimohod({dimohod}) {
    const list = []

    dimohod.forEach(el => list.push({
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    return <>
        <h3 className="mb-4 text-center">Дымоход</h3>
        <ListGroup list={list}/>
    </>
}
