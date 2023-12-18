import "../css/CartItem.css"
import { formatCurrency } from "../helpers/currency";
import { Trash } from 'react-bootstrap-icons';
function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {
    return (
        <tr >
            <td className="cartitem_image"><img src={product.image[0]} alt="image" /></td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td className="cartitem_quantity">

                <div>
                    <button onClick={() => decreaseQty(product)}>-</button>
                    {product.quantity}
                    <button onClick={() => increaseQty(product)}>+</button>
                </div>




            </td>
            <td>{formatCurrency(product.quantity * product.price)}</td>
            <td className="cartitem_remove"><button onClick={() => deleteCart(product)}><Trash width="25px" height="25px" fill="red" /></button></td>
        </tr>
    );
}
export default CartItem


