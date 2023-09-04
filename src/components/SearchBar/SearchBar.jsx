import { useContext, useState} from "react";
import { FaSearch } from "react-icons/fa";
import './SearchBar.css'
import fetchProducts from "../../api/fetchProducts";
import Appcontext from "../../context/AppContext";

export default function SearchBar() {

    const {setProducts, setLoading} = useContext(Appcontext);
    const [searchValue, setSearchValue] = useState('');
   

    const handleSearch =  async (event) => {
        event.preventDefault();

        setLoading(true);

        const products = await fetchProducts(searchValue);

        setProducts(products);
        setLoading(false);
        setSearchValue('');

    }
    return (
        <form className="search-bar" onSubmit={handleSearch}>
            {name}
            <input
                type="search"
                value={searchValue}
                placeholder="Buscar" className="search__input"
                required
                onChange={({ target }) => setSearchValue(target.value)}
            />

            <button type="submit" className="search__button"><FaSearch /></button>
        </form>
    )
}
