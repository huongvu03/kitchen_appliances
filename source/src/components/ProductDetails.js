
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/ProductDetail.css';
import { CheckCircle, Heart, Star, StarFill, StarHalf } from 'react-bootstrap-icons';
import React from 'react';
function ProductDetail({ products,sendqtyDetail }) {
  const { id } = useParams();
  const [quantitydt, setQuantityDt] = useState(1);
  const [like, setLike] = useState(456);
  const [isLike, setIsLike] = useState(false);
  
  //********************************************************* */
  const product=products.find(item=>item.id===parseInt(id));
  const [mainImage, setMainImage] = useState(0);
  const decreaseQtyDt = () => {
    if (quantitydt > 1) {
      setQuantityDt(prevCount => prevCount - 1);
    }
  }
  const increaseQtyDt = () => {
    if (quantitydt < (product.quantity)) {
      setQuantityDt(prevCount => prevCount + 1);
    }
  }
  //chuyển một object mới là newProd đến app.js để xử lý
  const handleProdQty=()=>{
      const newProd={...product,quantity:quantitydt};
      sendqtyDetail(newProd);
      //sau khi chuyển newProd đi thì e reset quantity ở trang detail về lại 1
      setQuantityDt(1);
  }
//********************************************************* */
  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }
  
  if (!product) {
    return <h1> no product</h1>
  }
  return (
    <div className="ProductDetail">
      <div className="ProductDetail_div1">
        <div><Link to='/'>Home</Link>
          <span>|</span>
          <Link to='/products'>{product.category}</Link>
          <span>|</span>
          <Link>{product.name}</Link>
        </div>
      </div>
      <div className="ProductDetail_grid1">
        <div className="ProductDetail_img1">
          
          <img src={"../"+product.image[0]} alt={product.image[0]}  onClick={()=> setMainImage(0)}/>
          <img src={"../"+product.image[1]} alt={product.image[1]}  onClick={()=> setMainImage(1)}/>
          <img src={"../"+product.image[2]} alt={product.image[1]}  onClick={()=> setMainImage(2)}/>
          <img src={"../"+product.image[3]} alt={product.image[1]}  onClick={()=> setMainImage(3)}/>
        </div>
        <div className="ProductDetail_img2">
          
          <img src={"../"+product.image[mainImage]} alt={product.image[mainImage]}/>
          
        </div>
        <div className="ProductDetail_info">
          <div className="ProductDetail_name">{product.name}</div>
          <div className="ProductDetail_price"> ${product.price}</div>
          <br />
          <div><CheckCircle /> In stock {product.quantity}</div>
          <p><hr /></p>

          <div>QUANTITY</div>
          <div className="ProductDetail_qty1">
            <div className="ProductDetail_qty2">
              <button onClick={decreaseQtyDt}>-</button>
              <div>{quantitydt}</div>
              <button onClick={increaseQtyDt}>+</button>
            </div>
            <center className="ProductDetail_heart">
              <div className={"" + (isLike ? "text-primary" : "")}>
                <i onClick={onLikeButtonClick} ><Heart /></i>
                <br />
                <div>Like {like}</div>
              </div>
            </center>
          </div>
          <div>
            <button className="ProductDetail_submit2"
              onClick={() => handleProdQty()}>ADD TO CART</button>
            <br />
            {/* <button className="ProductDetail_submit1">BUY IT NOW</button> */}
          </div>
          <div className="ProductDetail_like" ><StarFill /><StarFill /><StarFill /><StarFill /><StarHalf /></div>


        </div>
      </div>
      <button
        className="ProductDetail_des1"
      >DESCRIPTION</button>
      <hr />
      {

        <ul>
          {product.description.map((p) => (
            <li>{p}</li>
          ))}
        </ul>

      }
    </div>
  )
}
export default ProductDetail;