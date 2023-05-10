import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, total } = useContext(CartContext)
    if (cart.length === 0 ){ 
        return ('No hay productos agregados')
    }else {
        return (
            <div>
                <h1>Carrito</h1>
                <div>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id}>
                            <h2>Producto: {prod.name}</h2>
                            <p>Cantidad: {prod.quantity}</p>
                            </div>
                        )
                    })
                }
                </div>
                <div>Precio total de la compra: ${total} </div>
                <div>
                    <Link className='button' to='/checkout'>Finalizar compra</Link>
                </div>
            </div>
        )
    }
}

export default Cart



