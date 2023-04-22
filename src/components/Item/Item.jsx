import { Link, useNavigate } from "react-router-dom"

const Item = ({id, name, img, price}) => {

    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImagen"/>
            </picture>
            <section>
                <p className="Informacion">
                    Precio: ${price}
                </p>
            </section>           
            <div className='ItemFooter'>
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </div>
        </article>
    )
}

export default Item