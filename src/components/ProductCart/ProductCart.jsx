import './ProductCart.css'
import {FaCartPlus} from 'react-icons/fa'
import propTypes from 'prop-types'
import formatCurrency from '../../utils/formatCurrency';
import { useContext } from 'react';
import Appcontext from '../../context/AppContext';

export default function ProductCart({ data }) {

    const {title, thumbnail, price} = data;

    const {cartItems, setCartItem} = useContext(Appcontext)

    const handleAddCart = () => setCartItem([...cartItems, data]);


    return (
        <section className="product-cart">
            <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                alt="product"
                className='cart__image'
            />

            <div className="cart__infos">
                <h2 className='cart__price'>{formatCurrency(price)}</h2>
                <h2 className='cart__title'>{title}</h2>
            </div>

            <button
                onClick={handleAddCart}
                type='button' className='button__add-cart'><FaCartPlus /></button>
        </section>
    )
}

ProductCart.propTypes = {
    data: propTypes.shape({}),
}.isRequired;
