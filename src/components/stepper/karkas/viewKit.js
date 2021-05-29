import React from "react";

export default function viewKit(data) {
    return {
        component: <VewKitC data={data}/>,
        onNext: (SW) => SW.nextStep(),
    }
}

/**
 *
 * @param {Kits.фундамент} data
 * @param checked
 * @param setChecked
 * @returns {JSX.Element}
 * @constructor
 */
function VewKitC({data, checked, setChecked}) {
    return <>
        <h3 className="mb-4 text-center">Вы выбрали</h3>
    </>
}
