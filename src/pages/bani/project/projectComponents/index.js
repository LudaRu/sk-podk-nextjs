import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import classNames from 'classnames';
import React, {useEffect, useState} from "react";
import css from "./style.module.scss";
import KitItem from "./kitItem";
import CheckBoxGroup from "../../../../components/forms/ChekBoxItem";
import GalleryWrap from "../../../../components/gallery/galleryWrap";
import Otdelka from "./otdelka";


function formatOtdelka(data) {
    return [{
        name: 'нет',
        price: 0,
    },{
        name: 'Комфорт',
        price: data.комфорт.price,
        shortDesc: [<div className="mt-4">{data.комфорт.items.map(row => (
            <p className="">{row.category}: {row.name}</p>
        ))}</div>],
    },
        {
            name: 'Премиум',
            price: data.премиум.price,
            shortDesc: [<div className="mt-4">{data.премиум.items.map(row => (
                <p className="">{row.category}: {row.name}</p>
            ))}</div>],
        },
        {
            name: 'Люкс',
            price: data.люкс.price,
            shortDesc: data.люкс.items.map(row => (`${row.category}: ${row.name}`)),
        }]
}

function format(data) {
    const list = [];

    data.forEach(el => list.push({
        name: el.name,
        price: el.price,
        img: el.img,
        shortDesc: el.short_desk,
        more: el.more,
        id: el.id,
    }))

    return list;
}

