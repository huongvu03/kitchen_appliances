import CartItem from "./CartItem"
import "../css/CartList.css";
import 'bootstrap/dist/css/bootstrap.css';

function CartList({ carts, deleteCart }) {
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
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {carts.map(c => (
                            <CartItem key={c.id} product={c} deleteCart={deleteCart} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default CartList