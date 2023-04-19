import {createContext} from 'react'

const CartContext = createContext({
    products: [],
    totalAmount: 0,
})




export default CartContext