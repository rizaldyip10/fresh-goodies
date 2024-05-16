import { ShoppingCart } from "@/types/cart";
import { createContext } from "react";

const CartContext = createContext<ShoppingCart | undefined>(undefined);

export default CartContext;