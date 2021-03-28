import React, {useEffect, useState} from 'react';
import {AddressSuggestions} from 'react-dadata';
import StepWizard from 'react-step-wizard';
import Image from "next/image";
import css from "./footer.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from 'next/router'
import ListGroup from "../forms/ListGroup";

export default function Stepper() {
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const router = useRouter()

    useEffect(() => {
        window.scrollTo(0, 0)

    }, [step])


    const [state, updateState] = useState({
        form: {},
        demo: true
    });

    const updateDop = (key, price, value) => {
        const {dop} = state;

        dop.push({
            key: key,
            price: price,
            value: value
        })
    };

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
            <div className="bg-secondary pb-4" style={{minHeight: 'calc(100vh - 56px - 62px)'}}>
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
                                    <Step1/>
                                    <Step2/>
                                    <Step3/>
                                    <Step4/>
                                    <Step5/>
                                    <Step6/>
                                    <Step7/>
                                    <Step8/>
                                    <Step9/>
                                    <Step10 state={state}/>
                                    <Step11/>
                                    <Step12/>
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
                                <div className="d-flex align-items-center h5 mb-0">= 200 000 ₽</div>
                                <div>
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
                    <h1 className="mb-4 h4">Сруб бани <span className="badge bg-primary">100 000 ₽</span>
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
                    <h5 className="mb-3  text-center">Что входит в стоимость базы</h5>

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

function Step2(props) {

    const list = [{
        title: <>Без сборкой <span className="badge bg-primary">0 ₽</span></>,
        description: <>
            <div>Своими руками</div>
        </>
    },
        {
            title: <>Со сборкой <span className="badge bg-primary">+100 000 ₽</span></>,
            active: true,
            description: <>
                <ul className="mt-2">
                    <li>Монтаж нижней обвязки с запилом в лапу.</li>
                    <li>Врезка половых лаг в первый венец сруба, (шаг 580мм.)
                    </li>
                    <li>Сборка сруба на джут, скрепление на деревянные шканты
                        шаг 1.5-2м.
                    </li>
                    <li>Монтаж стропил с применением скользящих опор, шаг
                        (580мм.)
                    </li>
                    <li>Настил Супердиффузинной мембраны (Изоспан AQ Proff)</li>
                    <li>Устройство под кровельной вентиляции (Вент зазор)</li>
                    <li>Монтаж обрешетки шагом 350мм.</li>
                    <li>Монтаж метало черепицы «Monterrey», доборных
                        элементов.
                    </li>
                    <li>Подшив карнизов, свесов кровли вентилируемый софит.</li>
                    <li>Монтаж водосточной системы.</li>
                    <li>Установка снегозадержателей.</li>
                </ul>
                <small>
                    Возможны другие варианты покрытия кровли: Фальцевая, Мягкая
                    черепица «Shinglas», ЦПЧ
                    (цементно песчаная
                    черепица) Натуральная черепица, Лиственный гонт и многое
                    другое.
                </small>
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Сборка сруба</h3>
        <ListGroup list={list}/>
    </>
}

function Step3(props) {
    const list = [
        {
            title: <>Без фундамента <span className="badge bg-primary">0 ₽</span></>,
            description: <>
                <div>Своими руками</div>
            </>
        },
        {
            title: <>Забивные ЖБ-сваи <span className="badge bg-primary">+20 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>
        },
        {
            title: <>Винтовые сваи <span className="badge bg-primary">+10 000 ₽</span></>,
            active: true,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Фундамент</h3>
        <ListGroup list={list}/>
    </>
}

function Step4(props) {
    const list = [
        {
            title: <>Отделка после усадки <span className="badge bg-primary">0 ₽</span></>,
            description: <>
                <div>Своими руками</div>
            </>
        },
        {
            title: <>Отделка эконом <span className="badge bg-primary">+20 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>
        },
        {
            title: <>Отделка комфорт <span className="badge bg-primary">+30 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>
        },
        {
            title: <>Отделка премиум <span className="badge bg-primary">+40 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Отделка</h3>
        <ListGroup list={list}/>
    </>
}


function Step5(props) {

    return <>
        <h3 className="mb-4">Печное оборудование</h3>
    </>
}

function Step6(props) {

    return <>
        <h3 className="mb-4">Дымоход</h3>
    </>
}


function Step7(props) {
    return <>
        <h3 className="mb-4">Бак</h3>
    </>
}

function Step8(props) {
    return <>
        <h3 className="mb-4">Пожарная бпасность</h3>
    </>
}


function Step9(props) {

    return <>
        <h3 className="mb-4">Установка печного оборудования</h3>
    </>;
}

function Step10(props) {
    return <>
        <h3 className="mb-4">Ваша баня</h3>
    </>;
}

function Step11(props) {
    const [value, setValue] = useState();
    return <>
        <h3 className="mb-4">Оформление заказа</h3>

        <div className="mb-3">
            <label className="form-label">Имя</label>
            <input type="string" className="form-control"/>
        </div>

        <div className="mb-3">
            <label className="form-label">Фамилия</label>
            <input type="string" className="form-control"/>
        </div>

        <div className="mb-3">
            <label className="form-label">email</label>
            <input type="email" className="form-control"/>
        </div>

        <div className="mb-3">
            <label className="form-label">Телефон</label>
            <input type="phone" className="form-control"/>
        </div>

        <div className="mb-3">
            <label className="form-label">Адрес строительства</label>
            <AddressSuggestions token="9f46cd45926d39ac5aec7f33cf8d5e87d7c11a8a" value={value} onChange={setValue}/>
        </div>

        <div className="mb-3">
            <label className="form-label">Примерная дата строительства</label>
            <input className="form-control" type="date" id="example-date-input"/>
        </div>
    </>;
}


function Step12(props) {
    return <>
        <h3>Заказ оформлен</h3>
        <h3>Мы скоро с вами свяжемся</h3>
    </>
}

