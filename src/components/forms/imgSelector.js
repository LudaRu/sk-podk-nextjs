import React, {useState} from "react";
import {Accordion, Col, useAccordionButton} from "react-bootstrap";
import Image from "next/image";

export default function ImgSelector({list, one}) {
    const [activeId, setActiveId] = useState()

    const onClick = (i) => {
        setActiveId(i)
    }

    function CustomToggle({children, eventKey}) {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
        });

        return (
            <div className=" text-center"  onClick={decoratedOnClick}>
            <a className="cpoint icon-link">Подробнее <i className="bi bi-chevron-down"></i></a>
            </div>
        );
    }


    return <>
        {list.map(({title, description, more, img}, i) => (
            <Col xs={12} md={4}>
            <div key={i} className="mb-3 border border-1 rounded bg-white  position-relative">
                <div  onClick={() => onClick(i)}>
                <div className="ratio ratio-4x3 cpoint">
                    <Image
                        className="rounded"
                        src={img}
                        layout="fill"
                        objectFit="contain"
                    />

                </div>
                <div className="p-3">
                    {title}
                </div>
                <input className="form-check-input position-absolute cpoint" style={{top: '1rem', right: '1rem'}} type="radio" value=""
                       checked={i === activeId} onChange={() => {}}/>
                </div>
                {more ? <div className=" border-1 border-top py-3">
                    <Accordion>
                        <CustomToggle eventKey="1"/>
                        <Accordion.Collapse eventKey="1">
                            <div className="mt-3 border-1 border-top">{more}</div>
                        </Accordion.Collapse>
                    </Accordion>
                </div> : ''}
            </div>
            </Col>
        ))}

    </>
}
