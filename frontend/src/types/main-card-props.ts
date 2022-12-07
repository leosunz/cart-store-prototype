import { Product } from "./product";

export interface CardProps extends Product {
  onEmit: (data: Product) => void;
}
