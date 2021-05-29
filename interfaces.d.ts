export interface BaniSelectors {
    id: number;
    key: string;
    name: string;
    short_desk: string;
    more?: any;
    created_at: Date;
    updated_at: Date;
    img: Image;
}


export interface BaniCategory {
    id: number;
    name: string;
    slug: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    bani: Bani[];
}

interface Bani {
    id: number;
    name: string;
    slug: string;
    number: number;
    created_at: string;
    updated_at: string;
    price_1: number;
    price_2: number;
    price_3: number;
    price_4: number;
    discount: number;
    opt_size_bani_w: number;
    opt_size_bani_h: number;
    opt_size_veranda_w: number;
    opt_size_veranda_h: number;
    opt_size_parnoi_w: number;
    opt_size_parnoi_h: number;
    opt_count_rooms: number;
    opt_size_wall: number;
    opt_dot_foundation: number;
    opt_ceiling_height: number;
    opt_roof_area: number;
    kits: Kits;
    images: Image[];
    plans_left: Image[];
    plans_right: Image[];
    plan_3d: Image;
    bani_categories: BaniCategory[];
}

interface Kits {
    отделка: {
        комфорт: {
            items: { category: string, name: string }[]
            price: number
        },
        люкс: {
            items: { category: string, name: string }[]
            price: number
        },
        премиум: {
            items: { category: string, name: string }[]
            price: number
        },
    },
    печное: {
        бак: { name: string, price: number }[],
        дымоход: { name: string, price: number }[],
        обустройство: { name: string, price: number }[],
        печь: {
            сталь: { name: string, price: number }[],
            чугун: { name: string, price: number }[],
        },
    },
    пожарная: { name: string, price: number }[],
    фундамент: { name: string, price: number }[],
}

interface Image {
    id: number;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl?: any;
    provider: string;
    provider_metadata?: any;
    created_at: string;
    updated_at: string;
}


interface Formats {
    large: Thumbnail;
    small: Thumbnail;
    medium: Thumbnail;
    thumbnail: Thumbnail;
}

interface Thumbnail {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path?: any;
    size: number;
    width: number;
    height: number;
}
