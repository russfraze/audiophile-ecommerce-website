import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../cart/CartItem'

function CartSummary() {
    const cartData = useContext(CartContext)
    console.log(cartData.products)
    return (
        <div>
            {cartData.products.map(item =>
                <CartItem
                    name={item.name}
                    id={item.id}
                    total={item.total}
                    amount={item.amount}
                />)}
        </div>
    )
}

export default CartSummary
