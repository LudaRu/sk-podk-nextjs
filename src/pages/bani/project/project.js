import React, {useState, Fragment} from "react";
import Stepper from "../../../components/stepper/stepper";
import {StepStart} from "../../../components/stepper/stepStart";
import {StepFundament} from "../../../components/stepper/stepFundament";
import {StepOtdelka} from "../../../components/stepper/stepOtdelka";
import {StepPech} from "../../../components/stepper/stepPech";
import {StepDimohod} from "../../../components/stepper/stepDimohod";
import {StepBak} from "../../../components/stepper/stepBak";
import {StepFireSave} from "../../../components/stepper/stepFireSave";
import {ViewKit} from "../../../components/stepper/viewKit";
import {StepOrderForm} from "../../../components/stepper/stepOrderForm";
import {StepFinal} from "../../../components/stepper/stepFinal";
import {useRouter} from "next/router";
import ListGroup from "../../../components/forms/ListGroup";

/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectPage({project}) {
    const router = useRouter()
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const [stateMap, setStateMap] = useState({
        2: {
            isValid: false,
            checked: {}
        },
        3: {
            isValid: true,
            checked: {}
        },
        4: {
            isValid: true,
            checked: {},
            to: {
                'нет': 7
            }
        },
        5: {
            isValid: true,
            checked: {}
        },
        6: {
            isValid: true,
            checked: {}
        },
        7: {
            isValid: true,
            checked: {}
        },
        9: {
            isValid: true,
            checked: {}
        },
    })


    function onChecked(step, name) {
        // const newState = {...stateMap}
        // if (newState[step]) {
        //     newState[step].isValid = true
        //     newState[step].checked = {
        //         name:
        //     }
        //     setStateMap(newState )
        // }
    }


    function onStepChange(step) {
        setStep(step)
    }

    function onNext(SW) {
        if (!stateMap[SW.currentStep] || stateMap[SW.currentStep].isValid !== false) {
            SW.nextStep();
        }
    }


    function onBack(SW) {
        console.log(SW)
        if (step.activeStep === 1) {
            router.back()
            return
        }

        SW.previousStep();
    }

    function onClose() {
        router.back()
    }

    const [fundamentChecked, setFundamentChecked] = useState()
    const fundament = [
        {
            name: 'нет',
            title: <><span className="badge bg-primary fw-bold">0 ₽</span></>,
            description: <>
                <div>Свой фундамент</div>
            </>
        },
    ]
    project.kits.фундамент.forEach(el => fundament.push({
        name: el.name,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name}</div>
    }))


    const map = [
        {
            component: <StepStart project={project}/>,
        },
        {
            component: <>
                <h3 className="mb-4 text-center">Фундамент</h3>
                <ListGroup list={fundament} checked={fundamentChecked} onChecked={setFundamentChecked}/>
            </>,
        },
        {
            component: <StepOtdelka otdelka={project.kits.отделка}/>
        },
        {
            component: <StepPech pech={project.kits.печное.печь}/>,
        },
        {
            component: <StepBak bak={project.kits.печное.бак} obustroy={project.kits.печное.обустройство}/>
        },
        {
            component: <StepDimohod dimohod={project.kits.печное.дымоход}/>
        },
        {
            component: <StepFireSave data={project.kits.пожарная}/>
        },
        {
            component: <ViewKit/>
        },
        {
            component: <StepOrderForm/>
        },
        {
            component: <StepFinal/>
        },
    ]



    return (
        <>
            <Stepper
                price={project.price_1}
                step={step}
                onStepChange={onStepChange}
                onNext={onNext}
                onBack={onBack}
                onClose={onClose}
            >
                {map.map((el, i) => <Fragment key={i}>{el.component}</Fragment>)}
            </Stepper>
        </>
    )
}

