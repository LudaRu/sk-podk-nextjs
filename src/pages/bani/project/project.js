import React, {useState} from "react";
import Link from 'next/link'
import Index, {Footer} from "./projectComponents";

/**
 *
 * @param {Bani} project
 * @returns {JSX.Element}
 * @constructorBani
 */
export default function ProjectPage({project}) {
    const [price, setPrice] = useState(project.price_1)

    return (
        <>
            <div className="shadow-sm"
                 style={{backdropFilter: 'saturate(180%) blur(20px)', backgroundColor: 'rgba(255,255,255,0.72)'}}>
                <div style={{maxWidth: '900px', margin: '0 auto'}}>
                    <div className="d-flex justify-content-between py-3">
                        <Link href="/">
                            <a className="a cpoint">
                                <i className="bi bi-chevron-left"/>Назад
                            </a>
                        </Link>
                        <Link href="/">
                            <a
                                type="button"
                                className="btn-close"
                                aria-label="Close"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-light pb-4 pt-4" style={{minHeight: 'calc(100vh - 50px - 64px)'}}>
                <div style={{maxWidth: '900px', margin: '0 auto'}}>
                    <Index project={project} setPrice={setPrice}/>
                </div>
            </div>
            <Footer price={price} setPrice={setPrice}/>
        </>
    )
}

