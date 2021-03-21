import Head from "next/head";
import Layout from "../src/layout";
import "../styles/index.scss"

function MyApp({Component, pageProps, router}) {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <Component {...pageProps} key={router.route} />
            </Layout>
        </>
    );
}

export default MyApp
