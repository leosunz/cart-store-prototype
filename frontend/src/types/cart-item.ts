import { Product } from "./product";

export type CartItemType = {
    product: Product;
    count: number;
    price?: number;
}
