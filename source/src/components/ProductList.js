import ProductItem from "./ProductItem"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/ProductList.css';
import ProductSearch from "./ProductSearch";

function ProductsList({ products, searchValue, handleSearch, handleCategory
    , handleSortName, handleSortPriceMinMax, handleSortPriceMaxMin, clearFilter }) {

    return (<div className="productslist_page container">
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_1.jpg" height={"400px"}
                    alt="First slide" />
                <Carousel.Caption>

                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_2.jpg" height={"400px"}
                    alt="Second slide" />
                <Carousel.Caption>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100 "
                    src="./homeimg/carousel_3.jpg" height={"400px"}
                    alt="Third slide" />
                <Carousel.Caption>

                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div className='productslist container'>
            <div className='productslist_category_left'>
                <div><h4>Search</h4></div>
                <div><ProductSearch searchValue={searchValue} handleSearch={handleSearch} /></div>
                <div><input type="radio" name="sort_name" onChange={handleSortName} />Name A-z</div>

                <div><h4>Category</h4></div>

                <div><input className="radio-cat" type="radio" name="cat" value={"Cookware"} onClick={(e) => handleCategory
                    (e.target.value)} /><label>Cookware</label></div>
                <div><input className="radio-cat" type="radio" name="cat" value={"Refrigeration"} onClick={(e) => handleCategory
                    (e.target.value)} /><label>Refrigeration</label></div>
                <div><input className="radio-cat" type="radio" name="cat" value={"Appliances"} onClick={(e) => handleCategory
                    (e.target.value)} /><label>Appliances</label></div>
                <div><input className="radio-cat" type="radio" name="cat" value={"Food Storage"} onClick={(e) => handleCategory
                    (e.target.value)} /><label>Food Storage</label></div>




                <hr></hr>
                <div><h4>Price</h4></div>
                <div><input type="radio" name="sort" onChange={handleSortPriceMinMax} />Price min to max</div>
                <div><input type="radio" name="sort" onChange={handleSortPriceMaxMin} />Price max to min</div>

                <hr></hr>
                <div><button onClick={clearFilter}>Reset filter</button></div>
            </div>
            <div className='productslist_category_right'>
                <div className="productslist_card_item">
                    {products.map(p => (
                        <div>
                            <ProductItem key={p.id} product={p} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    )
}
export default ProductsList