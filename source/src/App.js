
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState, } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
// import ProductDetail from './components/ProductDetails';
import CartList from './components/CartList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductHome from './components/ProductHome';
import EmailData from './components/EmailData';


function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filterSearch, setfilterSearch] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [refridge, setRefridge] = useState([]);
  const [apps, setApps] = useState([]);
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);
  const navigate = useNavigate('');

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
  const addCart = (pro) => {
    setCarts([...carts, pro]);
  };
  const deleteCart = (id) => {
    const deletedCarts = carts.filter(c => c.id !== id);
    setCarts(deletedCarts);
  }

  // Log in
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
      alert('Log in successfull !')
      localStorage.setItem('username', checkUser.username);
      setErrorLogin('');
      navigator('/');
     
    } else if( !checkUser.username || !checkUser.password) {
      setErrorLogin('Email and Password is required');
      return false;
    }
    else {
      setErrorLogin('The Email or Password is incorrect. ');
      return false;
    }        return true;

  }  

  // Reset Password
  const handleReset = (checkReset) => {
    console.log(checkReset);
    const findEmail = users.find(e => e.email == checkReset.email);
    if (findEmail != null) {
      alert('Please check your mailbox for reset password');
    } else {
      alert('Email is not Register yet ! Please Register');
    }
  }

  // header bar search
  const [error, setError] = useState('');
  const handleHeader = (data) => {
    const datatSearch = products.filter(pro => pro.name.toLowerCase().includes(data.value.toLowerCase()));
    if (datatSearch == "") {
      setError('Not Found ! Please view all products below !');
      setFilterProducts(products);
      navigate('/products');

    }
    else if (datatSearch) {
      setFilterProducts(datatSearch);
      setError('Searching Result');
      navigate('/products');
    }
  }
  return (
    <div className="App">
      <Header checkHeader={handleHeader} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/promotion' element={<ProductHome cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addCart} />} />
        <Route path="/products" element={
          <ProductsList products={filterProducts}
            searchValue={searchValue} handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin}
            clearFilter={clearFilter}
            addCart={addCart} error={error}
          />} />
        {/* <Route path="/detail/:id" element={
          <div>
            <ProductDetail
            /></div>
        } /> */}
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/log-in' element={<Login checkLogin={checkLogin} errorLogin={errorLogin} resetPass={handleReset} />} />
        <Route path='/cart' element={<CartList carts={carts} deleteCart={deleteCart} />} />

        <Route path='/email-data' element={<EmailData/>} /> {/* // storeage data */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
