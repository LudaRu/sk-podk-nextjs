import Image from "next/image";
import React from "react";

export default function RoundTovar() {
    return <div>
        <div className="rounded-circle ratio ratio-1x1 border border-4 bg-white border-info">
            <Image
                className="rounded-circle ratio p-2 "
                src="/img/dubok-1-2.jpg"
                layout="fill"
                objectFit="cover"
            />
        </div>
        <div className="letter-btn text-center text-uppercase mt-2 text-primary">
            Каркасные бани
        </div>
    </div>
}
