import React, {useContext, useState} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";

export default function ListGroup({list, checked, onChecked = (i) => {}}) {

    function CustomToggle({children, eventKey}) {
        const curEvent = useContext(AccordionContext);
        const decoratedOnClick = useAccordionButton(eventKey, () => {});
        const isCur = curEvent.activeEventKey === eventKey;
        return (
            <a className="cpoint icon-link" onClick={decoratedOnClick}>
                {!isCur
                    ? <>Подробнее <i className="bi bi-chevron-down"></i></>
                    : <>Свернуть <i className="bi bi-chevron-up"></i></>
                }
            </a>
        );
    }

    return <>
        {list.map(({name = '', price, title, description, more}, i) => (
            <div className="list-group-item p-0 mb-3 rounded" key={i}>
                <div className={`p-3 cpoint  list-group-item-action`}
                     aria-current="true"
                     onClick={() => onChecked(name, price)}
                >
                    <div className="d-flex w-100 justify-content-between">
                        <div className="d-flex gap-2"  style={{flex: '1 1 auto'}}>
                            <div style={{flex: '0 0 50px'}}>
                                <div className="ratio ratio-1x1 bg-secondary rounded border">

                                </div>
                            </div>
                            <div className="d-flex flex-column justify-content-between h-100"  style={{flex: '1 1 auto'}}>
                                <h6 className="text-info">{name}</h6>
                                <h5 className="text-info mb-0"><span className="badge bg-primary">{price.toLocaleString()} ₽</span></h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end"  style={{flex: '1 1 auto'}}>
                            <input
                                className="form-check-input"
                                type="checkbox" value=""
                                id="flexCheckChecked"
                                checked={name === checked.name}
                                onChange={() => onChecked(name, price)}
                            />
                        </div>
                    </div>
                    <div>{description}</div>
                </div>
                {more ? <div>
                    <Accordion>
                        <Accordion.Collapse eventKey={i} className="border-0">
                            <div className="mt-3 pt-2 border-1 border-top">{more}</div>
                        </Accordion.Collapse>
                        <div className="text-center p-2 border-1 border-top">
                            <CustomToggle eventKey={i}/>
                        </div>
                    </Accordion>
                </div> : ''}
            </div>
        ))}
    </>
}
