import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
// import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

function ProductItem({ product, addToCart }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const navigate = useNavigate();
    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body><h3 className='alert_modal text-center' >Success !!!</h3></Modal.Body>
            </Modal>
            <div className="productitem">
                <div className='productitem_card'>
                    <div className='productitem_card_body'>
                        <div><img src={product.image[0]} alt='' /></div>
                        <div className='productitem_card_body_content'>
                            <div><h6>{product.name}</h6></div>
                            <div>${product.price}</div>
                        </div>
                    </div>
                    <div className="productitem_card_control">
                        <button className='btn_addCart' onClick={() => { addToCart(product); handleShow() }}>ADD CART</button>
                        <button className='btn_detail' onClick={() => navigate(`/detail/${product.id}`)}>DETAILS</button>
                   
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ProductItem;