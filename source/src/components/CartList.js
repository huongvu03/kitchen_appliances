import CartItem from "./CartItem"
import "../css/CartList.css";
import 'bootstrap/dist/css/bootstrap.css';
import { formatCurrency } from "../helpers/currency";
import { useState } from "react";
import Payment from "./Payment";

function CartList({ carts, deleteCart, decreaseQty, increaseQty, handlePaymentData }) {
    const [showPaymentForm, setShowPaymentForm] = useState(false);

    const togglePaymentForm = () => {
        setShowPaymentForm(!showPaymentForm);
    };
    const totalPrice = carts.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
    if (!carts || carts.length === 0) {
        return (
            <div className="container text-center ">
                <h3 className="text_noprod">No products in the cart</h3>
            </div>
        );
    }
    return (
        <div className="container text-center ">
            <h3 className="cartlist_title">Cart List </h3>
            <div className="cartlist_content_payment_wrap">
                <div className="table_responsive-sm">
                    <table className="table ">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th className="cartlist_price">Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th className="cartlist_action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carts.map(product => (
                                <CartItem key={product.id} product={product} deleteCart={deleteCart} increaseQty={increaseQty} decreaseQty={decreaseQty} />
                            ))}
                        </tbody>
                    </table>
                </div>



                <div className="cartlist_payment_wrap">
                    <div className="total_price"> <h5>Total: {formatCurrency(totalPrice)}</h5></div>
                    <div className="cartlist_payment_btn_wrap"> <button className="cartlist_payment_btn" onClick={togglePaymentForm}><h5>Place Order</h5></button></div>


                </div>
                <div className="payment_form">{showPaymentForm && <Payment handlePaymentData={handlePaymentData} totalpayment={formatCurrency(totalPrice)} />}</div>

            </div>
        </div >
    )
}
export default CartList