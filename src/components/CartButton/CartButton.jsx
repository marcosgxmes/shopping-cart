import {AiOutlineShoppingCart} from 'react-icons/ai'
import './CartButton.css';
import { useContext } from 'react';
import Appcontext from '../../context/AppContext';

export default function CartButton() {
    const {cartItems, isCartVisible, setIsCartVisible} = useContext(Appcontext);

    return (
        <button type="button" className="cart__button" onClick={() => setIsCartVisible(!isCartVisible)}>
            <AiOutlineShoppingCart />

            {cartItems.length > 0 && <span className="cart-status">{cartItems.length}</span>}
            
        </button>
    )
}
