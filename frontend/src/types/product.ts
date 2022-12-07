export type Price = {
    amount: number;
    currency: string;
}

export type Product = {
    id: string;
    title?: string;
    imageUrl?: string;
    url?: string;
    prices?: Price[];
};
