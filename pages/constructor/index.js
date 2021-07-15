import Head from 'next/head'
import ConstructorBani from "../../src/pages/constructorBani/constructorBani";

const {API_URL} = process.env

export async function getStaticProps({params}) {
    let res = await fetch(`${API_URL}/banis`)
    res = await res.json()

    const baniBySizes = {};

    res.forEach(el => {
        const key = `${el.opt_size_bani_w}x${el.opt_size_bani_h}`
        if (!baniBySizes[key]) {
            baniBySizes[key] = [];
        }

        baniBySizes[key].push(el)
    })

    return {
        props: {
            baniBySizes: baniBySizes,
        },
    }
}

export default function Constructor({ baniBySizes}) {
    return (
        <>
            <Head>
                <title>Конструктор бани</title>
            </Head>
            <ConstructorBani baniBySizes={baniBySizes}/>
        </>
    )
}
