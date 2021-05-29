import React, {useState} from "react";
import CheckBoxGroup from "../../forms/ChekBoxItem";

export default function stepObustroistvo(data) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepObustroistvoC data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.печное.обустройство} data
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructor
 */
function StepObustroistvoC({data, checked, setChecked}) {

    const list = []
    data.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: '',
        shortDesc: el.name,
    }))

    return <>
        <h3 className="mb-4 text-center">Установка печи</h3>
        <CheckBoxGroup list={list} checked={checked} setChecked={setChecked}/>
    </>
}
