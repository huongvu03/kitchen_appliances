import CartItem from "./CartItem"
import "../css/CartList.css";
import 'bootstrap/dist/css/bootstrap.css';
import { formatCurrency } from "../helpers/currency";
function CartList({ carts, deleteCart, decreaseQty, increaseQty }) {
    const totalPrice = carts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    return (
        <div className="container text-center ">
            <h3 className="cartlist_title">Cart List </h3>
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
                        {carts.map(product => (
                            <CartItem key={product.id} product={product} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                        ))}
                    </tbody>
                </table>
                <div className="total_price"> <h5>Total : {formatCurrency(totalPrice)}</h5></div>
            </div>
        </div>
    )
}
export default CartList