import ProductItem from "./ProductItem"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/ProductList.css';
import ProductSearch from "./ProductSearch";
import ProductFilterCategory from "./ProductFilterCategory";
import ProductSortPrice from "./ProductSortPrice";
function ProductsList({ products,
    searchValue, handleSearch,
    handleCategory,
    handleSortPriceMinMax, handleSortPriceMaxMin,
    clearFilter,
    addCart }) {
    return (<div className="productslist_page container">
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_1.jpg" height={"400px"}
                    alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_2.jpg" height={"400px"}
                    alt="Second slide" />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_3.jpg" height={"400px"}
                    alt="Third slide" />
            </Carousel.Item>
        </Carousel>
        <div className='productslist container'>
            <div className='productslist_category_left'>
                <div><ProductSearch searchValue={searchValue} handleSearch={handleSearch} /></div>
                <hr></hr>
                <div><h4>Category</h4></div>
                <div><ProductFilterCategory handleCategory={handleCategory} /></div>
                <hr></hr>
                <div><h4>Price</h4></div>
                <div><ProductSortPrice handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin} /></div>
                <hr></hr>
                <div><button className="btn btn-success" onClick={clearFilter}>Reset filter</button></div>
            </div>
            <div className='productslist_category_right'>
                <div className="productslist_card_item">
                    {products.map(p => (
                        <div>
                            <ProductItem key={p.id} product={p} addCart={addCart} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductsList