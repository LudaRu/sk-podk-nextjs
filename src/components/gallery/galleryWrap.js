import ImageGallery from 'react-image-gallery';
import React, {useEffect, useState} from "react";
import Image from "next/image";

const {API_URL} = process.env

function format(data) {
    function renderItem(el) {
        return <Image
            className="image-gallery-image rounded"
            src={el.original}
            layout="intrinsic"
            width="1000"
            height="750"
            sizes="
                        (min-width: 360px) 360px,
                        (min-width: 992px) 360px
                        "
        />
    }

    function renderThumbInner(el) {
        return <span className="image-gallery-thumbnail-inner">
            <Image
                className="image-gallery-thumbnail-image rounded-1"
                src={el.thumbnail}
                layout="intrinsic"
                width="1000"
                height="750"
                sizes="
                        (min-width: 360px) 360px,
                        (min-width: 576px) 640px,
                        (min-width: 768px) 828px,
                        (min-width: 992px) 1000px
                        "
            />
        </span>

    }

    return data.map(el => ({
        original: API_URL + (el.formats.large?.url || el.url),
        thumbnail: API_URL + (el.formats.thumbnail?.url || el.url),
        renderThumbInner,
        renderItem
    }))
}

export default function GalleryWrap({
    images,
    modalShow = false,
    thumbnailPosition,
    slideDuration= 400,
    renderCustomControls,
}) {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth <= 800)
    }, [])

    let position = thumbnailPosition || 'right';

    if (isMobile && thumbnailPosition !== 'top') {
        position = 'bottom'
    }

    return (
        <ImageGallery
            items={format(images)}
            showPlayButton={false}
            useBrowserFullscreen={false}
            thumbnailPosition={position}
            slideDuration={slideDuration}
            renderCustomControls={renderCustomControls}
        />
    )
}
