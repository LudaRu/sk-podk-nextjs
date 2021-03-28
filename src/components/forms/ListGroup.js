import React, {useState} from "react";

export default function ListGroup({list, one}) {
    const [activeId, setActiveId] = useState()

    const onClick = (i) => {
        setActiveId(i)
    }

    return <div className="list-group">
        {list.map(({title, description, checked}, i) => (
            <div key={i} className={`py-3 list-group-item list-group-item-action cpoint`} aria-current="true" onClick={() => onClick(i)}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="text-info">{title}</h5>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"  checked={i === activeId} onChange={() => {}}/>
                </div>
                <div>{description}</div>
            </div>
        ))}
    </div>
}
