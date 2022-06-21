export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    rating: IRating;
    img: string;
}

interface IRating {
    rate: number;
    count: number;
}