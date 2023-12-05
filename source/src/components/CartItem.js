import "../css/CartItem.css"
import { formatCurrency } from "../helpers/currency";
import { ArrowLeftCircleFill, ArrowRightCircleFill, Trash } from 'react-bootstrap-icons';
function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {
    return (
        <tr >
            <td><img src={product.image[0]} alt="image" width="100px" height="100px" /></td>
            <td>{product.name}</td>
            <td>$ {product.price}</td>
            <td className="cartitem_quantity">
                <div ><ArrowLeftCircleFill width="25px" height="25px" fill="green" onClick={() => decreaseQty(product)} /></div>
                {product.quantity}
                <div><ArrowRightCircleFill width="25px" height="25px" fill="green" onClick={() => increaseQty(product)} /></div>
            </td>
            <td>{formatCurrency(product.quantity * product.price)}</td>
            <td><Trash width="25px" height="25px" fill="red" onClick={() => deleteCart(product)} /></td>
        </tr>
    );
}
export default CartItem


