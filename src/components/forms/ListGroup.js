import React, {useState} from "react";
import {Accordion, useAccordionButton} from "react-bootstrap";

export default function ListGroup({list, one}) {
    const [activeId, setActiveId] = useState()

    const onClick = (i) => {
        setActiveId(i)
    }

    function CustomToggle({children, eventKey}) {
        const decoratedOnClick = useAccordionButton(eventKey, () => {
        });

        return (
            <a className="cpoint icon-link" onClick={decoratedOnClick}>Подробнее <i className="bi bi-chevron-down"></i></a>
        );
    }


    return <div className="list-group">
        {list.map(({title, description, more, checked}, i) => (
            <div className="list-group-item list-group-item-action" key={i}>
                <div className={`py-3 cpoint`} aria-current="true" onClick={() => onClick(i)}>
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="text-info">{title}</h5>
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"
                               checked={i === activeId} onChange={() => {
                        }}/>
                    </div>
                    <div>{description}</div>
                </div>
                {more ? <div className=" border-1 border-top py-2">
                    <Accordion>
                        <div className=" text-center"><CustomToggle eventKey="1"/></div>
                        <Accordion.Collapse eventKey="1">
                            <div className="mt-3 pt-2 border-1 border-top">{more}</div>
                        </Accordion.Collapse>
                    </Accordion>
                </div> : ''}
            </div>
        ))}

    </div>
}
