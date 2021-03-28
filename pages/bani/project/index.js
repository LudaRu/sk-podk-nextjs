import Head from 'next/head'
import ProjectPage from "../../../src/pages/bani/project/project";
import OnlyMain from "../../../src/layout/onlyMain";

export default function Project() {
    return (
        <>
            <Head>
                <title>КБ-1</title>
            </Head>
            <ProjectPage/>
        </>
    )
}

Project.Layout = OnlyMain;
