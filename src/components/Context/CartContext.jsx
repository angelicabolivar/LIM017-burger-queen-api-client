import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cartItems, setCartItems] = useState(() => {
    try {
        const productsLocalStorage = localStorage.getItem('cartProducts');
        return productsLocalStorage ? JSON.parse(productsLocalStorage) : [];
    }   catch (error) {
        return [];
    }
});

  useEffect(() => {
    localStorage.setItem('cartProducts', JSON.stringify(cartItems));
  console.log(cartItems)
}, [cartItems]);

  const addItemToCart = (product) => {
    const inCart = cartItems.find(
        (productInCart) => productInCart.id === product.id
    );

    if(inCart) {
        setCartItems(
            cartItems.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...productInCart, qty: productInCart.qty + 1 };
                } else return productInCart;
                })
        );
    } else {
        setCartItems([...cartItems, {...product, qty: 1}])
    }};

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (productInCart) => productInCart.id === product.id
        );

        if(inCart.qty === 1) {
            setCartItems(
                cartItems.filter((productInCart) => productInCart.id !== product.id)
            );
        } else {
            setCartItems(
                cartItems.map((productInCart) => {
                if (productInCart.id === product.id) {
                    return { ...productInCart, qty: productInCart.qty - 1};
                } else return productInCart;

            })
            );
        }
    };

    return (
        <CartContext.Provider 
        value= {{cartItems, addItemToCart, deleteItemToCart}}
        >
            {children}
        </CartContext.Provider>
    );

  };