import React from "react";

export default function OnlyMain(props) {
    const {children} = props;
    return (
        <main style={{minHeight:'100%'}}>
            {children}
        </main>
    )
}
