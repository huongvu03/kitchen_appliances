import 'bootstrap/dist/css/bootstrap.css';
import "../css/ProductItem.css";

function ProductItem({ product }) {

    return (
        <div className="productitem container">
            <div className='productitem_card'>
                <div className='productitem_card_body'>
                    <div><img src={product.image[0]} /></div>
                    <div className='productitem_card_body_content'>
                        <div>{product.name}</div>
                        <div>{product.category}</div>
                        <div>{product.price}</div></div>
                </div>

                <div><button className='productitem_card_body_addcart '>Add to cart</button></div>
            </div>




        </div>


    )
}
export default ProductItem;