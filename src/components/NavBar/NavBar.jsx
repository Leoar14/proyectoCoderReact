// import './NavBar.css'
// import CartWidget from '../CartWidget/CartWidget';
// import {useState} from "react";

// const NavBar = () => {
//     const [isOpen,setIsOpen] = useState(false)
//     return (
//         <nav className="navbar container-fluid">
//             <h1 className="navbar-brand display-2">Tucson's Delivery</h1>
            
            
//             <div className={`nav_items ${isOpen && "open"}`}>
//                 <ul className="navbar-nav">
//                     <li className="nav_item">
//                         <a href="">West Apptizers</a>
//                     </li>
//                     <li className="nav_item">
//                         <a href="">Tucson Steaks</a>
//                     </li>
//                     <li className="nav_item">
//                         <a href="">Favoritos Argentinos</a>
//                     </li>
//                     <li className="nav_item">
//                         <a href="">Salads</a>
//                     </li>
//                     <li className="nav_item">
//                         <a href="">Desserts & Cakes</a>
//                     </li>
//                 </ul>
//             </div>
//             <div className={`nav_toggler ${isOpen && "open"}`} onClick={ () =>{setIsOpen (!isOpen)}}>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//             </div>
//         </nav>    
//     );
// };


// export default NavBar;

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink, useParams } from "react-router-dom"
import { getCategories } from '../../services/fibrebase/firestore/categories'
import { useAsync } from '../../hooks/useAsync'

const NavBar = () => {

    const { categoriesId } = useParams ()

    const getCategoriesWithId = () => getCategories (categoriesId)

    const { data: categories, error, loading} = useAsync(getCategoriesWithId, [categoriesId])

    if(loading) {
        return <h1>Cargando...</h1>
    }

    if(error) {
        return <h2>Vuelva a cargar la pagina</h2>
    }


    return (
        <nav className="NavBar" >
            <Link to='/'>Retro-Store</Link>
            <div className="Categories">
            {
                categories.map(cat => {
                    return (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
                    )
                    }) 
            }
                <CartWidget/>
            </div>
        </nav>
    )

}

export default NavBar