export default function Index({project, setPrice}) {
    const [isShowPlan, setIsShowPlan] = useState(false);

    const [checkFund, setCheckFund] = useState({})
    const [modalShowFund, setModalShowFund] = useState(false)

    const [checkOtdelka, setCheckOtdelka] = useState({})
    const [modalShowOtdelka, setModalShowOtdelka] = useState(false)

    const [checkPech, setCheckPech] = useState({})
    const [modalShowPech, setModalShowPech] = useState(false)

    const [checkBac, setCheckBac] = useState({})
    const [modalShowBac, setModalShowBac] = useState(false)

    const [checkDimo, setCheckDimo] = useState({})
    const [modalShowDimo, setModalShowDimo] = useState(false)

    const [checkPojar, setCheckPojar] = useState({})
    const [modalShowPojar, setModalShowPojar] = useState(false)

    const [checkObustr, setCheckObustr] = useState({})
    const [modalShowObustr, setModalShowObustr] = useState(false)

    const [isMired, setIsMired] = useState(false)

    const getStateFormat = (name, data) => {
        let result = {};
        if (data) {
            data.forEach(el => {
                if (el.name === name) {
                    result = {
                        name: el.name,
                        price: el.price,
                        img: el.img,
                        shortDesc: el.short_desk,
                        more: el.more,
                        id: el.id,
                    }
                }
            })
        }

        return result;
    }

    useEffect(() => {
        if (localStorage.getItem('karkasKit')) {
            const karkasKit = JSON.parse(localStorage.getItem('karkasKit'));
            setCheckFund((getStateFormat(karkasKit.checkFund, project.kits.фундамент)) || {})
            // setCheckOtdelka(getStateFormat(karkasKit.checkOtdelka, formatOtdelka(project.kits.отделка)) || {})
            setCheckPech(getStateFormat(karkasKit.checkPech, [...project.kits.печное.печь.сталь, ...project.kits.печное.печь.чугун]) || {})
            setCheckBac(getStateFormat(karkasKit.checkBac, project.kits.печное.бак) || {})
            setCheckDimo(getStateFormat(karkasKit.checkDimo, project.kits.печное.дымоход) || {})
            setCheckPojar(getStateFormat(karkasKit.checkPojar, project.kits.пожарная) || {})
            setCheckObustr(getStateFormat(karkasKit.checkObustr, project.kits.печное.обустройство) || {})
        }
    }, [])

    // useEffect(() => {
    //     let totalPrice = project.price_1;
    //     [checkFund, checkOtdelka, checkPech, checkBac, checkDimo, checkPojar, checkObustr].forEach(el => {
    //         if (el.price) {
    //             totalPrice += el.price;
    //         }
    //     })
    //     setPrice(totalPrice)
    //     localStorage.setItem('karkasKit', JSON.stringify({
    //         checkFund: checkFund.name,
    //         checkOtdelka: checkOtdelka.name,
    //         checkPech: checkPech.name,
    //         checkBac: checkBac.name,
    //         checkDimo: checkDimo.name,
    //         checkPojar: checkPojar.name,
    //         checkObustr: checkObustr.name,
    //     }))
    //
    // }, [checkFund, checkOtdelka, checkPech, checkBac, checkDimo, checkPojar, checkObustr])


    return (<>
            <div className="container mb-4">

                <div className="d-flex align-items-center p-3 mb-3 bg-white shadow-sm rounded">
                    <h1 className="h4 mb-0">Каркасная баня {project.opt_size_bani_w}x{project.opt_size_bani_h}</h1>
                </div>

                <div className="shadow-sm bg-white rounded overflow-hidden mt-3">
                    <GalleryWrap images={[...project.images, project.plan_3d]}/>
                    <h5 className="text-muted p-3 m-4 mb-2 bg-secondary rounded">
                        Каркас под крышей без отделки
                        <small className="bg-primary h5 ms-2 mb-0 p-1 rounded">{Number(project.price_1).toLocaleString()} ₽</small>
                    </h5>
                    <h5 className="px-4">Что входит в стоимость</h5>


                    <div className="list-group list-group-flush">
                        <div className="border-bottom px-4 py-2">
                            <span className="fw-bold">Нижняя Обвязка: </span>
                            <small>Брус 100х150 мм. Хвоя Ест. Влажности</small>
                        </div>
                        <div className="border-bottom px-4 py-2" >
                            <span className="fw-bold">Лаги пола: </span>
                            <small>Доска 40х100мм. Ест. Влажности</small>
                        </div>
                        <div className="border-bottom px-4 py-2" >
                            <span className="fw-bold">Каркас Стен: </span>
                            <small>Доска 40х100мм. Ест. Влажности</small>
                        </div>
                        <div className="border-bottom px-4 py-2" >
                            <span className="fw-bold">Стропила Кровли: </span>
                            <small>Доска 40х100мм. Ест. Влажности</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Обрешетка кровли: </span>
                            <small>Доска 25х100мм. 2 сорт. Ест. Влажности</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Гидроизоляция кровли: </span>
                            <small>Изоспан "D"</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Кровля покрытие: </span>
                            <small>Профлист С-10 Оцынкованный+ Коньковые
                                элементы+Крепеж</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Изоляция стен внешняя: </span>
                            <small>Изоспан "А"</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Крепеж: </span>
                            <small>Опроы бруса, саморезы ,гвозди, скобы</small>
                        </div>
                        <div  className="border-bottom px-4 py-2">
                            <span className="fw-bold">Антисептик: </span>
                            <small>Антисептик для обработки обвязки и лаг пола
                                от плесени синевы и гниения</small>
                        </div>
                        <div  className="px-4 py-2">
                            <span className="fw-bold">Сборка на учатке заказчика </span>
                        </div>
                    </div>
                </div>

                <div className="mt-5 bg-white shadow rounded">
                    <h4 className="px-4 pt-4 mb-0">Для строительства бани под ключ выберите комплектующие</h4>
                    <p className="text-muted px-4"><i className="bi bi-info-circle-fill text-success"/> Вы можете не выбирать
                    </p>
                    <KitItem
                        modalTitle='Фундамент'
                        checked={checkFund}
                        modalShow={modalShowFund}
                        setModalShow={setModalShowFund}
                        modalBody={<CheckBoxGroup
                            list={[{
                                name: 'нет',
                                price: 0,
                            }, ...format(project.kits.фундамент)]}
                            checked={checkFund}
                            setChecked={(val) => {
                                setCheckFund(val);
                                setModalShowFund(false)
                            }}/>}
                    />
                    <Otdelka
                        form={checkOtdelka}
                        setForm={setCheckOtdelka}
                        data={project.kits.отделка}
                    />

                    <KitItem
                        modalTitle='Печь'
                        checked={checkPech}
                        modalShow={modalShowPech}
                        setModalShow={setModalShowPech}
                        modalBody={<>
                            <h6>Чугунные</h6>
                            <CheckBoxGroup
                                list={[{name: 'нет', price: 0}, ...format(project.kits.печное.печь.чугун)]}
                                checked={checkPech}
                                setChecked={(val) => {
                                    setCheckPech(val);
                                    setModalShowPech(false)
                                }}
                            />
                            <h6>Стальные</h6>
                            <CheckBoxGroup
                                list={[{name: 'нет', price: 0}, ...format(project.kits.печное.печь.сталь)]}
                                checked={checkPech}
                                setChecked={(val) => {
                                    setCheckPech(val);
                                    setModalShowPech(false)
                                }}
                            />
                        </>}
                    />

                    <KitItem
                        modalTitle='Обустройство печи'
                        checked={checkObustr}
                        modalShow={modalShowObustr}
                        setModalShow={setModalShowObustr}
                        modalBody={<CheckBoxGroup
                            multiple
                            list={[{
                                name: 'нет',
                                price: 0,
                            }, ...format(project.kits.печное.обустройство)]}
                            checked={checkObustr}
                            setChecked={(val) => {
                                setCheckObustr(val);
                                setModalShowObustr(false)
                            }}/>}
                    />

                    <KitItem
                        modalTitle='Бак'
                        checked={checkBac}
                        modalShow={modalShowBac}
                        setModalShow={setModalShowBac}
                        modalBody={<CheckBoxGroup
                            list={[{
                                name: 'нет',
                                price: 0,
                            }, ...format(project.kits.печное.бак)]}
                            checked={checkBac}
                            setChecked={(val) => {
                                setCheckBac(val);
                                setModalShowBac(false)
                            }}/>}
                    />
                    <KitItem
                        modalTitle='Дымоход'
                        checked={checkDimo}
                        modalShow={modalShowDimo}
                        setModalShow={setModalShowDimo}
                        modalBody={<CheckBoxGroup
                            list={[{
                                name: 'нет',
                                price: 0,
                            }, ...format(project.kits.печное.дымоход)]}
                            checked={checkDimo}
                            setChecked={(val) => {
                                setCheckDimo(val);
                                setModalShowDimo(false)
                            }}/>}
                    />
                    <KitItem
                        modalTitle='Пожарная безопасность'
                        checked={checkPojar}
                        modalShow={modalShowPojar}
                        setModalShow={setModalShowPojar}
                        modalBody={<CheckBoxGroup
                            list={[{
                                name: 'нет',
                                price: 0,
                            }, ...format(project.kits.пожарная)]}
                            checked={checkPojar}
                            setChecked={(val) => {
                                setCheckPojar(val);
                                setModalShowPojar(false)
                            }}/>}
                    />
                </div>


                <div className="p-4 bg-white mt-5 shadow rounded">
                    <h4 className="mb-0">Варианты планировки</h4>
                    <p className="text-muted"><i className="bi bi-info-circle-fill text-success"/> Планировка может быть изменена </p>
                    <div className="d-flex px-1 mb-3">
                        { !!project.plans_right.length && <button className="btn btn-primary" onClick={() => setIsMired(!isMired)}>
                            <i className="bi bi-arrow-counterclockwise"></i> Отзеркалить
                        </button>}
                    </div>
                    <GalleryWrap
                        images={!isMired ? project.plans_left : project.plans_right}
                        slideDuration={0}
                        thumbnailPosition="left"
                    />

                </div>
            </div>
        </>
    );
}

export function Footer({price}) {
    const [modalShow, setModalShow] = React.useState(false);
    const [isOrdered, setOrdered] = React.useState(false);

    return (
        <div className={css.root}>
            <Container style={{maxWidth: '900px', margin: '0 auto'}}>
                <Row>
                    <Col xs={12}>
                        <div className={css.footer}>
                            <div className="py-2 d-flex align-items-center">
                                <div className="h5 text-info  mb-0 ">
                                    <div style={{fontSize: "14px", marginBottom: "-4px"}}>итого</div>
                                    <div className="fw-bolder">{Number(price).toLocaleString()} ₽</div>
                                </div>
                            </div>
                            <div className="py-2 d-flex align-items-center">
                                {isOrdered
                                    ? <div className="text-info"><i className="bi bi-check-circle-fill"></i> Заказ
                                        оформлен<br/> Мы с вами свяжемся</div>
                                    : <button className="btn btn-info" onClick={() => setModalShow(true)}>Офорить
                                        заказ</button>
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                scrollable
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Оформить заказ</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Телефон</label>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={() => {
                        setOrdered(true)
                        setModalShow(false);
                    }}>Оформить</Button>
                </Modal.Footer>
            </Modal>
        </div>)
}
