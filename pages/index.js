import Head from 'next/head'
import HomePage from "../src/pages/home/home";

// export async function getStaticPaths() {
//     let res = await fetch(`http://localhost:1337/bani-categories`)
//     res = await res.json()
//
//     const paths = res.map((v) => `/bani/${v.slug}`);
//
//     return {
//         paths,
//         fallback: false
//     }
// }

const {API_URL} = process.env

export async function getStaticProps({ params }) {
    let res = await fetch(`${API_URL}/bani-categories?slug=karkasnye-bani`);
    res = await res.json()

    return {
        props: {
            category: res[0]
        },
    }
}

export default function Home(props) {
    return (
        <>
            <Head>
                <title>Главная</title>
            </Head>
            <HomePage {...props}/>
        </>
    )
}
