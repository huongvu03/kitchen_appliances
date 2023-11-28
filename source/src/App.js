
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
// import ProductHome from './components/ProductHome';

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [refridge, setRefridge] = useState([]);
  const [apps, setApps] = useState([]);
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //đọc file json thứ nhất
        const productJson = await fetch('products.json');
        const productData = await productJson.json();
        setProducts(productData);
        setFilterProducts(productData);
        const productData1 = productData;
        const productData2 = productData;
        const productData3 = productData;
        const productData4 = productData;

        setCooks(productData1.filter(p => p.category === "Cookware").slice(0, 1));
        setRefridge(productData2.filter(p => p.category === "Refrigeration").slice(0, 1));
        setApps(productData3.filter(p => p.category === "Appliances").slice(0, 1));
        setFoods(productData4.filter(p => p.category === "Food Storage").slice(0, 1));

      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
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
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path='/producthome' element={<ProductHome cook={cooks} app={apps} refridge={refridge} food={foods} />} /> */}
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
      <Footer />
    </div>
  );
}

export default App;
