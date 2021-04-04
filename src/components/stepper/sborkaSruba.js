import ListGroup from "../forms/ListGroup";
import React from "react";

export function SborkaSruba(props) {

    const list = [{
        title: <>Без сборки <span className="badge bg-primary fw-bold">0 ₽</span></>,
        description: <>
            <div>Сборка своими руками</div>
        </>
    },
        {
            title: <>Сборка под усадку <span className="badge bg-primary fw-bold">+100 000 ₽</span></>,
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
