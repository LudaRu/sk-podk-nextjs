import {Row} from "react-bootstrap";
import ImgSelector from "../forms/imgSelector";
import React from "react";

/**
 *
 * @param {Kits.печное.печь} pech
 * @returns {JSX.Element}
 * @constructor
 */
export function StepPech({pech}) {

    const list1 = [
        {
            img: '/img/Kukish_or_fig.jpeg',
            title: <>
                <h5><span className="badge bg-primary fw-bold">0 ₽</span></h5>
                <div className="text-info">Без печки</div>
            </>
        },
    ]

    pech.сталь.forEach(el => list1.push({
        img: '/img/voevoda-15.png',
        title: <>
            <h5><span className="badge bg-primary fw-bold">+{el.price && el.price.toLocaleString()} ₽</span></h5>
            <div className="text-info">{el.name} </div>
        </>
    }))


    const list2 = []
    pech.чугун.forEach(el => list2.push({
        img: '/img/voevoda-15.png',
        title: <>
            <h5><span className="badge bg-primary fw-bold">+{el.price && el.price.toLocaleString()} ₽</span></h5>
            <div className="text-info">{el.name} </div>
        </>
    }))

    console.log(list1)
    return <>
        <h3 className="mb-4">Выберите печь</h3>

        <Row>
            <h5 className="text-center my-4">Чугунные</h5>
            <ImgSelector list={list1}/>
            <h5 className="text-center my-4">Стальные</h5>
            <ImgSelector list={list2}/>
        </Row>
    </>
}
