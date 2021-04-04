import React from "react";
import ListGroup from "../forms/ListGroup";

/**
 *
 * @param {Kits.пожарная} data
 * @returns {JSX.Element}
 * @constructor
 */
export function StepFireSave({data}) {
    const list = []

    data.forEach(el => list.push({
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    return <>
        <h3 className="mb-4">Пожарная бпасность</h3>
        <ListGroup list={list}/>
    </>
}
