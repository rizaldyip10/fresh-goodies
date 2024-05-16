"use client";

import { config } from "@/constants/url";
import { CartItem, ShoppingCart } from "@/types/cart";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CartContext from "./cartContext";
import { Product } from "@/types/product";

const LOCAL_STORAGE_NAME = "shoppingCartList";

export const CartProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const addItem = (product: Product, quantity: number) => {
        setCartItems(preVal => [...preVal, { productId: product, quantity }]);
    };

    const removeItem = (productId: number) => {

    }

    const updateItemQuantity = (productId: number, quantity: number) => {

    }

    const getTotalItemPrice = (): number => {
        let a = 0;
        return a;
    }

    useEffect(() => {
        const fetchCart = async () => {
            try {
                const storedShoppingList = localStorage.getItem(LOCAL_STORAGE_NAME);
                if (storedShoppingList && storedShoppingList.length > 0) {
                    const data = JSON.parse(storedShoppingList) as ShoppingCart;
                    const cartItemsData = data.items as CartItem[];
                    setCartItems(cartItemsData)
                    
                } else {
                    const { data, status } = await axios.get(config.BASE_URL + config.endpoints.cart);
                    if (status !== 200) {
                        throw new Error("Failed to fetch cart list")
                    }
                    localStorage.setItem(LOCAL_STORAGE_NAME, JSON.stringify(data))
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCart();
    },[]);

    const value: ShoppingCart = {
        items: cartItems,
        addItem,
        removeItem,
        updateItemQuantity,
        getTotalPrice: getTotalItemPrice,
    }

    return <CartContext.Provider value={value}>{ children }</CartContext.Provider>
};