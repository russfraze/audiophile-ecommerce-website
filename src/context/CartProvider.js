import {useReducer} from 'react'
import CartContext from './CartContext'


const cartDefault = {
    items: [],
    totalAmount: 0,
}


const cartReducer = (state, action) => {

    if (action.type === 'ADD_PRODUCT'){
        console.log('add item')
    }

    if (action.type === 'REMOVE_PRODUCT'){
        console.log('remove item')
    }
    return cartDefault
}


const CartProvider = ({children}) => {
    const [cart, dispatchCart] = useReducer(cartReducer, cartDefault)

    const addProductHandler = (product) => {
        console.log('add product', cart)
        dispatchCart({ type: 'ADD_PRODUCT', product: product})
    }

    const removeProductHandler = (id) => {
        dispatchCart({type: 'REMOVE_PRODUCT', id: id})
    }

    const cartContext = {
        items: cart.items,
        totalAmount: cart.totalAmount,
        addProduct: addProductHandler, 
        removeProduct: removeProductHandler
    }

    return <CartContext.Provider
    value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;