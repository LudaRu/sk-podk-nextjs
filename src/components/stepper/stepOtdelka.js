import ListGroup from "../forms/ListGroup";
import React from "react";

/**
 *
 * @param {Kits.отделка} otdelka
 * @returns {JSX.Element}
 * @constructor
 */
export function StepOtdelka({otdelka}) {
    const list = [
        {
            title: <>Отделка не нужна <span className="badge bg-primary fw-bold">0 ₽</span></>,
            description: <>
                <small>Отделка своими руками</small>
            </>
        },
        {
            title: <>Отделка комфорт <span className="badge bg-primary fw-bold">+{otdelka.комфорт.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {otdelka.комфорт.items.map(el => <li className="list-group-item bg-transparent">{el.name}</li>)}
                </ul>
            </>
        },
        {
            title: <>Отделка премиум <span className="badge bg-primary fw-bold">+{otdelka.премиум.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {otdelka.комфорт.items.map(el => <li className="list-group-item bg-transparent">{el.name}</li>)}
                </ul>
            </>
        },
        {
            title: <>Отделка люкс <span className="badge bg-primary fw-bold">+{otdelka.люкс.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {otdelka.комфорт.items.map(el => <li className="list-group-item bg-transparent" >{el.name}</li>)}
                </ul>
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Отделка под ключ</h3>
        <ListGroup list={list}/>
    </>
}
