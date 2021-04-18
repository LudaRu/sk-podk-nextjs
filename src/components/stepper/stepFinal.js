import React from "react";
import {useRouter} from "next/router";

export default function stepFinal() {
    const router = useRouter()

    return {
        component: <>
            <h3>Заказ оформлен</h3>
            <h3>Мы скоро с вами свяжемся</h3>
        </>,
        onNext: () => router.back(),
        nextText: 'Закрыть'
    }
}
