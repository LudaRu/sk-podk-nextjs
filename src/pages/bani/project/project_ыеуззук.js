import React, {Fragment, useEffect, useState} from "react";
import Stepper from "../../../components/stepper/stepper";
import stepStart from "../../../components/stepper/karkas/stepStart";
import stepFund from "../../../components/stepper/karkas/stepFundament";
import stepOtdelka from "../../../components/stepper/karkas/stepOtdelka";
import stepPech from "../../../components/stepper/karkas/stepPech";
import stepBak from "../../../components/stepper/karkas/stepBak";
import stepFireSave from "../../../components/stepper/karkas/stepFireSave";
import stepDimohod from "../../../components/stepper/karkas/stepDimohod";
import stepObustroistvo from "../../../components/stepper/karkas/stepObustroistvo";
import viewKit from "../../../components/stepper/karkas/viewKit";
import stepFinal from "../../../components/stepper/karkas/stepFinal";
import stepOrderForm from "../../../components/stepper/karkas/stepOrderForm";
import {useRouter} from "next/router";


/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectPage_({project}) {
    const router = useRouter()
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const [price, setPrice] = useState(project.price_1)

    function onStepChange(step) {
        setStep(step)
    }

    function onBack(SW) {
        console.log(step)
        if (step.activeStep === 1) {
            router.back()
            return
        } else if (step.activeStep === 9 && stepPagers[3].checked.name === 'Без печки') {
            SW.goToStep(4)
            return
        }

        SW.previousStep();
    }

    function onClose() {
        router.back()
    }

    const stepPagers = [
        stepStart(project),
        stepFund(project.kits.фундамент),
        stepOtdelka(project.kits.отделка),
        stepPech(project.kits.печное.печь),
        stepBak(project.kits.печное.бак),
        stepDimohod(project.kits.печное.дымоход),
        stepFireSave(project.kits.пожарная),
        stepObustroistvo(project.kits.печное.обустройство),
        viewKit(),
        stepOrderForm(),
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

