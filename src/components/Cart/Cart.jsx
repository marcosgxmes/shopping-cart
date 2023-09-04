
import { useContext } from 'react'
import './Cart.css'
import CartItem from './CartItem/CartItem'
import Appcontext from '../../context/AppContext'
import formatCurrency from '../../utils/formatCurrency';

export default function Cart() {
    const {cartItems, isCartVisible} = useContext(Appcontext);
    const totalPrice = cartItems.reduce((ac, item) => item.price + ac ,0)

    return (
        <section className={`cart ${isCartVisible ? 'cart--active' : ''}`}>
            <div className="cart-itens">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem} />)}

            </div>
            <div className="cart-resume">{formatCurrency(totalPrice)}</div>
        </section>
    );
}
