
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

const CartWidget = () => {
    const { cantidadTotal, total } = useContext(CartContext);

    const navigate = useNavigate()

    return (
        <div onClick={() => navigate('/cart')}>
            <h2> Carrito 🛒 </h2>
            {cantidadTotal} total ${total}
        </div>
    );
}

export default CartWidget