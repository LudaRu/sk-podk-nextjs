import React, {useEffect, useState} from 'react';
import StepWizard from 'react-step-wizard';
import Image from "next/image";
import css from "./footer.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from 'next/router'

export default function Stepper({children, price}) {
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [step])


    const [state, updateState] = useState({
        form: {},
        demo: true
    });

    const updateForm = (key, value) => {
        const {contacts} = state;

        contacts[key] = value;
        updateState({
            ...state,
            contacts,
        });
    };

    const {SW, demo} = state;

    function onClickNext() {
        if (SW) {
            SW.nextStep()
        }
    }

    function onClickBack() {
        if (step.activeStep === 1) {
            router.back()
        }

        if (SW) {
            SW.previousStep()
        }
    }

    function onClose() {
        router.back()
    }

    return (
        <>
            <div className="sticky-top bg-white shadow">
                <div className="container" style={{maxWidth: '900px', margin: '0 auto'}}>
                    <div className="row">
                        <div className="col-12">
                            <div className="d-flex justify-content-between py-3">
                                <a onClick={onClickBack} className="a cpoint">
                                    <i className="bi bi-chevron-left"></i> {step.activeStep > 1 ? 'Назад' : 'В каталог'}
                                </a>
                                <button type="button" className="btn-close" aria-label="Close"
                                        onClick={onClose}></button>
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
                                    onStepChange={setStep}
                                    instance={SW => updateState({...state, SW})}
                                >
                                    {children}
                                </StepWizard>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className={[css.root]}>
                <Container style={{maxWidth: '900px', margin: '0 auto'}}>
                    <Row>
                        <Col xs={12}>
                            <div className={css.footer}>
                                <div className="d-flex align-items-center h5 mb-0 bg-primary text-dark px-4">{Number(price).toLocaleString()} ₽</div>
                                <div className="py-2">
                                    <button className="btn btn-primary shadow" onClick={onClickNext}>
                                        Далее
                                    </button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

function Step1() {
    return <>
        <div className="shadow-sm rounded-3 bg-white p-3">
            <Row>
                <Col xs={12}>
                    <h1 className="mb-4 h4">Сруб бани <span className="badge bg-primary fw-bold">100 000 ₽</span>
                    </h1>
                </Col>
                <Col xs={12}>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Image
                                width={1000}
                                height={750}
                                className="rounded border"
                                src="/img/1_9-1000x750.png"
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Col>
                        <Col xs={12} md={6} className="mb-4">
                            <Image
                                width={1000}
                                height={750}
                                className="rounded border"
                                src="/img/accamera-34-1000x750.jpg"
                                layout="responsive"
                                objectFit="cover"
                            />
                        </Col>
                    </Row>
                </Col>
                <Col xs={12}>
                    <h5 className="mb-3  text-center">Что входит в стоимость сруба</h5>

                    <ul>
                        <li>Стены сруба бревно оцилиндрованное хвоя Ø 220мм.</li>
                        <li>Фронтоны крыши бревно оцилиндрованное хвоя Ø 220мм.</li>
                        <li>Опорные столбы бревно оцилиндрованное хвоя Ø 220мм.</li>
                        <li>Окладной венец брус (100х200 хвоя)</li>
                        <li>Половые лаги доска (50х150 хвоя)</li>
                        <li>Потолочные лаги доска (50х150 хвоя)</li>
                        <li>Стропила доска (50х150 хвоя)</li>
                        <li>Обрешетка кровли доска (25х100 хвоя)</li>
                        <li>Крепеж (Нагеля, пружинный узел сила, скользящие опоры,
                            компенсаторы)
                        </li>
                        <li>Межвенцовый утеплитель (Джут)</li>
                    </ul>
                    <p className="h6 text-info">
                        При внесении изменений в данный проект стоимость измениться.
                        <br/>Что влияет на стоимость?
                    </p>
                    <ul>
                        <li>Диаметр бревна (Определяет толщину стен бани)</li>
                        <li>Количество венцов (Определяет высоту потолка бани)</li>
                        <li>Сечение лаг (Определяет прочность, и максимальную
                            толщину утепления)
                        </li>
                        <li>Смещение перегородок (Определяет площадь комнат)</li>
                    </ul>
                </Col>
            </Row>
        </div>
    </>
}


function customInput(props) {
    return <>
        <input {...props} className="form-control" placeholder={props.placeholder}/>
        <label>ФИО</label>
    </>
}


