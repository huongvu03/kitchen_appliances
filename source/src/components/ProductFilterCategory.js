
function ProductFilterCategory({ handleCategory }) {
    return (
        <><div><input className="radio-cat" type="radio" name="cat" value={"All"} onClick={(e) => handleCategory
            (e.target.value)} />All</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Cookware"} onClick={(e) => handleCategory
                (e.target.value)} />Cookware</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Refrigeration"} onClick={(e) => handleCategory
                (e.target.value)} />Refrigeration</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Appliances"} onClick={(e) => handleCategory
                (e.target.value)} />Appliances</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Food Storage"} onClick={(e) => handleCategory
                (e.target.value)} />Food Storage</div></>
    )
}
export default ProductFilterCategory;