import ProductItem from "./ProductItem"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ProductSearch from "./ProductSearch";
import ProductFilterCategory from "./ProductFilterCategory";
import ProductSortPrice from "./ProductSortPrice";
import { Pagination } from "react-bootstrap";
import { useState } from "react";
import '../css/ProductList.css';
function ProductsList({ products,
    searchValue, handleSearch,
    handleCategory,
    handleSortPriceMinMax, handleSortPriceMaxMin,
    clearFilter,
    addToCart,
}) {
    const [activePage, setActivePage] = useState(1);
    const productsPerPage = 8;
    const handlePageChange = (pageNumber) => { setActivePage(pageNumber); };
    const indexOfLastProduct = activePage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const pageItems = [];
    for (let number = 1; number <= Math.ceil(products.length / productsPerPage); number++) {
        pageItems.push(
            <Pagination.Item key={number} active={number === activePage} onClick={() => handlePageChange(number)}>
                {number}
            </Pagination.Item>
        );
    }
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
                    alt="Third slide" />s
            </Carousel.Item>
        </Carousel>
        <div>
        <h1 style={{color:"black",fontSize:"20px"}}>{error}</h1>
        </div>
       
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
                <div><button className="btn btn-success" onClick={() => {
                    clearFilter();
                }}>Reset filter</button></div>
            </div>
            <div className='productslist_category_right'>
                <div className="productslist_card_item">
                    {currentProducts.map(p => (
                        <div className="producslist_card_item_body">
                            <ProductItem key={p.id} product={p} addToCart={addToCart} />
                        </div>
                    ))}
                </div>
                <div className="productslist_pagination"><Pagination>{pageItems}</Pagination></div>
            </div>
        </div>
    </div>
    )
}
export default ProductsList