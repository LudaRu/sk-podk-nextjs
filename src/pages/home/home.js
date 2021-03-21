import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import css from "./home.module.scss"
import CatalogItem from "../bani/category/catalogProduct";

function UniqueOffer() {

    return <div className="mt-5">
        <div className="mb-4 p-3 bg-white rounded shadow-lg gr-grey text-white">
            <h5 className="mb-2 "><i className="bi bi-check-circle-fill pe-3 text-secondary"></i>Мы не скрываем цен</h5>
            <p className="mb-3">
                Вы можите собрать полностью свою комплектацию от фундамента до крыши и увидеть полную сметную стоимость
                на сайте
            </p>
            <a href="#" className="btn btn-secondary shadow-sm"><i className="bi bi-hammer"></i> Конструктор онлайн</a>
        </div>

        <div className="mb-4 p-3 bg-white rounded shadow-lg gr-sky text-white">
            <h5 className="mb-2 "><i className="bi bi-check-circle-fill pe-3 text-secondary"></i>Посещение офиса
                необзательно</h5>
            <p className="mb-3">
                Оформить заказ и получить договор можно оналйн без выезда в офис
            </p>
            <a href="#" className="btn btn-secondary shadow-sm">Как мы работаем</a>
        </div>

    </div>;
}

export default function HomePage(props) {
    return <>
        <Container className="mb-7">
            <Row>
                <Col xs={12} md={6}>
                    <h1 className="display-5 fw-normal text-uppercase">Строим бани<br/>и дома</h1>
                    <div>Строим под ваши требования бани, дома и прочие сооружения</div>
                    <UniqueOffer/>
                </Col>
                <Col>
                    <div className={css.banner}>
                        <Image
                            className={css.bannerImg}
                            width="1132"
                            height="638"
                            src="/img/banner--image2.png"
                            layout="responsive"
                        />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container className="pb-6">
            <Row className="mb-5">
                <Col xs={12} md={4} className="mb-3">
                    <div className="p-4">
                        <h3>Что мы можем?</h3>
                        <p>
                            Наши менеджеры помогут
                            с выбором и проконсультируют
                            по всем вопросам
                        </p>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <a href="/" className={css.tovar}>
                        <div className="ratio ratio-21x9 rounded bg-primary">
                            <div className="p-4 d-flex flex-column justify-content-between">
                                <Image
                                    className={css.blimg}
                                    alt="Mountains"
                                    src="/img/karkaska.png"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="right bottom"
                                />
                                <h5 className="z1">Каркасные бани</h5>
                                <a className="z1" href="/">Подробнее</a>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <a href="/" className={css.tovar}>
                        <div className="ratio ratio-21x9 rounded bg-primary">
                            <div className="p-4 d-flex flex-column justify-content-between">
                                <Image
                                    className={css.blimg}
                                    alt="Mountains"
                                    src="/img/brevno.png"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="right bottom"
                                />
                                <h5 className="z1">Бани из бревна</h5>
                                <a className="z1" href="/">Подробнее</a>
                            </div>
                        </div>
                    </a>
                </Col>
                <Col xs={12} md={4} className="mb-3">
                    <a href="/" className={css.tovar}>
                        <div className="ratio ratio-21x9 rounded bg-primary">
                            <div className="p-4 d-flex flex-column justify-content-between">
                                <Image
                                    className={css.blimg}
                                    alt="Mountains"
                                    src="/img/brus.png"
                                    layout="fill"
                                    objectFit="contain"
                                    objectPosition="right bottom"
                                />
                                <h5 className="z1">Брусовые бани</h5>
                                <a className="z1" href="/">Подробнее</a>
                            </div>
                        </div>
                    </a>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <div className="p-3 rounded bg-info text-white text-center">
                        <h5><i className="bi bi-gift-fill"></i> Скидка на баню</h5>
                    </div>
                </Col>
                <Col>
                    <div className="bg-white p-3 rounded">
                        <h5>Немного о нас</h5>
                    </div>
                </Col>
            </Row>
        </Container>
        <div className="bg-primary">
            <div>
                <Image
                    src="/img/leftCircleProject.png"
                    layout="fill"
                    objectFit="contain"
                />
            </div>

            <Container className="pt-6 pb-6">
                <Row>
                    <Col xs={12}>
                        <div className="mb-5">
                            <h3>Популярные проекты</h3>
                            <p>Компания СК ПОД КЛЮЧ много лет занимается строительством загородных домов, бань из
                                дерева.
                                Опираясь на многолетний опыт, мы сделали подборку самых востребованных проектов.</p>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <CatalogItem/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CatalogItem/>
                    </Col>
                    <Col xs={12} md={4}>
                        <CatalogItem/>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
}

