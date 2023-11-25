import ProductItem from "./ProductItem"

function ProductsList({ products }) {
    return (
        <div className='productslist container'>
            <div className='productslist_category_left'>
                <h3 className='productslist_category_title'>cook</h3>
            </div>
            <div className='productslist_category_right'>
                <ul >
                    {products.map(p => (
                        <div>
                            <ProductItem key={p.id} product={p} />
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default ProductsList