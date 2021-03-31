import React, {useEffect, useState} from 'react';
import {AddressSuggestions, FioSuggestions} from 'react-dadata';
import StepWizard from 'react-step-wizard';
import Image from "next/image";
import css from "./footer.module.scss";
import {Col, Container, Row} from "react-bootstrap";
import {useRouter} from 'next/router'
import ListGroup from "../forms/ListGroup";
import ImgSelector from "../forms/imgSelector";

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
            <div className="bg-light pb-4" style={{minHeight: 'calc(100vh - 56px - 62px)'}}>
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
                                    {/*<Step1/>*/}
                                    <Step1Karkas/>
                                    {/*<Step2/>*/}
                                    <Step3/>
                                    {/*<Step4/>*/}
                                    <Step4Karkas/>
                                    <Step5/>
                                    <Step6/>
                                    <Step7/>
                                    <Step8/>
                                    <Step9/>
                                    <Step10 state={state}/>
                                    <Step11MakeOrder/>
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
                                <div className="d-flex align-items-center h5 mb-0 bg-primary text-dark px-4">200 000 ₽</div>
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

function Step1Karkas() {
    return <>
        <div className="shadow-sm rounded-3 bg-white p-3">
            <Row>
                <Col xs={12}>
                    <h1 className="mb-4 h4">Каркас под крышу <span className="badge bg-primary">100 000 ₽</span>
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
                        <Col xs={12}>
                            <a href="">Зеркальный проект</a>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
        <Row>
            <Col>
                <h5>Выберите планировку</h5>
                <div className="bg-white rounded border border-1 my-4 position-relative" style={{maxWidth:'600px', margin: '0 auto'}}>
                    <Image
                        width={1000}
                        height={750}
                        className="rounded"
                        src="/img/3.5h4-plany_stranica_1-1-1000x750.jpg"
                        layout="responsive"
                        objectFit="cover"
                    />
                    <input className="form-check-input position-absolute cpoint" style={{top: '1rem', right: '1rem'}} type="radio" value=""/>
                    <div className="position-absolute" style={{bottom: '0'}}>
                        <div className=" text-center">Планировка 1</div>
                    </div>
                </div>
            </Col>
        </Row>

        <div className="mt-4 shadow-sm rounded-3 bg-white p-3">
            <Row>
                <Col xs={12}>
                    <h5 className="mb-3  text-center">Что входит в стоимость</h5>

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
        title: <>Без сборки <span className="badge bg-primary">0 ₽</span></>,
        description: <>
            <div>Сборка своими руками</div>
        </>
    },
        {
            title: <>Сборка под усадку <span className="badge bg-primary">+100 000 ₽</span></>,
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
            title: <>Не нужен <span className="badge bg-primary">0 ₽</span></>,
            description: <>
                <div>Свой фундамент</div>
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
            title: <>Отделка не нужна <span className="badge bg-primary">0 ₽</span></>,
            description: <>
                <small>Отделка после усадки, усадка сруба 6-12 месяц</small>
            </>
        },
        {
            title: <>Отделка эконом <span className="badge bg-primary">+20 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        },
        {
            title: <>Отделка комфорт <span className="badge bg-primary">+30 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        },
        {
            title: <>Отделка премиум <span className="badge bg-primary">+40 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Отделка под ключ</h3>
        <ListGroup list={list}/>
    </>
}

function Step4Karkas(props) {
    const list = [
        {
            title: <>Отделка не нужна <span className="badge bg-primary">0 ₽</span></>,
            description: <>
                <small>Отделка своими руками</small>
            </>
        },
        {
            title: <>Отделка эконом <span className="badge bg-primary">+20 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        },
        {
            title: <>Отделка комфорт <span className="badge bg-primary">+30 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        },
        {
            title: <>Отделка премиум <span className="badge bg-primary">+40 000₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul>
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
            </>
        }
    ]

    return <>
        <h3 className="mb-4 text-center">Отделка под ключ</h3>
        <ListGroup list={list}/>
    </>
}


