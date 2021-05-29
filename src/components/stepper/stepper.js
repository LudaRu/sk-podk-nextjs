import React, {useEffect, useState} from 'react';
import StepWizard from 'react-step-wizard';
import {Col, Container, Row} from "react-bootstrap";
import css from './stepper.module.scss'

export default function Stepper({stepPagers, price, step, onStepChange, onBack, onClose}) {
    const [SW, setSW] = useState()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [step])

    function getNextButton() {
        const btnText = stepPagers[step.activeStep-1].nextText || 'Далее';
        const onNext = stepPagers[step.activeStep-1].onNext;

        const params = stepPagers[step.activeStep-1].nextParams || ''

        return  <button {...params} className="btn btn-primary shadow" onClick={() => onNext(SW)}>
             {btnText}
         </button>;
    }

    const transitions = {
        enterRight: css.enterRight,
        enterLeft: css.enterLeft,
        exitRight: css.exitRight,
        exitLeft: css.exitLeft,
        intro: css.intro,
    }

    return (
        <>
            <div className="sticky-top bg-white shadow">
                <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between py-3">
                                <a onClick={() => onBack(SW)} className="a cpoint">
                                    <i className="bi bi-chevron-left"/> {step.activeStep > 1 ? 'Назад' : 'В каталог'}
                                </a>
                                <button
                                    type="button"
                                    className="btn-close"
                                    aria-label="Close"
                                    onClick={() => onClose()}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light pb-4" style={{minHeight: 'calc(100vh - 50px - 64px)'}}>
                <div style={{maxWidth: '900px', margin: '0 auto'}}>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <StepWizard
                                    className="pt-4"
                                    isLazyMount
                                    transitions={transitions}
                                    onStepChange={onStepChange}
                                    instance={SW => setSW(SW)}
                                >
                                    {stepPagers.map(({component}, i) => component)}
                                </StepWizard>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className={css.root}>
                <Container style={{maxWidth: '900px', margin: '0 auto'}}>
                    <Row>
                        <Col xs={12}>
                            <div className={css.footer}>
                                <div style={{marginLeft: '-12px'}}
                                    className="d-flex align-items-center h5 mb-0 bg-primary text-dark px-4">{Number(price).toLocaleString()} ₽
                                </div>
                                <div className="py-2">
                                    {getNextButton()}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}



