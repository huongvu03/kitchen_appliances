import ProductItem from "./ProductItem"
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import '../css/ProductList.css';

function ProductsList({ products }) {
    return (<div className="productslist_page container">
        <Carousel>
            <Carousel.Item>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTg0GOOxzFYbIhnGQ9S184ZDvZgPCoYUrAw&usqp=CAU"} width={"20%"} />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTg0GOOxzFYbIhnGQ9S184ZDvZgPCoYUrAw&usqp=CAU"} width={"20%"} />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhTg0GOOxzFYbIhnGQ9S184ZDvZgPCoYUrAw&usqp=CAU"} width={"20%"} />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div className='productslist container'>
            <div className='productslist_category_left'>
                <div><h4>Search</h4></div>
                <div><input type="text" placeholder="Search name" /></div>
                <div><h4>Filter</h4></div>
                <div><input type="checkbox" />Cookware</div>
                <div><input type="checkbox" />Refrigeration</div>
                <div><input type="checkbox" />Appliances</div>
                <div><input type="checkbox" />Food Storage</div>
                <hr></hr>
                <div><h4>Sort</h4></div>
                <div><input type="checkbox" />Price min to max</div>
                <div><input type="checkbox" />Price max to min</div>
                <div><input type="checkbox" />Name A-z</div>
                <hr></hr>
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