
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setFilterProducts(data);
      })
      .catch(error => console.log('error reading json', error));
  }, []);
  //search name
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (value) => {
    setSearchValue(value);
    const dataSearch = products.filter(pro => pro.name.toLowerCase().includes(value.toLowerCase()));
    setFilterProducts(dataSearch);
  }
  //filter category
  const handleCategory = (value) => {
    const newItems = products.filter((pro) => pro.category === value)
    setFilterProducts(newItems);
  }
  //sort
  const handleSortName = () => {
    const sortedProduct = [...filterProducts].sort((a, b) => a.name.localeCompare(b.name));
    setFilterProducts(sortedProduct);
  }
  const handleSortPriceMinMax = () => {
    const sortedPrice = [...filterProducts].sort((a, b) => a.price - b.price);
    setFilterProducts(sortedPrice);
  }
  const handleSortPriceMaxMin = () => {
    const sortedPrice = [...filterProducts].sort((a, b) => b.price - a.price);
    setFilterProducts(sortedPrice);
  }
  //reset filter
  const clearFilter = () => {
    //reload page xoa dc checkbox nhung cham
    //setfilter thi nhanh nhung ko xoa dc checkbox
    setFilterProducts(products);
    // window.location.reload()
  };
  return (
    <div className="App">
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/products'>PRODUCTS</Link>
        <Link to='/cook-create'>COOK & CREATE</Link>
        <Link to='/support'>SUPPORT</Link>
        <Link to='/about-us'>ABOUT US</Link>
        <Link to='/cart'>CART</Link>
        <Link to='/log-in'>LOG IN</Link>
        <Link to='#'>Hotline: 678 8888</Link>


      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={
          <div>

            <ProductsList products={filterProducts}
              searchValue={searchValue} handleSearch={handleSearch}
              handleCategory={handleCategory}
              handleSortName={handleSortName}
              handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin}
              clearFilter={clearFilter} /></div>

        } />
        <Route path='/log-in' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
