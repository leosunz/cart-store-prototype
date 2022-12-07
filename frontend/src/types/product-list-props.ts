import { Product } from "./product";

export interface ProductListProps {
    productList: Product[];
    onItemCart: (data: Product) => void;
}
