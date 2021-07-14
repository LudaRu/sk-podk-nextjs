import {Row} from "react-bootstrap";
import React, {useState} from "react";
import ChekImgGroup from "../../forms/ChekImgItem";

export default function stepPech(data) {
    const [checked, setChecked] = useState({})

    return {
        component: <StepPechC data={data} checked={checked} setChecked={setChecked}/>,
        checked: checked,
        setChecked: setChecked,
        onNext: (SW) => {
            if (checked.name) {
                if (checked.name === 'Без печки') {
                    SW.goToStep(9)
                } else  {
                    SW.nextStep()
                }
            }
        },
    }
}

/**
 *
 * @param {Kits.печное.печь} data
 * @returns {JSX.Element}
 * @constructorBani
 */
function StepPechC({data, checked, setChecked}) {
    const list = [{
        name: 'Без печки',
        price: 0,
        img: '',
        shortDesc: 'Свой фундамент'
    }]

    data.чугун.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: '',
        shortDesc: el.name,
    }))

    const list2 = []
    data.сталь.forEach(el => list2.push({
        name: el.name,
        price: el.price,
        img: '',
        shortDesc: el.name,
    }))

    return <Row>
        <h3 className="mb-4 text-center">Печи чугунные</h3>
        <ChekImgGroup list={list} checked={checked} setChecked={setChecked}/>
        <h3 className="mb-4 text-center">Печи стальные</h3>
        <ChekImgGroup list={list2} checked={checked} setChecked={setChecked}/>
    </Row>
}
