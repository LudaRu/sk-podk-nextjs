import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Image from "next/image";
import css from "./home.module.scss"
import CardProduct from "../../components/cardProduct/cardProduct";

function UniqueOffer() {

    return <div className="mt-5">
        <div className="mb-4 p-3 bg-white rounded shadow-lg gr-grey text-white">
            <h5 className="mb-2 "><i className="bi bi-check-circle-fill pe-3 text-primary"></i>Мы не скрываем цен</h5>
            <p className="mb-3">
                Вы можите собрать полностью свою комплектацию от фундамента до крыши и увидеть полную сметную стоимость
                на сайте
            </p>
            <a href="/constructor" className="btn btn-primary shadow-sm"><i className="bi bi-hammer"></i> Конструктор онлайн</a>
        </div>

        <div className="mb-4 p-3 bg-white rounded shadow-lg gr-sky text-white">
            <h5 className="mb-2 "><i className="bi bi-check-circle-fill pe-3 text-primary"></i>Посещение офиса
                необзательно</h5>
            <p className="mb-3">
                Оформить заказ и получить договор можно оналйн без выезда в офис
            </p>
            <a href="#" className="btn btn-primary shadow-sm">Как мы работаем</a>
        </div>

    </div>;
}

export default function HomePage({category}) {
    return <>
        <Container className="pt-4 mb-4">
            <Row>
                <Col xs={12} lg={6}>
                    <h1 className="display-5 fw-normal text-uppercase">Каркасные бани <br/>под ключ</h1>
                    <div>Строим под ваши требования бани и прочие сооружения</div>
                    <UniqueOffer/>
                </Col>
                <Col className="d-none d-lg-block">
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

        <div className="bg-light pt-5 pb-4">
            <Container>
                <h2 className="mb-4">Проекты</h2>
                <Row>
                    {category.bani.map(bania => (
                        <Col xs={12} md={4} key={bania.id}>
                            <CardProduct bania={bania}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>

        {/*<Container className="pb-6">*/}
        {/*    <Row className="mb-5">*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <div className="p-4">*/}
        {/*                <h3>Что мы можем?</h3>*/}
        {/*                <p>*/}
        {/*                    Наши менеджеры помогут*/}
        {/*                    с выбором и проконсультируют*/}
        {/*                    по всем вопросам*/}
        {/*                </p>*/}
        {/*            </div>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <a href="/bani/karkasnye-bani" className={css.tovar}>*/}
        {/*                <div className="ratio ratio-21x9 rounded bg-secondary">*/}
        {/*                    <div className="p-4 d-flex flex-column justify-content-between">*/}
        {/*                        <Image*/}
        {/*                            className={css.blimg}*/}
        {/*                            alt="Mountains"*/}
        {/*                            src="/img/karkaska.png"*/}
        {/*                            layout="fill"*/}
        {/*                            objectFit="contain"*/}
        {/*                            objectPosition="right bottom"*/}
        {/*                        />*/}
        {/*                        <h5 className="z1">Каркасные бани</h5>*/}
        {/*                        <a className="z1 icon-link" href="/bani/karkasnye-bani">Подробнее<i className="bi bi-chevron-right"></i></a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </a>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <a href="/bani" className={css.tovar}>*/}
        {/*                <div className="ratio ratio-21x9 rounded bg-secondary">*/}
        {/*                    <div className="p-4 d-flex flex-column justify-content-between">*/}
        {/*                        <Image*/}
        {/*                            className={css.blimg}*/}
        {/*                            alt="Mountains"*/}
        {/*                            src="/img/brevno.png"*/}
        {/*                            layout="fill"*/}
        {/*                            objectFit="contain"*/}
        {/*                            objectPosition="right bottom"*/}
        {/*                        />*/}
        {/*                        <h5 className="z1">Бани из бревна</h5>*/}
        {/*                        <a className="z1 icon-link" href="/bani">Подробнее<i className="bi bi-chevron-right"></i></a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </a>*/}
        {/*        </Col>*/}
        {/*        <Col xs={12} md={4} className="mb-3">*/}
        {/*            <a href="/bani" className={css.tovar}>*/}
        {/*                <div className="ratio ratio-21x9 rounded bg-secondary">*/}
        {/*                    <div className="p-4 d-flex flex-column justify-content-between">*/}
        {/*                        <Image*/}
        {/*                            className={css.blimg}*/}
        {/*                            alt="Mountains"*/}
        {/*                            src="/img/brus.png"*/}
        {/*                            layout="fill"*/}
        {/*                            objectFit="contain"*/}
        {/*                            objectPosition="right bottom"*/}
        {/*                        />*/}
        {/*                        <h5 className="z1">Брусовые бани</h5>*/}
        {/*                        <a className="z1 icon-link" href="/bani">Подробнее<i className="bi bi-chevron-right"></i></a>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </a>*/}
        {/*        </Col>*/}
        {/*    </Row>*/}
        {/*</Container>*/}


        <div>
            <Container className="pt-5 pb-5">
                <h2 className="text-center pb-4">Контакты</h2>
                <Row>
                    <Col xs={12} md={4}>
                        <h5><i className="bi bi-telephone-fill"></i> Позвоните</h5>
                        <div>+7 (930) 234-56-56</div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5><i className="bi bi-envelope-fill"></i> Напишите</h5>
                        <div>info@asd.ru</div>
                    </Col>
                    <Col xs={12} md={4}>
                        <h5><i className="bi bi-geo-alt-fill"></i> Адрес</h5>
                        <div className="h6">г. Нижний Новгород, ул Писк 1 оф.3</div>
                    </Col>
                </Row>
            </Container>
        </div>

        <div className="advantages">
            <Image
                width="497"
                height="586"
                src="/img/advantages--before.png"
                layout="responsive"
            />
        </div>

        <div className="advantagesLeft">
            <Image
                width="497"
                height="586"
                src="/img/advantages--before.png"
                layout="responsive"
            />
        </div>
        <div className="banner">
            <Image
                src="/img/banner__bg.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
    </>
}

