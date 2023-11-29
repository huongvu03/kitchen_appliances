
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../css/ProductDetail.css';
import {CheckCircle, Heart,Star,StarFill,StarHalf} from 'react-bootstrap-icons';

function ProductDetail({}){
    const {id} =useParams();
    const [product, setProducts] = useState(null);
    const [quantity, setQuantity]=useState(1);
    const [showDes, setShowDes]=useState(false);
    const [showDes1, setShowDes1]=useState(false);
    const [showDes2, setShowDes2]=useState(false);
    const [showI_0, setShowI_0]=useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try{
            //đọc file json thứ nhất
            const dataJson = await fetch('../products.json');
            const data = await dataJson.json();
            //lay book dua vao id
            const selectedProduct =data.find((item)=> item.id ==id);
            setProducts(selectedProduct);
            
          }catch (error){
            console.log('error reading json');
          }
        };
        fetchData();
      }, []);
      console.log(product);
      if(!product){
        return <h1> Loading...</h1>
      }
    
      const handleDecrement = () => {
        if(quantity>1){
          setQuantity(prevCount => prevCount-1 );
        }
      }
      const handleIncrement = () => {
        if(quantity < (product.quantity)){
          setQuantity(prevCount => prevCount +1 );
        }
      }
      const submitAddToCart = (e) => {
        e.preventtDefault();

        const data = {
          product_id: product.id,
          product_qty:quantity
        }
      }

     

      const showDescription = () => {
        if(showDes==true){
          setShowDes(false)
        }else{
          setShowDes(true)
        }
      }
      const showDescription1 = () => {
        if(showDes1==true){
          setShowDes1(false)
        }else{
          setShowDes1(true)
        }
      }
      const showDescription2 = () => {
        if(showDes2==true){
          setShowDes2(false)
        }else{
          setShowDes2(true)
        }
      }
      
    return(
      <div className="ProductDetail">
        <div className="ProductDetail_div1">
          <div><Link to='/'>Home</Link> 
          <span>|</span>
          <Link to='/'>{product.category}</Link>
          <span>|</span>
          <Link to='/'>{product.name}</Link>
          </div>
        </div>
      
        <div className="ProductDetail_grid1">
        <div>
            <div className="ProductDetail_img2">
            <div ><img src={"../" + product.image[0]}/></div>
            <div><img src={"../" + product.image[1]}/></div>
            <div><img src={"../" + product.image[2]}/></div>
            <div><img src={"../" + product.image[3]}/></div>
            </div>
          </div>
          <div className="ProductDetail_img2">
          
            <div ><img src={"../" + product.image[0]}/></div>
            <div><img src={"../" + product.image[1]}/></div>
            <div><img src={"../" + product.image[2]}/></div>
            <div><img src={"../" + product.image[3]}/></div>
          </div>
          
          <div>
              <div className="ProductDetail_name">{product.name}</div>
              <div className="ProductDetail_price"> ${product.price}</div>
              <div><CheckCircle/> In stock {product.quantity}</div>
              <hr/>
              <div>QUANTITY</div>
              <div className="ProductDetail_qty1">
                <div className="ProductDetail_qty2">
                  <button onClick={handleDecrement}>-</button>
                  <div>{quantity}</div>
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div><Heart/></div>
              </div>
              <div>
                <button className="ProductDetail_submit1"
                onClick={submitAddToCart}>ADD TO CART</button>
                <br/>
                <button className="ProductDetail_submit1">BUY IT NOW</button>
              </div>
              <div className="ProductDetail_like" ><StarFill/><StarFill/><StarFill/><StarFill/><StarHalf/></div>

              
          </div>
        </div>
        <button onClick={showDescription}>DESCRIPTION</button>
        <button onClick={showDescription1}>PRODUCT DETAILS</button>
        <button onClick={showDescription2}>DETAILS INFO</button>
        {
          showDes && (<div>{product.description}</div>)
        }
        {
          showDes1 && (<div>{product.description}</div>)
        }
        {
          showDes2 && (<div>{product.description}</div>)
        }
      </div>
    )
}
export default ProductDetail;