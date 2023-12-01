import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";
// import { Cart3 } from 'react-bootstrap-icons';
function ProductItem({ product, addCart }) {

    return (
        <div className="productitem">
            <div className='productitem_card'>
                <div className='productitem_card_body'>
                    <div><img src={product.image[0]} /></div>
                    <div className='productitem_card_body_content'>
                        <h6>{product.name}</h6>

                        <div>${product.price}</div></div>
                </div>
                <div className="productitem_card_control">
                    <button className='btn_addCart' onClick={() => addCart(product)}>ADD TO CART</button>
                    <button className='btn_detail'>DETAILS</button>
                </div>
            </div>




        </div>


    )
}
export default ProductItem;