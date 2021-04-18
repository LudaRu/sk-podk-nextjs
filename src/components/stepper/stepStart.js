import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

export default function stepStart(project) {
    return {
        component: <StepStart project={project}/>,
        onNext: (SW) => SW.nextStep(),
    }
}

/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
function StepStart({project}) {
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
                        <Col xs={12}>
                            <a href="">Зеркальный проект</a>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </div>
        {/*<Row>*/}
        {/*    <Col>*/}
        {/*        <h5>Выберите планировку</h5>*/}
        {/*        <div className="bg-white rounded border border-1 my-4 position-relative"*/}
        {/*             style={{maxWidth: '600px', margin: '0 auto'}}>*/}
        {/*            <Image*/}
        {/*                width={1000}*/}
        {/*                height={750}*/}
        {/*                className="rounded"*/}
        {/*                src="/img/3.5h4-plany_stranica_1-1-1000x750.jpg"*/}
        {/*                layout="responsive"*/}
        {/*                objectFit="cover"*/}
        {/*            />*/}
        {/*            <input className="form-check-input position-absolute cpoint" style={{top: '1rem', right: '1rem'}}*/}
        {/*                   type="radio" value=""/>*/}
        {/*            <div className="position-absolute" style={{bottom: '0'}}>*/}
        {/*                <div className=" text-center">Планировка 1</div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </Col>*/}
        {/*</Row>*/}

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
