import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <SearchBar />
                <CartButton />
            </div>


        </header>
    )
}
