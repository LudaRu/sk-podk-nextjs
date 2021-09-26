export function formatKits(kits = {}) {


    kits['Утепление пола по бане кроме веранд, парной и помывочной,100мм. (Утеплитель Кнауф,Урса,Изовер) Рулонный'].price
        = kits['Утепление пола по бане кроме веранд, парной и помывочной,100мм. (Утеплитель Кнауф,Урса,Изовер) Рулонный'].price
        + kits['Устройство чернового пола доской 25х100мм шагом 300мм. Под утепление пола'].price;

    kits['Утепление стены потолок 150мм., Утепление перегородок 100мм. (Утеплитель URSA TERRA Плитный)'].price
        = kits['Утепление стены потолок 150мм., Утепление перегородок 100мм. (Утеплитель URSA TERRA Плитный)'].price
        + kits['Каркас внешних стен толщиной 150мм. из доски 40х150мм под 150 утепление'].price;

    kits['Утепление стены потолок 150мм., Утепление перегородок 100мм. (Утеплитель URSA TERRA Плитный)'].work
        = kits['Утепление стены потолок 150мм., Утепление перегородок 100мм. (Утеплитель URSA TERRA Плитный)'].work
        + kits['Каркас внешних стен толщиной 150мм. из доски 40х150мм под 150 утепление'].work;


    function get(key) {
        if (kits[key]) {
            return {
                [key]: +(kits[key].price + kits[key].work).toFixed()
            }
        }

    }


    return {
        фундамент:
            {
                list: {
                    ...get('фундамент Эконом (керамзото-бетонные блоки 2 блока в опоре)'),
                    ...get('фундамент Усиленный  (керамзото-бетонные блоки 200х200х400мм., 4 блока в опоре)'),
                    ...get('фундамент сплошная лента широной 200мм. из керамзото-бетонных блоков'),
                    ...get('Фундамент на забивных ЖБ сваях'),
                    ...get('Фундамент на винтовых сваях. ф108. Лопасть 250мм. Длинна сваи 2.5м'),
                }
            }
        ,
        печь: {
            сталь: {
                list: {
                    ...get('Волга Мини'),
                    ...get('Сварга 10 без выноса'),
                    ...get('Сварга 10 с выносом'),
                    ...get('Корвет 15 (сетчатый кожух)'),
                    ...get('Березка"Оптима" 12(ДТ-3)'),
                    ...get('Березка "Оптима" 12(ДТ-3) стекло'),
                    ...get('Ермак 12'),
                    ...get('Ермак-Элит 12С (стекло)'),
                }
            },
            чугун: {
                list: {
                    ...get('Берёзка Воевода 15 Сетчатый кожух'),
                    ...get('Берёзка Воевода 15 ДТ3-стекло, Сетчатый кожух'),
                    ...get('Везувий Легенда 12 стандарт (ДТ-3) Глухая дверь'),
                    ...get('Везувий Легенда 12 стандарт (ДТ-3С) Стеклянная Дверь'),
                    ...get('Гефест Гроза в сетке (18) М Стеклянная Дверь'),
                    ...get('Гефест ЗК в сетке 18 (М) Стеклянная Дверь'),
                }
            },
        },
        дымоход: {
            list: {
                ...get('Дымоход-1. контурная труба + базальт.+ шибер +ППУ+Крышная разделка.+Оголовок. Оцинкованные'),
                ...get('Дымоход-2х. контурная сэндвич труба  Нерж. Оцинковка компл.+ Оголовок. Оцинкованные'),
                ...get('Дымоход-2х. контурная сэндвич труба  Нерж. Нерж. компл.+ Оголовок нержавейка'),
                ...get('Дымоход-2х. контурная сэндвич труба наполнение керамическая вата "Супервул".  Нерж. Нерж. компл. + Оголовок нерж'),

            }
        },
        бак: {
            list: {
                ...get('Бак на трубе 60 л (Техническая Нержавеющая сталь Aisi-430)+ кран+ латунный угольник'),
                ...get('Бак на трубе 60 л (Пищевая Нержавеющая сталь Aisi-304)+ кран+ латунный угольник'),
                ...get('Бак на трубе 80 л (Пищевая Нержавеющая сталь Aisi-304).+ кран+ латунный угольник'),
                ...get('Выносной бак с теплообменником 80 л(Техническая Нержавеющая сталь Aisi-430)+кран+труба металпластик+теплообменник'),
                ...get('Выносной бак с теплообменником 80 л  (Пищевая Нержавеющая сталь Aisi-304) + кран+труба металпластик+ теплообменник'),
            }
        },
        'обустройство печи': {
            multiple: true,
            list: {
                ...get('Кирпич под печь + кирпич для обкладки портала+смесь кладочная'),
                ...get('Камни на каменку Карельский Габродиабаз 2 упаковки по 20кг'),
                ...get('Камни на каменку Малиновый кварцит 2 упаковки  по 20кг'),
                ...get('Устройство независимого фундамента под печь из Блоков (рекомендуется под чугунную печь)'),
            }
        },
        'пожарная безопасность': {
            'защитный экран': {
                list: {
                    ...get('Комплект защитных экранов из оцинковки+базальтовая изоляция под экраны'),
                    ...get('Комплект защитных экранов из нержавейки+базальтовая изоляция под экраны'),
                    ...get('Комплект защитных экранов Флама (огнеупорная плита бля бань и саун)'),
                }
            },
            люк: {
                multiple: true,
                list: {...get('Люк лаз на чердак из предбанника.(для контроля и ревизии дымохода)'),}
            }
        },
        отделка: {
            'кровля': {
                list: {
                    ...get('Метало черепица монтерей цвет на выбор ( зелён, коричн, вишня)'),
                    ...get('Профлист С-10 окрашенный цвет на выбор ( зелён, коричн, вишня)'),
                    ...get('Мягкая кровля  не предусмотрена'),
                }
            },
            'внешняя отделка': {
                list: {
                    ...get('Внешняя отделка бани.Евровагонка сорт "В"'),
                    ...get('Внешняя отделка бани. Рау Хаус (Имитация бруса) сорт "В"'),
                    ...get('Внешняя отделка бани. Блок Хаус (Имитация бревна) сорт "В"'),
                }
            },
            'внутрянняя отделка': {
                list: {
                    ...get('Отделка стен и потолков по всей бане Сосновая Евровагонка  сорт "В" ., По пар изоляции "Изофлекс-В"'),
                    ...get('Отделка стен и потолков по всей бане Сосновая Имитация бруса сорт "В" ., По пароизоляции "Изофлекс-В"'),
                    ...get('Отделка потолка в парной осиновая вагонка сорт "В" ., По пароизоляции "Изофлекс-В"'),
                    ...get('Отделка всей парной осиновая вагонкой сорт "В" ., По пароизоляции "Изофлекс-В"'),
                    ...get('Изоляция в парной фольгированная пароизоляция на крафт-бумаге'),
                }
            },
            'настил пола': {
                list: {
                    ...get('Полы по всей бане доска шпунтовая 28мм'),
                    ...get('Полы по всей бане доска шпунтовая 36мм'),
                    ...get('Полы по всей бане доска естественной влажности строганная 40мм'),
                }
            },
            'полога в парной': {
                list: {
                    ...get('Полога 1 уровневые прямые строганная доска  из Осины'),
                    ...get('Полога 1 уровневые прямые строганная доска  из Липы'),
                    ...get('Полога 2х уровневые прямые фабричные из Осины'),
                    ...get('Полога 2х уровневые прямые фабричные из Липы'),
                }
            },
            'финишная отделка': {
                list: {
                    ...get('Плинтуса хвойные 35мм. Обналичка окон дверей-вагонка хвоя')
                }
            },
            'окна': {
                list: {
                    ...get('Окна деревянные, банные, утепленные с открыванием,1 камерный стеклопакет в 2 стекла'),
                    ...get('Окна пластиковые с открыванием,1 створки, 1 камерный стеклопакет в 2 стекла'),
                }
            },
            'двери': {
                multiple: true,
                list: {
                    ...get('Все двери деревянные: банные массив сосны собраны на клин. к-т'),
                    ...get('Стеклянная дверь в парное отделение'),
                    ...get('Стеклянная дверь в помывочное отделение'),
                    ...get('Дверь входная Металлическая производства Россия. к-т'),
                }
            },
            'утепление': {
                multiple: true,
                list: {
                    ...get('Утепление стены, перегородки,потолоки 100мм. (Утеплитель Кнауф,Урса,Изовер) Рулонный'),
                    ...get('Утепление стены, перегородки,потолоки 100мм. (Утеплитель URSA TERRA Плитный)'),
                    ...get('Утепление стены потолок 150мм., Утепление перегородок 100мм. (Утеплитель URSA TERRA Плитный)'),
                    ...get('Утепление пола по бане кроме веранд, парной и помывочной,100мм. (Утеплитель Кнауф,Урса,Изовер) Рулонный'),
                }
            },
            'конструктив основания': {
                multiple: true,
                list: {
                    ...get('Нижняя обвязка брус150х150мм + лаги пола доска 150х40'),
                    ...get('Страпила,+Лаги потолка доска 50х150мм'),
                }
            },
            'коммуникации благоустройство': {
                multiple: true,
                list: {
                    ...get('Закрытый цоколь профлист, крепление кровельными саморезами'),
                    ...get('Слив под мойкой  желоб оцинкованный+отводящие трубы ф 50мм.с трапом и воронкой'),
                    ...get('Бочка под слив из бани металлическая 200л'),
                    ...get('Козырек перед входом профлист 1х1 м.+ приступок перед входом'),
                    ...get('Вентиляция из парной: вентиляционная решетка с задвижкой'),
                    ...get('Вентиляция "БАСТУ" из парной'),
                    ...get('Водосточная система пластиковая цвет белый. "Леруа Мерлен"'),

                }
            },
            'защита от внешних факторов': {
                multiple: true,
                list: {
                    ...get('Покраска бани внешняя. Краска Акватекс Цвет из наличия'),
                    ...get('Покраска бани внешняя. Краска Тикурил, Цвет из наличия'),
                    ...get('Обработка каркаса огнебиозащитой NEOMID 1-группа'),

                }
            },
        }
    }
}
