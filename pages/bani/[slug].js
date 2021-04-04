import Head from "next/head";
import CategoryPage from "../../src/pages/bani/category";

export async function getStaticPaths() {
    let res = await fetch(`http://localhost:1337/bani-categories`)
    res = await res.json()

    const paths = res.map((v) => `/bani/${v.slug}`);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    let res = await fetch(`http://localhost:1337/bani-categories?slug=${params.slug}`);
    res = await res.json()

    return {
        props: {
            category: res[0]
        },
    }
}

export default function Category(props) {
    return <>
        <Head>
            <title>{props.category.name}</title>
        </Head>
        <CategoryPage {...props} />
    </>
}
