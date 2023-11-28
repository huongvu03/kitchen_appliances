import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function ProductItem({ product }) {

    return (
        <div className="productitem container">
            <div className='productitem_card'>
                <div className='productitem_card_body'>
                    <div><img src={product.image[0]} /></div>
                    <div className='productitem_card_body_content'>
                        <h6>{product.name}</h6>
                        <p>{product.category}</p>
                        <div>${product.price}</div></div>
                </div>

                <div><button className='btn_detail '>More Info</button>
                    <button className='btn_addcart'><FontAwesomeIcon icon={faCartPlus} className='icon_addcart' /></button>
                </div>
            </div>




        </div>


    )
}
export default ProductItem;