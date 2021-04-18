import React, {useContext, useState} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";

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

export default function ChekImgGroup({list, checked, setChecked}) {
    return list.map(({name, price, img, shortDesc, more}) =>
        <React.Fragment key={name}>
            <ChekImgItem
                name={name}
                price={price}
                img={img}
                shortDesc={shortDesc}
                more={more}
                checkedName={checked.name}
                onChecked={setChecked}
            />
        </React.Fragment>
    )
}

function ChekImgItem({name, price, img, shortDesc, more, onChecked, checkedName}) {
    return <div className="list-group-item p-0 mb-3 rounded">
        <div className={`p-3 cpoint  list-group-item-action`}
             aria-current="true"
             onClick={() => onChecked({name, price})}
        >
            <div className="d-flex w-100 justify-content-between">
                <div className="d-flex gap-2" style={{flex: '1 1 auto'}}>
                    <div style={{flex: '0 0 60px'}}>
                        <div className="ratio ratio-1x1 bg-secondary rounded border">
                            {img}
                        </div>
                    </div>
                    <div className="d-flex flex-column justify-content-between h-100" style={{flex: '1 1 auto'}}>
                        <h6 className="text-info">{name}</h6>
                        {price !== undefined && <h5 className="text-info mb-0">
                            <span className="badge bg-primary">{price.toLocaleString()} ₽</span>
                        </h5>}
                    </div>
                </div>
                <div className="d-flex justify-content-end" style={{flex: '1 1 auto'}}>
                    <input
                        className="form-check-input"
                        type="checkbox" value=""
                        id="flexCheckChecked"
                        checked={name === checkedName}
                        onChange={() => onChecked({name, price})}
                    />
                </div>
            </div>
            {shortDesc && <div className="mt-2"><small>{shortDesc}</small></div>}
        </div>
        {more ? <div>
            <Accordion>
                <Accordion.Collapse eventKey={1} className="border-0">
                    <div className="mt-3 pt-2 border-1 border-top">{more}</div>
                </Accordion.Collapse>
                <div className="text-center p-2 border-1 border-top">
                    <CustomToggle eventKey={1}/>
                </div>
            </Accordion>
        </div> : ''}
    </div>
}
