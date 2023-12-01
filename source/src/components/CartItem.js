import "../css/CartItem.css"
function CartItem({ product, deleteCart }) {
    return (
        <tr className="border_bottom">
            <td><img src={product.image[0]} alt="image" width="100px" height="100px" /></td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.quantity}</td>
            <td><button onClick={() => deleteCart(product.id)}>Remove</button></td>
        </tr>
    );
}
export default CartItem