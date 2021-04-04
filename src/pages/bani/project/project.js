import React from "react";
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

/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectPage({project}) {
    return (
        <>
            <Stepper price={project.price_1}>
                <StepStart project={project}/>
                {/*<SborkaSruba/>*/}
                <StepFundament fundament={project.kits.фундамент}/>
                <StepOtdelka otdelka={project.kits.отделка}/>
                <StepPech pech={project.kits.печное.печь}/>
                <StepBak bak={project.kits.печное.бак} obustroy={project.kits.печное.обустройство}/>
                <StepDimohod dimohod={project.kits.печное.дымоход}/>
                <StepFireSave data={project.kits.пожарная}/>
                <ViewKit/>
                <StepOrderForm/>
                <StepFinal/>
            </Stepper>
        </>
    )
}

