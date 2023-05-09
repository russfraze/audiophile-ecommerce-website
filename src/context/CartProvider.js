import {useReducer, useEffect} from 'react'
import CartContext from './CartContext'



// const initialCart = {products: [], totalAmount: 0}
const initialCart = {products: [], totalAmount: 0}




const initializer = (initialValue = initialCart) => 
    JSON.parse(localStorage.getItem('localCart')) || initialValue


// const cartDefault = JSON.parse(localStorage.getItem('localCart'))
// const cartDefault = JSON.parse(localStorage.getItem('localCart'))

const initialCartState = initializer()


const cartReducer = (state, action) => {

 

    if (action.type === 'ADD_PRODUCT') {
        console.log('add item', action.product.name, action.product.price, action.product.amount)

        const newTotalAmount = state.totalAmount + action.product.price * action.product.amount
        console.log('state.products', state.products)
        const existingCartProductsIndex = state.products.findIndex(product => product.id === action.product.id)
        console.log('existing index from reducer', existingCartProductsIndex)
        const existingCartProduct = state.products[existingCartProductsIndex]
        console.log('existing cart product from reducer',existingCartProduct)
        
        let updatedProducts

        if (existingCartProduct) {
            const updatedProduct = {
                ...existingCartProduct,
                amount: existingCartProduct.amount + action.product.amount,
                total: existingCartProduct.total + action.product.price
            }
            updatedProducts = [...state.products]
            updatedProducts[existingCartProductsIndex] = updatedProduct
        } else {
            updatedProducts = state.products.concat(action.product)
        }

        return {
            products: updatedProducts,
            totalAmount: newTotalAmount
        }
    }

    if (action.type === 'REMOVE_PRODUCT') {
        console.log('remove item')

        const productIndex = state.products.findIndex(product => product.id === action.id)
        console.log( 'REMOVE INDEX', productIndex)

        const productToUpdate = state.products[productIndex]

        const UpdatedTotalAmount = state.totalAmount - productToUpdate.price
        
        let updatedProducts

        if(productToUpdate.amount === 1) {
            updatedProducts = state.products.filter((product) => product.id !== action.id )
        } else {
            const updatedProduct = {
                ...productToUpdate,
                amount: productToUpdate.amount -1,
                total: productToUpdate.price * (productToUpdate.amount -1)
            }
            updatedProducts = [...state.products]
            updatedProducts[productIndex] = updatedProduct
        }

        return {
            products: updatedProducts,
            totalAmount: UpdatedTotalAmount
        }
    }

    if (action.type === 'REMOVE_ALL') {
        return {
            products: [],
            totalAmount: 0
        }
    }
    return initialCart
}


const CartProvider = ({children}) => {

    // if( localStorage.getItem('localCart') === null){
    //     localStorage.setItem('localCart', JSON.stringify({ }))
    // }

    const [cart, dispatchCart] = useReducer(cartReducer, initialCartState)

    const addProductHandler = (product) => {
        console.log('add product', cart)
        dispatchCart({ type: 'ADD_PRODUCT', product: product})
    }

    const removeProductHandler = (id) => {
        dispatchCart({type: 'REMOVE_PRODUCT', id: id})
    }

    const removeAllHandler = () => {
        dispatchCart({type: 'REMOVE_ALL'})
    }

    const cartContext = {
        products: cart.products,
        totalAmount: cart.totalAmount,
        addProduct: addProductHandler, 
        removeProduct: removeProductHandler,
        removeAll: removeAllHandler
    }

    useEffect(() => {
        localStorage.setItem('localCart', JSON.stringify(cart))
    },[cart])
    

    return <CartContext.Provider
    value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;