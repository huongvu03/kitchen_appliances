import "../css/CartItem.css"
import { formatCurrency } from "../helpers/currency";
import { Trash } from 'react-bootstrap-icons';
function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {
    return (
        <>
        
        <tr className="CartItem_laptop">
            <td className="cartitem_image"><img src={product.image[0]} alt="image" /></td>
            <td className="cartitem_name">{product.name}</td>
            <td className="cartitem_price">${product.price}</td>
            <td className="cartitem_quantity">

                <div>
                    <span className="cartitem_quantity_res">{product.quantity}</span>
                    <button onClick={() => decreaseQty(product)}>-</button>
                    <span className="cartitem_quantity_res2">{product.quantity}</span>
                    <button onClick={() => increaseQty(product)}>+</button>
                </div>
            </td>
            <td>{formatCurrency(product.quantity * product.price)}</td>
            <td className="cartitem_remove"><button onClick={() => deleteCart(product)}><Trash width="25px" height="25px" fill="red" /></button></td>
        </tr>
       
        <tr className="CartItem_mobile">
        <td className="cartitem_image"><img src={product.image[0]} alt="image" /></td>
            <div>
            <div className="cartitem_name">{product.name}</div>
            <br/>
            <div className="cartitem_price">${product.price}</div>
            <div className="cartitem_quantity">

                <div>
                    {/* <span className="cartitem_quantity_res">{product.quantity}</span> */}
                    <div>Quantity:  </div>
                    <button onClick={() => decreaseQty(product)}>-</button>
                    <div className="cartitem_quantity_res2">{product.quantity}</div>
                    <button onClick={() => increaseQty(product)}>+</button>
                </div>
            </div>
            <br/>
            <div  className="cartitem_price1"  >{formatCurrency(product.quantity * product.price)}</div>
            <div className="cartitem_remove"><button onClick={() => deleteCart(product)}><Trash width="25px" height="25px" fill="red" /></button></div>
            
            </div>

        </tr>
        </>
    );
}
export default CartItem


