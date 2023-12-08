import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";
import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.min.css';
function ProductItem({ product, addToCart }) {
    // const showAlert = () => {
    //     Swal.fire({
    //         text: 'S U C C E S S !',
    //     })
    // };
    const navigate = useNavigate();
    return (
        <div className="productitem">
            <div className='productitem_card'>
                <div className='productitem_card_body'>
                    <div><img src={product.image[0]} alt='' /></div>
                    <div className='productitem_card_body_content'>
                        <h6>{product.name}</h6>
                        <div>${product.price}</div></div>
                </div>
                <div className="productitem_card_control">
                    <button className='btn_addCart' onClick={() => { addToCart(product) }}>ADD TO CART</button>
                    <button className='btn_detail' onClick={() => navigate(`/detail/${product.id}`)}>DETAILS</button>
                </div>
            </div>
        </div>
    )
}
export default ProductItem;