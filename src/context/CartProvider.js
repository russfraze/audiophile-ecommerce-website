import {useReducer} from 'react'
import CartContext from './CartContext'


const cartDefault = {
    products: [],
    totalAmount: 0,
}


const cartReducer = (state, action) => {

    if (action.type === 'ADD_PRODUCT'){
        console.log('add item', action.product.name, action.product.price, action.product.amount)

        const newTotalAmount = state.totalAmount + action.product.price * action.product.amount

        const existingCartProductsIndex = state.products.findIndex(product => product.id == action.product.id)
        console.log('EPI', typeof(existingCartProductsIndex))


        const existingCartProduct = state.products[existingCartProductsIndex]
      
        
        let updatedProducts

        if (existingCartProduct) {
            const updatedProduct = {
                ...existingCartProduct,
                amount: existingCartProduct.amount + action.product.amount
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
        products: cart.products,
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