import React from "react";
import ListGroup from "../forms/ListGroup";

/**
 *
 * @param {Kits.печное.бак} bak
 * @param {Kits.печное.обустройство} obustroy
 * @returns {JSX.Element}
 * @constructor
 */
export function StepBak({bak, obustroy}) {
    const list = []

    bak.forEach(el => list.push({
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    const list2 = []

    obustroy.forEach(el => list2.push({
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    return <>
        <h3 className="mb-4 text-center">Установка печного оборудования</h3>
        <ListGroup list={list2}/>

        <h3 className="my-4 text-center">Бак для воды</h3>
        <ListGroup list={list}/>
    </>
}
