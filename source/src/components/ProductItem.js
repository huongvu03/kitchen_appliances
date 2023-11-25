function ProductItem({ product }) {

    return (
        <div className="productitem container">
            <div>
                <img src={product.image[0]} width="100px" height="100px" />
            </div>
            <div>{product.id}</div>
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>



        </div>


    )
}
export default ProductItem;