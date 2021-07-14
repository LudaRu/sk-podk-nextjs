import React, {useState} from "react";
import CheckBoxGroup from "../../forms/ChekBoxItem";
const {API_URL} = process.env

export default function stepFund(data, baniSelectors) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepFundamentC data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => checked.name && SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.фундамент} fundament
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructorBani
 */
function StepFundamentC({data, checked, setChecked}) {

    const list = [{
        name: 'нет',
        price: 0,
        img: '',
        shortDesc: 'Свой фундамент'
    }]
    data.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: el.img,
        shortDesc: el.short_desk,
        more: el.more,
        id: el.id,
    }))

    return <>
        <h3 className="mb-4 text-center">Фундамент</h3>
        <CheckBoxGroup list={list} checked={checked} setChecked={setChecked}/>
    </>
}
