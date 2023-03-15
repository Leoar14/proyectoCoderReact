import { useState } from 'react'

const Counter=(props) =>{
    const [count, setcount] = useState(props.initial)

    const decrement =() =>{
        setMsessage('')
        if(count<props.stock){
            setCount(count-1)
        }else{
            setMsessage('No se puede comprar menos de 1')
        }
            }

    const increment =() =>{
        setMsessage('')
        if(count<props.stock){
            setCount(count+1)
        }else{
            setMsessage('No se puede agregar más productos')
        }
        setcount(count+1)
            }

    const reset =() =>{
        setcount(props.initial)
            }

        return (
            <div>
                <h2>{props.title}</h2>
                <h3>{count}</h3>
                <h4>Cantidad disponible: </h4>
                <button onClic={decrement}>restar</button>
                <button onClic={increment}>sumar</button>
                <button onClic={reset}>reiniciar</button>
                <h2>{message}</h2>
            </div>
    )
}

export default Counter