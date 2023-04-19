import {useReducer} from 'react'
import CartContext from './CartContext'


const cartDefault = {
    items: [],
    totalAmount: 0,
}


const cartReducer = (state, action) => {
    return cartDefault
}


const CartProvider = ({children}) => {
    const [cart, dispatchCart] = useReducer(cartReducer, cartDefault)

    const addProductHandler = (product) => {
        
    }
}