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
    let res = await fetch(`http://localhost:1337/banis?slug=${params.slug}`)
    res = await res.json()

    return {
        props: {
            project: res[0]
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


