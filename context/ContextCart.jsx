'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const saveCart = localStorage.getItem('urban-shop-cart');
        if (saveCart) {
            const verifiedCart = JSON.parse(saveCart);

            const cleanCart = verifiedCart.map(item => ({
                ...item,
                quantity: item.quantity || 1
            }));

            setCartItems(cleanCart);
        }
        setIsLoaded(true);
    }, []);

    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('urban-shop-cart', JSON.stringify(cartItems));
        }
    }, [cartItems, isLoaded]);



    const addToCart = (product) => {
        setCartItems((prevItems) => {

            const includedItems = prevItems.findIndex((item) => item.id === product.id);

            if (includedItems > -1) {

                const newCartItems = [...prevItems];

                const currentItem = newCartItems[includedItems];

                newCartItems[includedItems] = {
                    ...currentItem,
                    quantity: currentItem.quantity + (product.quantity || 1)
                };

                return newCartItems;
            }

            return [...prevItems, { ...product, quantity: product.quantity || 1 }];
        });
    };

    const changeQuantity = (id, type) => {
        setCartItems((prevItems) =>
            prevItems.map((item) => {
                if (item.id === id) {

                    const newQuantity = type === 'plus' ? item.quantity + 1 : item.quantity - 1;

                    return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
                }
                return item;
            })
        );
    }

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem('urban-shop-cart');
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, changeQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}