function ProductSortPrice({ handleSortPriceMaxMin, handleSortPriceMinMax }) {
    return (
        <> <div><input type="radio" name="sort" onChange={handleSortPriceMinMax} />Price min to max</div>
            <div><input type="radio" name="sort" onChange={handleSortPriceMaxMin} />Price max to min</div></>
    )
}
export default ProductSortPrice;