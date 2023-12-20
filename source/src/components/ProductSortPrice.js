import"../css/ProductSortPrice.css"
function ProductSortPrice({handlePrice}) {
    return (
        <div> 
            <div className="productsort_price_full">
                <div><input type="radio" name="sort" value={"mintomax"}onClick={(e) => handlePrice
                (e.target.value)} /> Low - High </div>
                <div><input type="radio" name="sort" value={"maxtomin"} onClick={(e) => handlePrice
                (e.target.value)} /> High - Low </div>
            </div>
            
            <div className="productsort_price_tablet">
            <select id="sort" onChange={(e)=>handlePrice(e.target.value)} >
                <option value="mintomax"> Min to Max</option>
                <option value="maxtomin">Max to Min</option>
            </select>
            </div>
        </div>
    )
}
export default ProductSortPrice;