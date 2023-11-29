import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";
import { Cart3 } from 'react-bootstrap-icons';
function ProductItem({ product }) {

    return (
        <div className="productitem container">
            <div className='productitem_card'>
                <div className='productitem_card_body'>
                    <div><img src={product.image[0]} /></div>
                    <div className='productitem_card_body_content'>
                        <h6>{product.name}</h6>
                        {/* <p>{product.category}</p> */}
                        <div>${product.price}</div></div>
                </div>
                <div><button className='btn_detail'>More Info</button>
                    <button className='btn_addcart'><Cart3 className='icon_addcart' /></button>
                </div>
            </div>




        </div>


    )
}
export default ProductItem;