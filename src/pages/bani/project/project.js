import React, {Fragment, useEffect, useState} from "react";
import Stepper from "../../../components/stepper/stepper";
import stepStart from "../../../components/stepper/stepStart";
import stepFund from "../../../components/stepper/stepFundament";
import stepOtdelka from "../../../components/stepper/stepOtdelka";
import stepPech from "../../../components/stepper/stepPech";
import stepBak from "../../../components/stepper/stepBak";
import stepFireSave from "../../../components/stepper/StepFireSave";
import stepDimohod from "../../../components/stepper/StepDimohod";
import stepObustroistvo from "../../../components/stepper/stepObustroistvo";
import viewKit from "../../../components/stepper/viewKit";
import stepFinal from "../../../components/stepper/stepFinal";
import stepOrderForm from "../../../components/stepper/stepOrderForm";
import {useRouter} from "next/router";


/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectPage({project}) {
    const router = useRouter()
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const [price, setPrice] = useState(project.price_1)

    function onStepChange(step) {
        setStep(step)
    }

    function onBack() {
    }

    function onClose() {
        router.back()
    }

    const stepPagers = [
        stepOrderForm(),
        stepStart(project),
        stepFund(project.kits.фундамент),
        stepOtdelka(project.kits.отделка),
        stepPech(project.kits.печное.печь),
        stepBak(project.kits.печное.бак),
        stepDimohod(project.kits.печное.дымоход),
        stepFireSave(project.kits.пожарная),
        stepObustroistvo(project.kits.печное.обустройство),
        viewKit(),

        stepFinal(),
    ];

    useEffect(() => {
        let sum = 0;
        stepPagers.map(el => {
            sum += el.checked && el.checked.price ? +el.checked.price : 0
        })

        setPrice(project.price_1 + +sum)
    }, stepPagers.map(({checked}) => checked))

    return (
        <>
            <Stepper
                stepPagers={stepPagers}
                price={price}
                step={step}
                onStepChange={onStepChange}
                onBack={onBack}
                onClose={onClose}
            />
        </>
    )
}

