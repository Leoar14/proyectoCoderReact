import { useContext, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import { useNotification } from "../../Notification/NotificationService";


const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        const productoParaAgregar = {
            id, name, price, quantity, stock
            
        }
        setQuantity(quantity)
        addItem(productoParaAgregar)
    }

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: {price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {/* {
                    cantidad > 0 ? (
                        <Link to='/cart'>Terminar compra</Link>
                    ) : ( */}
                        {stock > 0 ? <ItemCount onAdd={handleOnAdd} stock={stock} /> : <div>No hay stock disponible</div>}
                    {/* )
                } */}
            </footer>
        </article>
    )
}

export default ItemDetail