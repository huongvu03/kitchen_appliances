
import './App.css';

import { Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState, } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductHome from './components/ProductHome';
import ProductDetail from './components/ProductDetails';

function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filterSearch, setfilterSearch] = useState([]);
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

        setCooks(productData1.filter(p => p.category === "Cookware").slice(0, 2));
        setRefridge(productData2.filter(p => p.category === "Refrigeration").slice(0, 2));
        setApps(productData3.filter(p => p.category === "Appliances").slice(0, 2));
        setFoods(productData4.filter(p => p.category === "Food Storage").slice(0, 2));

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
    if (filterSearch) {
      const dataSearch = filterSearch.filter(pro => pro.name.toLowerCase().includes(value.toLowerCase()));
      setFilterProducts(dataSearch);
    } else {
      const dataSearch = products.filter(pro => pro.name.toLowerCase().includes(value.toLowerCase()));
      setFilterProducts(dataSearch);
    }
  }
  //filter category
  const handleCategory = (value) => {
    if (value === "All") {
      setFilterProducts(products);
      setfilterSearch(products);
    } else {
      const newItems = products.filter((pro) => pro.category === value)
      setFilterProducts(newItems);
      setfilterSearch(newItems);
    }
  }
  const handleSortPriceMinMax = () => {
    const sortedPrice = [...filterProducts].sort((a, b) => a.price - b.price);
    setFilterProducts(sortedPrice);
    setfilterSearch(sortedPrice);
  }
  const handleSortPriceMaxMin = () => {
    const sortedPrice = [...filterProducts].sort((a, b) => b.price - a.price);
    setFilterProducts(sortedPrice);
    setfilterSearch(sortedPrice);
  }
  //reset filter
  const clearFilter = () => {
    //reload page xoa dc checkbox nhung cham
    //setfilter thi nhanh nhung ko xoa dc checkbox


    // setFilterProducts(products);


    window.location.reload()
  };

  /* CODE cua Tram */
  const [errorLogin, setErrorLogin] = useState('');
  const [users, setUsers] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    fetch('user.json')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        console.log(users);
      })
      .catch(error => console.log('error reading json', error));
  }, []);

  const checkLogin = (checkUser) => {
    console.log(checkUser);
    const findUser = users.find(u => u.username == checkUser.username
      && u.password == checkUser.password);
    if (findUser != null) {
      //tìm thấy user
      console.log("login thanh cong");
      //đk localStorage
      //localStorage.getItem('username') ? () : () >>>>> điều kiện (nếu xảy ra) : (k xảy ra)
      localStorage.setItem('username', checkUser.username);
      //chuyển đến route product
      setErrorLogin('');
      navigator('/');
    } else {
      //không tìm thấy user
      console.log("login khong thanh cong");
      setErrorLogin('invalid username or password');
    }
  }
  const deleteLocalStorage = () => {
    localStorage.clear();
  }
  /* ------------------- */

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/producthome' element={<ProductHome cook={cooks} app={apps} refridge={refridge} food={foods} />} />
        <Route path="/products" element={
          <ProductsList products={filterProducts}
            searchValue={searchValue} handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin}
            clearFilter={clearFilter} />} />
        <Route path="/detail/:id" element={
          <div>
            <ProductDetail
            /></div>
        } />
        <Route path='/log-in' element={<Login checkLogin={checkLogin} errorLogin={errorLogin} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
