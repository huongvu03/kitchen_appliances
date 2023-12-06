
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/ProductDetail.css';
import { CheckCircle, Heart, Star, StarFill, StarHalf } from 'react-bootstrap-icons';
import React from 'react';
function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [like, setLike] = useState(456);
  const [isLike, setIsLike] = useState(false);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        //đọc file json thứ nhất
        const dataJson = await fetch('../products.json');
        const data = await dataJson.json();
        //lay book dua vao id
        const selectedProduct = data.find((item) => item.id == id);
        setProducts(selectedProduct);
      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);
  const [mainImage, setMainImage] = useState(0);

  console.log(product);
  if (!product) {
    return <h1> Loading...</h1>
  }

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevCount => prevCount - 1);
    }
  }
  const handleIncrement = () => {
    if (quantity < (product.quantity)) {
      setQuantity(prevCount => prevCount + 1);
    }
  }


  const onLikeButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
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
              <button onClick={handleDecrement}>-</button>
              <div>{quantity}</div>
              <button onClick={handleIncrement}>+</button>
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
              onClick={() => addToCart(product)}>ADD TO CART</button>
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