import React, {useState} from "react";
import CheckBoxGroup from "../forms/ChekBoxItem";

export default function stepFireSave(data) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepFireSaveC data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.пожарная} data
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructor
 */
function StepFireSaveC({data, checked, setChecked}) {

    const list = []
    data.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: '',
        shortDesc: el.name,
    }))

    return <>
        <h3 className="mb-4 text-center">Пожарная безопасность</h3>
        <CheckBoxGroup list={list} checked={checked} setChecked={setChecked}/>
    </>
}
