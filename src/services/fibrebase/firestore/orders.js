import { db } from "../firebaseConfig"
import { collection, getDocs, where, query, Timestamp} from "firebase/firestore"


export const addOrder = async ( objOrder, cart, total, setOrderId) => {
    const order = {
        Comprador: objOrder,
        Items: cart,
        Total: total (),
        Fyh: Timestamp.fromDate (new Date (setOrderId))
    }

    const orderRef = objOrder
    ? query(collection (db, "orders"), where ("order", "==", order))
    : collection(db, "orders")

    const orderAdded = await addOrder (orderRef, objOrder)
        setOrderId (orderAdded.id)


    return getDocs (orderRef)
    .then (result => {
        const ordersAdapted = {
            id:result.id,
            ...result.data ()
        }
        return ordersAdapted
        })
        .catch (error =>{
            return error
        })
    }
