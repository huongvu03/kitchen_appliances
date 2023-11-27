function ProductSearch({ searchValue, handleSearch }) {
    return (
        <input type="text" value={searchValue} placeholder="Search By Name"

            onChange={(e) => handleSearch(e.target.value)}

        />

    )
}
export default ProductSearch