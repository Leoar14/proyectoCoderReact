import { getDocs, getDoc, collection, query, where,updateDoc, doc } from 'firebase/firestore'
import { db } from '../fibrebaseConfig'
import { createAdaptedProductFromFirestore } from "../../../adapters/createAdaptedProductFromFirestore"

export const getProducts = (categoryId) => {
    const productsRef = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products')

    return getDocs(productsRef)
        .then(snapshot => {
            const productsAdapted = snapshot.docs.map(doc => {
                return createAdaptedProductFromFirestore(doc)
            })

            return productsAdapted
        })
        .catch(error => {
            return error
        })
}

export const getProductsById = (itemId) => {

    const collectionProd = collection(db,"products")

    const productRef = doc(collectionProd,itemId)

    return getDoc(productRef)
    .then(result => {
            const productAdapted = {
                id:result.id,
                ...result.data()
            }
        
            return productAdapted
        })
        .catch(error => {
            return error
        })
}
export const updateProduct = (productId, updatedProductData) => {
    const productRef = doc(db, 'products', productId)
    return updateDoc(productRef, updatedProductData)
        .then(() => {
            console.log('Product updated successfully')
        })
        .catch((error) => {
            console.error('Error updating product: ', error)
        })
    }