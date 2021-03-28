import Head from "next/head";
import DefaultLayout from "../src/layout/default";
import "../styles/index.scss"

function MyApp({Component, pageProps, router}) {

    const Layout = Component.Layout || DefaultLayout;
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Layout>
                <Component {...pageProps} key={router.route}/>
            </Layout>
        </>
    );
}

export default MyApp
