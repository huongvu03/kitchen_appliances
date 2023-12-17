import"../css/ProductFilterCategory.css"
function ProductFilterCategory({ handleCategory }) {
    return (
    <div>
        <div className="productfilter_category_full">
            <div><input className="radio-cat" type="radio" name="cat" value={"All"} onClick={(e) => handleCategory
            (e.target.value)} />All</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Cookware"} onClick={(e) => handleCategory
                (e.target.value)} />Cookware</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Refrigeration"} onClick={(e) => handleCategory
                (e.target.value)} />Refrigeration</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Appliances"} onClick={(e) => handleCategory
                (e.target.value)} />Appliances</div>
            <div><input className="radio-cat" type="radio" name="cat" value={"Food Storage"} onClick={(e) => handleCategory
                (e.target.value)} />Food Storage</div>
        </div>
            <div className="productfilter_category_tablet">
            <select id="category" onChange={(e) => handleCategory(e.target.value)}>
                <option value="All">All</option>
                <option value="Cookware">Cookware</option>
                <option value="Refrigeration">Refrigeration</option>
                <option value="Appliances">Appliances</option>
                <option value="Food Storage">Food Storage</option>
            </select>
             </div>
                
                
     </div>
    )
}
export default ProductFilterCategory;