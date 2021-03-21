import Head from 'next/head'
import HomePage from "../src/pages/home/home";

export default function Home() {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <HomePage/>
        </>
    )
}
