
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
        <Route path="/products" element={<ProductsList products={filterProducts} />} />
        <Route path='/log-in' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
