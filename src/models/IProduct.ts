export interface IProduct {
    id: number;
    name: string;
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