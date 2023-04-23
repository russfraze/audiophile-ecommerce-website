import {useReducer} from 'react'
import CartContext from './CartContext'


const cartDefault = {
    products: [],
    totalAmount: 0,
}


const cartReducer = (state, action) => {

    if (action.type === 'ADD_PRODUCT') {
        console.log('add item', action.product.name, action.product.price, action.product.amount)

        const newTotalAmount = state.totalAmount + action.product.price * action.product.amount

        const newProductAmount = action.product.price * action.product.amount

        const existingCartProductsIndex = state.products.findIndex(product => product.id == action.product.id)
        
        const existingCartProduct = state.products[existingCartProductsIndex]
      
        
        let updatedProducts

        if (existingCartProduct) {
            const updatedProduct = {
                ...existingCartProduct,
                amount: existingCartProduct.amount + 1,
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

    return <CartContext.Provider
    value={cartContext}>
        {children}
    </CartContext.Provider>
}

export default CartProvider;