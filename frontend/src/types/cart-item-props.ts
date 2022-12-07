import { CartItemType } from "./cart-item";
export interface CartItemProps {
    item: CartItemType;
    onIncrement: () => void;
    onDecrement: () => void;
    onRemove: () => void;
}
