import CartWidget from '../CartWidget/CartWidget';
import {useState} from "react";
import './NavBar.css'

const NavBar = () => {
    const [isOpen,setIsOpen] = useState(false)
    return (
        <nav className="navbar container">
            <h1 className="navbar-brand display-2">Delivery's Tucson</h1>
            
            
            <div className={`nav_items ${isOpen && "open"}`}>
                <ul className="navbar-nav">
                    <li className="nav_item">
                        <a href="/categoria1">West Apptizers</a>
                    </li>
                    <li className="nav_item">
                        <a href="#">Tucson Steaks</a>
                    </li>
                    <li className="nav_item">
                        <a href="/categoria3">Favoritos Argentinos</a>
                    </li>
                    <li className="nav_item">
                        <a href="/categoria4">Salads</a>
                    </li>
                    <li className="nav_item">
                        <a href="/categoria5">Desserts & Cakes</a>
                    </li>
                </ul>
            </div>
            <div className={`nav_toggler ${isOpen && "open"}`} onClick={ () =>{setIsOpen (!isOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>    
    );
};


export default NavBar;