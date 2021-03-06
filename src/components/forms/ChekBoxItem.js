import React, {useContext, useState} from "react";
import {Accordion, AccordionContext, useAccordionButton} from "react-bootstrap";
import Image from "next/image";

const {API_URL} = process.env

function CustomToggle({children, eventKey}) {
    const curEvent = useContext(AccordionContext);
    const decoratedOnClick = useAccordionButton(eventKey, () => {
    });
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

export default function CheckBoxGroup({list, checked, setChecked, multiple = false}) {
    return list.map((el) =>
        <React.Fragment key={el.name}>
            <ChekBoxItem
                multiple={multiple}
                name={el.name}
                price={el.price}
                img={el.img}
                shortDesc={el.shortDesc}
                more={el.more}
                checkItem={el}
                checkedName={checked.name}
                onChecked={setChecked}
            />
        </React.Fragment>
    )
}

// пожарка радио + 1 чекбокс

function ChekBoxItem({name, price, img, shortDesc, more, onChecked, checkedName, checkItem, multiple}) {
    return <div className="p-0 mb-3 rounded border bg-light">
        <div className="p-3 cpoint" onClick={() => onChecked(checkItem)}>
            <div className="d-flex w-100 justify-content-between">
                <div className="d-flex gap-2" style={{flex: '1 1 auto'}}>
                    {img && img.url && <div style={{flex: '0 0 50px'}}>
                        <div className="ratio ratio-1x1 bg-secondary rounded border">
                            <Image
                                className="rounded"
                                src={API_URL + img.url}
                                layout="fill"
                                objectFit="cover"
                                sizes="(min-width: 50) 50px,"
                            />
                        </div>
                    </div>
                    }
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
                        onChange={() => onChecked(checkItem)}
                    />
                </div>
            </div>
            <div>{shortDesc}</div>
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
