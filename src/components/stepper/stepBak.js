import React, {useState} from "react";
import CheckBoxGroup from "../forms/ChekBoxItem";

export default function stepBak(data) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepBakC data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.печное.бак} fundament
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructor
 */
function StepBakC({data, checked, setChecked}) {

    const list = [{
        name: 'нет',
        price: 0,
        img: '',
        shortDesc: 'Свой фундамент'
    }]
    data.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: '',
        shortDesc: el.name,
    }))

    return <>
        <h3 className="mb-4 text-center">Бак для воды</h3>
        <CheckBoxGroup list={list} checked={checked} setChecked={setChecked}/>
    </>
}
