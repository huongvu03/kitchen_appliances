import "../css/CartItem.css"
function CartItem({ product, deleteCart, decreaseQty, increaseQty }) {

    return (
        <tr >
            <td><img src={product.image[0]} alt="image" width="100px" height="100px" /></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td><button onClick={() => decreaseQty(product)} >left</button>
                {product.quantity}
                <button onClick={() => increaseQty(product)}>right</button></td>
            <td><button onClick={() => deleteCart(product)}>Remove</button></td>

        </tr>

    );
}
export default CartItem


