import CartItem from "./CartItem"
import "../css/CartList.css";
import 'bootstrap/dist/css/bootstrap.css';
import { formatCurrency } from "../helpers/currency";


function CartList({ carts, deleteCart, decreaseQty, increaseQty, updateQuantity}) {
     const totalPrice = carts.reduce((total, item) => {
        return total + (item.price * item.quantity);
      }, 0);
     
    return (
        <div className="container text-center ">
            <h3>Cart List</h3>
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {carts.map(item => (
                            <CartItem key={item.id} product={item} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} updateQuantity={updateQuantity} />
                        ))}
                    </tbody>
                </table>
                <div className="total_price"> <h5>Total : {formatCurrency(totalPrice)}</h5></div>

            </div>
        </div>
    )
}
export default CartList