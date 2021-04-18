import React, {Fragment, useEffect, useState} from "react";
import Stepper from "../../../components/stepper/stepper";
import {StepStart, StepStartBtn} from "../../../components/stepper/stepStart";
import {ViewKit} from "../../../components/stepper/viewKit";
import {StepOrderForm} from "../../../components/stepper/stepOrderForm";
import {StepFinal} from "../../../components/stepper/stepFinal";
import {useRouter} from "next/router";
import ListGroup from "../../../components/forms/ListGroup";
import {Row} from "react-bootstrap";
import ImgSelector from "../../../components/forms/imgSelector";

function StepNextBtn() {
    return null;
}

/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructor
 */
export default function ProjectPage({project}) {
    const router = useRouter()
    const [step, setStep] = useState({activeStep: 1, previousStep: 0})
    const [price, setPrice] = useState(project.price_1)
    const [curValid, setCurValid] = useState(true)
    const [stateNExtBtn, setStateNExtBtn] = useState('valid')

    function onStepChange(step) {
        setStep(step)
    }

    function onNext(SW) {
        //  Если выбрано что то на каком то шагу, то перепрыгнуть
        // Если в следующем состоянии фалидация фалсе
        if (map[step.activeStep-1].state?.name)

        if (map[step.activeStep-1].hasOwnProperty('state')) {
            if(map[step.activeStep-1].state?.name) {
                SW.nextStep();
            }
        } else {
            SW.nextStep();
        }
    }

    function onBack(SW) {
        if (step.activeStep === 1) {
            router.back()
            return
        }

        SW.previousStep();
    }

    function onClose() {
        router.back()
    }

    const [checkedFund, setCheckedFund] = useState({})
    const fundament = [
        {
            name: 'нет',
            price: 0,
            title: <><span className="badge bg-primary fw-bold">0 ₽</span></>,
            description: <>
                <div>Свой фундамент</div>
            </>
        },
    ]
    project.kits.фундамент.forEach(el => fundament.push({
        name: el.name,
        price: el.price,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name}</div>
    }))


    const [checkedOtdel, setCheckedOtdel] = useState({})
    const listOtdel = [
        {
            name: 'нет',
            price: 0,
            title: <>Отделка не нужна <span className="badge bg-primary fw-bold">0 ₽</span></>,
            description: <>
                <small>Отделка своими руками</small>
            </>
        },
        {
            name: 'комфорт',
            price: project.kits.отделка.комфорт.price,
            title: <>Отделка комфорт <span className="badge bg-primary fw-bold">+{project.kits.отделка.комфорт.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {project.kits.отделка.комфорт.items.map(el => <li className="list-group-item bg-transparent">{el.name}</li>)}
                </ul>
            </>
        },
        {
            name: 'премиум',
            price: project.kits.отделка.премиум.price,
            title: <>Отделка премиум <span className="badge bg-primary fw-bold">+{project.kits.отделка.премиум.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {project.kits.отделка.премиум.items.map(el => <li className="list-group-item bg-transparent">{el.name}</li>)}
                </ul>
            </>
        },
        {
            name: 'люкс',
            price: project.kits.отделка.люкс.price,
            title: <>Отделка люкс <span className="badge bg-primary fw-bold">+{project.kits.отделка.люкс.price.toLocaleString()}₽</span></>,
            description: <>
                <small>Нормальные сваи. Длинные и прочные. Вся информация на сайте производителя</small>
            </>,
            more: <>
                <ul className="list-group list-group-flush  rounded overflow-hidden">
                    {project.kits.отделка.люкс.items.map(el => <li className="list-group-item bg-transparent" >{el.name}</li>)}
                </ul>
            </>
        }
    ]


    const [checkedPech, setCheckedPech] = useState({})
    const listPech1 = [
        {
            name: 'нет',
            price: 0,
            img: '/img/Kukish_or_fig.jpeg',
            title: <>
                <h5><span className="badge bg-primary fw-bold">0 ₽</span></h5>
                <div className="text-info">Без печки</div>
            </>
        },
    ]
    project.kits.печное.печь.сталь.forEach(el => listPech1.push({
        name: el.name,
        price: el.price,
        img: '/img/voevoda-15.png',
        title: <>
            <h5><span className="badge bg-primary fw-bold">+{el.price && el.price.toLocaleString()} ₽</span></h5>
            <div className="text-info">{el.name} </div>
        </>
    }))
    const listPech2 = []
    project.kits.печное.печь.чугун.forEach(el => listPech2.push({
        name: el.name,
        price: el.price,
        img: '/img/voevoda-15.png',
        title: <>
            <h5><span className="badge bg-primary fw-bold">+{el.price && el.price.toLocaleString()} ₽</span></h5>
            <div className="text-info">{el.name} </div>
        </>
    }))


    const [checkedBak, setCheckedBak] = useState({})
    const listBak = []
    project.kits.печное.бак.forEach(el => listBak.push({
        name: el.name,
        price: el.price,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    const [checkedUstan, setCheckedUstan] = useState({})
    const listUstan = []
    project.kits.печное.обустройство.forEach(el => listUstan.push({
        name: el.name,
        price: el.price,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    const [checkedDimo, setCheckedDimo] = useState({})
    const listDimo = []
    project.kits.печное.дымоход.forEach(el => listDimo.push({
        name: el.name,
        price: el.price,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    const [checkedFire, setCheckedFire] = useState({})
    const listFire = []

    project.kits.пожарная.forEach(el => listFire.push({
        name: el.name,
        price: el.price,
        title: <><span className="badge bg-primary fw-bold">+{el.price.toLocaleString()} ₽</span></>,
        description: <div>{el.name} </div>
    }))

    const map = [
        {
            component: <StepStart project={project}/>,
            btnNext: <StepStartBtn />
        },
        {
            component: <>
                <h3 className="mb-4 text-center">Фундамент</h3>
                <ListGroup list={fundament} checked={checkedFund} onChecked={onChecked}/>
            </>,
            state: checkedFund,
            setState: setCheckedFund,
            btnNext: <StepNextBtn />
        },
        {
            component: <>
                <h3 className="mb-4 text-center">Отделка под ключ</h3>
                <ListGroup list={listOtdel} checked={checkedOtdel} onChecked={onChecked}/>
            </>,
            state: checkedOtdel,
            setState: setCheckedOtdel
        },
        {
            component: <>
                <h3 className="mb-4">Выберите печь</h3>

                <Row>
                    <h5 className="text-center my-4">Стальные</h5>
                    <ImgSelector list={listPech2} checked={checkedPech} onChecked={onChecked}/>
                    <h5 className="text-center my-4">Чугунные</h5>
                    <ImgSelector list={listPech1} checked={checkedPech} onChecked={onChecked}/>
                </Row>
            </>,
            state: checkedPech,
            setState: setCheckedPech
        },
        {
            component: <>
                <h3 className="my-4 text-center">Бак для воды</h3>
                <ListGroup list={listBak} checked={checkedBak} onChecked={onChecked}/>
            </>,
            state: checkedBak,
            setState: setCheckedBak
        },
        {
            component: <>
                <h3 className="mb-4 text-center">Установка печного оборудования</h3>
                <ListGroup list={listUstan} checked={checkedUstan} onChecked={onChecked}/>
            </>,
            state: checkedUstan,
            setState: setCheckedUstan
        },
        {
            component: <>
                <h3 className="mb-4 text-center">Дымоход</h3>
                <ListGroup list={listDimo} checked={checkedDimo} onChecked={onChecked}/>
            </>,
            state: checkedDimo,
            setState: setCheckedDimo
        },
        {
            component: <>
                <h3 className="mb-4">Пожарная бпасность</h3>
                <ListGroup list={listFire} checked={checkedFire} onChecked={onChecked}/>
            </>,
            state: checkedFire,
            setState: setCheckedFire
        },
        {
            component: <ViewKit/>
        },
        {
            component: <StepOrderForm/>
        },
        {
            component: <StepFinal/>
        },
    ];

    useEffect(updatePrice, map.map(el => el.state))

    useEffect(() => {
        if (map[step.activeStep-1].hasOwnProperty('state')) {
            if(map[step.activeStep-1].state && map[step.activeStep-1].state.name) {
                setCurValid(true)
            }
        }
    },  map.map(el => el.state))

    function onChecked(name, price) {
        if (map[step.activeStep-1] && map[step.activeStep-1].setState) {
            map[step.activeStep-1].setState({
                name: name,
                price: price
            })
        }
    }

    function updatePrice() {
        let sum = 0;
        map.map(el => {
            sum += el.state && el.state.price ? +el.state.price : 0
        })

        setPrice(project.price_1 + +sum)
    }

    return (
        <>
            <Stepper
                curValid={curValid}
                price={price}
                step={step}
                onStepChange={onStepChange}
                onNext={onNext}
                onBack={onBack}
                onClose={onClose}
            >
                {map.map((el, i) => <Fragment key={i}>{el.component}</Fragment>)}
            </Stepper>
        </>
    )
}

