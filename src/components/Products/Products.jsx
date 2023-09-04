import { useEffect, useContext } from 'react'

import ProductCart from '../ProductCart/ProductCart';
import './Products.css'
import fetchProducts from '../../api/fetchProducts';
import Loading from '../Loading/Loading';
import Appcontext from '../../context/AppContext';

export default function Products() {

    const {products, setProducts, loading, setLoading} = useContext(Appcontext)
    

    useEffect(() => {
        fetchProducts('iphone')
            .then((response) => {
                setProducts(response);
                setLoading(false);
            });
    }, []);

    return (

        (loading ? <Loading /> : <section className="products container">
            {products.map((product) => <ProductCart key={product.id} data={product} />)}
        </section>)

    )
}