function Step5(props) {

    const list = [
        {
            img: '/img/Kukish_or_fig.jpeg',
            title: <h5 className="text-info">Без печки <br/><span className="badge bg-primary">0 ₽</span></h5>,
            description: <></>,
        },
        {
            img: '/img/voevoda-15.png',
            title: <h5 className="text-info">Отделка после усадки <br/><span
                className="badge bg-primary">+20 000 ₽</span></h5>,
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                <li className="list-group-item">
                    <small className="text-grey">Габаритные размеры ВхШхД, мм</small>
                    <div>660x505x710</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Масса (без камней), не более кг</small>
                    <div>84</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Объём парильного помещения, м3</small>
                    <div>5-15</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Диаметр дымохода, мм</small>
                    <div>115</div>
                </li>
            </ul>,
        },
        {
            img: '/img/voevoda-15.png',
            title: <h5 className="text-info">Отделка после усадки <br/><span
                className="badge bg-primary">+20 000 ₽</span></h5>,
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                <li className="list-group-item">
                    <small className="text-grey">Габаритные размеры ВхШхД, мм</small>
                    <div>660x505x710</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Масса (без камней), не более кг</small>
                    <div>84</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Объём парильного помещения, м3</small>
                    <div>5-15</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Диаметр дымохода, мм</small>
                    <div>115</div>
                </li>
            </ul>,
        },
        {
            img: '/img/voevoda-15.png',
            title: <h5 className="text-info">Отделка после усадки <br/><span
                className="badge bg-primary ">+20 000 ₽</span></h5>,
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                <li className="list-group-item">
                    <small className="text-grey">Габаритные размеры ВхШхД, мм</small>
                    <div>660x505x710</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Масса (без камней), не более кг</small>
                    <div>84</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Объём парильного помещения, м3</small>
                    <div>5-15</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Диаметр дымохода, мм</small>
                    <div>115</div>
                </li>
            </ul>,
        },
        {
            img: '/img/voevoda-15.png',
            title: <h5 className="text-info">Отделка после усадки <br/><span
                className="badge bg-primary">+20 000 ₽</span></h5>,
            more: <ul className="list-group list-group-flush  rounded overflow-hidden">
                <li className="list-group-item">
                    <small className="text-grey">Габаритные размеры ВхШхД, мм</small>
                    <div>660x505x710</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Масса (без камней), не более кг</small>
                    <div>84</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Объём парильного помещения, м3</small>
                    <div>5-15</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Диаметр дымохода, мм</small>
                    <div>115</div>
                </li>
            </ul>,
        },
        {
            img: '/img/voevoda-15.png',
            title: <h5 className="text-info">Отделка после усадки <br/><span
                className="badge bg-primary">+20 000 ₽</span></h5>,
            more: <ul className="list-group list-group-flush rounded overflow-hidden">
                <li className="list-group-item">
                    <small className="text-grey">Габаритные размеры ВхШхД, мм</small>
                    <div>660x505x710</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Масса (без камней), не более кг</small>
                    <div>84</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Объём парильного помещения, м3</small>
                    <div>5-15</div>
                </li>
                <li className="list-group-item">
                    <small className="text-grey">Диаметр дымохода, мм</small>
                    <div>115</div>
                </li>
            </ul>,
        },
    ]

    return <>
        <h3 className="mb-4">Выбрать печь</h3>

        <Row>
            <ImgSelector list={list}/>
        </Row>
    </>
}

function Step6(props) {

    return <>
        <h3 className="mb-4">Дымоход</h3>
    </>
}


function Step7(props) {
    return <>
        <h3 className="mb-4">Бак для воды</h3>
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

function customInput(props) {
    console.log(props)
    return <>
        <input {...props} className="form-control" placeholder={props.placeholder}/>
        <label>ФИО</label>
    </>
}

function Step11MakeOrder(props) {
    const [fio, setFio] = useState();
    const [value, setValue] = useState();
    return <div className="bg-white rounded p-3">
        <Row>

            <Col xs={12}>
                <h3 className="mb-4 text-center">Оформление заказа</h3>
            </Col>
            <Col xs={12} md={6}>
                <div className="mb-3">
                <FioSuggestions
                    count={4}
                    customInput={(props) => (<div className="form-floating">
                        <input {...props} className="form-control" placeholder="ФИО"/>
                        <label>ФИО</label>
                    </div>)}
                    token="9f46cd45926d39ac5aec7f33cf8d5e87d7c11a8a"
                    value={fio}
                    onChange={setFio}
                />
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="Email"/>
                    <label>Email</label>
                </div>
            </Col>
            <Col xs={12} md={12}>
                <AddressSuggestions
                    count={4}
                    customInput={(props) => (<div className="form-floating">
                        <input {...props} className="form-control" placeholder="Адрес строительства"/>
                        <label>Адрес строительства</label>
                    </div>)}
                    token="9f46cd45926d39ac5aec7f33cf8d5e87d7c11a8a" value={value} onChange={setValue}/>
            </Col>

            <Col xs={12} md={6}>
                <div className="form-floating mt-3">
                    <input type="phone" className="form-control" placeholder="Телефон"/>
                    <label>Телефон</label>
                </div>
            </Col>
            <Col xs={12} md={6}>
                <div className="form-floating mt-3">
                    <input type="date" className="form-control" placeholder="Начало строительства"/>
                    <label>Начало строительства</label>
                </div>
            </Col>
        </Row>
    </div>;
}


function Step12(props) {
    return <>
        <h3>Заказ оформлен</h3>
        <h3>Мы скоро с вами свяжемся</h3>
    </>
}

