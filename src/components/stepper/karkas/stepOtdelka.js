import React, {useState} from "react";
import CheckBoxGroup from "../../forms/ChekBoxItem";

export default function stepFund(data) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepOtdelka data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.отделка} data
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructorBani
 */
function StepOtdelka({data, checked, setChecked}) {

    const list = [
        {
            name: 'Не нужна',
            price: 0,
            img: '',
            shortDesc: 'Отделка своими руками',
        },
        {
            name: 'Комфорт',
            price: +data.комфорт.price,
            img: '',
            shortDesc: '-----',
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                {data.комфорт.items.map(el => <li key={el.name} className="list-group-item bg-transparent">{el.name}</li>)}
            </ul>
        },
        {
            name: 'Премиум',
            price: +data.премиум.price,
            img: '',
            shortDesc: '-----',
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                {data.премиум.items.map(el => <li key={el.name} className="list-group-item bg-transparent">{el.name}</li>)}
            </ul>
        },
        {
            name: 'Люкс',
            price: +data.люкс.price,
            img: '',
            shortDesc: '-----',
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                {data.люкс.items.map(el => <li key={el.name} className="list-group-item bg-transparent">{el.name}</li>)}
            </ul>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Отделка</h3>
        <CheckBoxGroup list={list} checked={checked} setChecked={setChecked}/>
    </>
}
