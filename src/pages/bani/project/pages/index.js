import {Accordion, Col, Row} from "react-bootstrap";
import Image from "next/image";
// import css from "./style.scss"
import React from "react";
import stepStart from "../../../../components/stepper/karkas/stepStart";
import stepFund from "../../../../components/stepper/karkas/stepFundament";
import stepOtdelka from "../../../../components/stepper/karkas/stepOtdelka";
import stepPech from "../../../../components/stepper/karkas/stepPech";
import stepBak from "../../../../components/stepper/karkas/stepBak";
import stepDimohod from "../../../../components/stepper/karkas/stepDimohod";
import stepFireSave from "../../../../components/stepper/karkas/stepFireSave";
import stepObustroistvo from "../../../../components/stepper/karkas/stepObustroistvo";
import viewKit from "../../../../components/stepper/karkas/viewKit";
import stepOrderForm from "../../../../components/stepper/karkas/stepOrderForm";
import stepFinal from "../../../../components/stepper/karkas/stepFinal";

export default function Index({project}) {
    return <>
        <div className="shadow-sm rounded-3 bg-white p-3">
            <Row>
                <Col xs={12}>
                    <div className="d-flex">
                        <h1 className="mb-4 h4">Каркасная
                            баня {project.opt_size_bani_w}x{project.opt_size_bani_h}</h1>
                        <div
                            className="bg-primary h5 mb-4 ms-2 p-1 rounded">{Number(project.price_1).toLocaleString()} ₽
                        </div>
                    </div>
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
            </Row>
        </div>


        {/*<div className="mt-4 shadow-sm rounded-3 bg-white p-3">*/}
        {/*    <Row>*/}
        {/*        <Col xs={12} md={4} className="mb-3 pt-2">*/}
        {/*            <h4 className="m-0">Вы экономите<br/> <span className="text-danger">47 000 ₽</span></h4>*/}
        {/*            <h5>при заказе отделки люкс</h5>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <div className="ratio ratio-21x9 rounded gr-grey ">*/}
        {/*                <div className="p-3 d-flex flex-column justify-content-between text-white">*/}
        {/*                    <Image*/}
        {/*                        className={css.blimg}*/}
        {/*                        alt="Mountains"*/}
        {/*                        src="/img/karkaska.png"*/}
        {/*                        layout="fill"*/}
        {/*                        objectFit="contain"*/}
        {/*                        objectPosition="right bottom"*/}
        {/*                    />*/}
        {/*                    <h5 className="z1">Обработка каркаса<br/>огнебиозащитой NEOMID</h5>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <div className="ratio ratio-21x9 rounded gr-grey ">*/}
        {/*                <div className="p-3 d-flex flex-column justify-content-between text-white">*/}
        {/*                    <Image*/}
        {/*                        className={css.blimg}*/}
        {/*                        alt="Mountains"*/}
        {/*                        src="/img/brevno.png"*/}
        {/*                        layout="fill"*/}
        {/*                        objectFit="contain"*/}
        {/*                        objectPosition="right bottom"*/}
        {/*                    />*/}
        {/*                    <h5 className="z1">Полога 2х уровневые</h5>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4}>*/}
        {/*            <div className="ratio ratio-21x9 rounded gr-grey">*/}
        {/*                <div className="p-3 d-flex flex-column justify-content-between text-white">*/}
        {/*                    <Image*/}
        {/*                        className={css.blimg}*/}
        {/*                        alt="Mountains"*/}
        {/*                        src="/img/brus.png"*/}
        {/*                        layout="fill"*/}
        {/*                        objectFit="contain"*/}
        {/*                        objectPosition="right bottom"*/}
        {/*                    />*/}
        {/*                    <h5 className="z1">Дровник</h5>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </Col>*/}
        {/*    </Row>*/}
        {/*</div>*/}
        <div className="mt-4 shadow-sm rounded-3 bg-white p-3">
            <h4 className="mb-4">Выберите компоненты для своей бани</h4>
            <Row>
                {[
                    {title: 'фундамент', img: '/img/project/fund.png'},
                    {title: 'отделка', img: '/img/project/otdelka.png'},
                    {title: 'печь', img: '/img/project/pech.png'},
                    {title: 'бак', img: '/img/project/bak.jpg'},
                    {title: 'дымоход', img: '/img/project/dimohod.png'},
                    {title: 'пожарная безопасность', img: '/img/project/pozar.jpg'},
                    {title: 'обустройство', img: '/img/project/obustr.jpg'}
                ].map(el => <>
                    <Col xs={6} sm={4} lg={3}>
                        <div className="ratio ratio-1x1 rounded bg-white mb-3 border">
                            <div className="p-3 d-flex flex-column justify-content-between">
                                <Image
                                    alt="Mountains"
                                    src={el.img}
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="right bottom"
                                />
                                <h5 className="z1">{el.title}</h5>
                            </div>
                        </div>
                    </Col>
                </>)}
            </Row>
        </div>


        <div className="mt-4 shadow-sm rounded-3 bg-white p-3">
            <Row>
                <Col xs={12}>
                    <h5 className="mb-3  text-center">Что входит в стоимость каркаса, без отделки</h5>

                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <div className="fw-bold">Нижняя Обвязка</div>
                            Брус 100х150 мм. Хвоя Ест. Влажности
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Лаги пола</div>
                            Доска 40х100мм. Ест. Влажности
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Каркас Стен</div>
                            Доска 40х100мм. Ест. Влажности
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Стропила Кровли</div>
                            Доска 40х100мм. Ест. Влажности
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Обрешетка кровли</div>
                            Доска 25х100мм. 2 сорт. Ест. Влажности
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Гидроизоляция кровли</div>
                            Изоспан "D"
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Кровля покрытие</div>
                            Профлист С-10 Оцынкованный+ Коньковые
                            элементы+Крепеж
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Изоляция стен внешняя</div>
                            Изоспан "А"
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Крепеж</div>
                            Опроы бруса, саморезы ,гвозди, скобы
                        </li>
                        <li className="list-group-item">
                            <div className="fw-bold">Антисептик Неомид</div>
                            Антисептик для обработки обвязки и лаг пола
                            от плесени синевы и гниения
                        </li>
                    </ul>
                </Col>
            </Row>
        </div>
    </>
}
