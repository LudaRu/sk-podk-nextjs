import Head from "next/head";
import ProjectPage from "../../../src/pages/bani/project/project";
import OnlyMain from "../../../src/layout/onlyMain";

export async function getStaticPaths() {
    let res = await fetch(`http://localhost:1337/banis`)
    res = await res.json()

    const paths = res.map((v) => `/bani/project/${v.slug}`);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    let res1 = await fetch(`http://localhost:1337/banis?slug=${params.slug}`)
    let res2 = await fetch(`http://localhost:1337/bani-selectors`)
    res1 = await res1.json()
    res2 = await res2.json()

    // res1[0].kits.фундамент
    res1[0].kits.фундамент.forEach(el => {
        res2.forEach(item => {
            if (el.name.toUpperCase().replace(/\s/g, '') === item.key.toUpperCase().replace(/\s/g, '')) {
                el.id = item.id
                el.img = item.img
                el.name = item.name
                el.key = item.key
                el.more = item.more
                el.short_desk = item.short_desk
            }
        })

    })

    return {
        props: {
            project: res1[0],
        },
    }
}

export default function ProductCard(props) {
    return <>
        <Head>
            <title>{props.project.title}</title>
        </Head>
        <ProjectPage {...props} />
    </>
}

ProductCard.Layout = OnlyMain


