import {Col, Row} from "react-bootstrap";
import Image from "next/image";
import React from "react";

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
