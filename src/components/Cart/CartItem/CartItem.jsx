import {BsFillCartXFill} from 'react-icons/bs'
import './CartItem.css'
import formatCurrency from '../../../utils/formatCurrency';
import propTypes from 'prop-types';
import { useContext } from 'react';
import Appcontext from '../../../context/AppContext';


export default function CartItem({ data }) {

    const {id, thumbnail, title, price} = data

    const { cartItems, setCartItem } = useContext(Appcontext);

    const handleRemoveItem = () => {
        const updateItems = cartItems.filter((item) => item.id != id)
        setCartItem(updateItems)
    }

    return (
        <section className="cart-item">
            <img src={thumbnail} alt="imagem do produto" className="cart-item-image" />

            <div className="cart-item-content">
                <h3 className="cart-item-title">{title}</h3>
                <h3 className="cart-item-price">{formatCurrency(price)}</h3>

                <button
                    type="button" className="button__remove-item"
                    onClick={handleRemoveItem}>
                    <BsFillCartXFill />
                </button>
            </div>
        </section>
    )
}


CartItem.propTypes = {
    data: propTypes.object
}.isRequiired;