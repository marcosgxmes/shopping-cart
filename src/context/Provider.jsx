import { useState } from "react";
import Appcontext from "./AppContext";
import propTypes from 'prop-types';

export default function Provider({children}) {

    
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCartVisible, setIsCartVisible] = useState(false);

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItem,
        isCartVisible,
        setIsCartVisible,
    }

    return (
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}

Provider.propTypes = {
    children: propTypes.any,
}.isRequired;
