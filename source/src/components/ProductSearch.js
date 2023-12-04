function ProductSearch({ searchValue, handleSearch }) {
    return (
        <div>
            <input type="text" value={searchValue} placeholder="Search By Name" width={'30px'}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    )
}
export default ProductSearch