
import './App.css';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState, } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductHome from './components/ProductHome';
import ProductDetail from './components/ProductDetails';
import CartList from './components/CartList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
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
        setApps(productData3.filter(p => p.category === "Appliances"));
        setFoods(productData4.filter(p => p.category === "Food Storage").slice(0, 2));

      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  //handle sign up email
  const [emailhomes, setEmailhome] = useState('');

  const handleSignUp = (newemail) => {
    if (newemail == "") {
      alert('email is required');
      return false;
    }
    else if (!/^[a-zA-Z0-9]{1,3}@[a-zA-Z]{1,3}.com$/.test(newemail)) {
      alert("email:exampleemail@*****.com");
      return false;
    }
    else {
      setEmailhome([...emailhomes, newemail]);
      alert('Sign up successful');
      navigate(`/producthome`);
      var data = `email:${newemail}`
      localStorage.setItem("data", data);
      return true;
    }
  }

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
  //sort price
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
    setFilterProducts(products);
    // window.location.reload()
  };

  const addToCart = (product) => {
    const existingProduct = carts.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCarts(updatedCart);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };
  const decreaseQuantity = (product) => {
    const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item);
    const filteredCart = updatedCart.filter(item => item.quantity > 0);
    setCarts(filteredCart);

  }
  const increaseQuantity = (product) => {
    const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity + 1, 0) } : item);
    setCarts(updatedCart);

  }
  const deleteCart = (product) => {
    const deletedCarts = carts.filter(item => item.id !== product.id);
    setCarts(deletedCarts);

  }

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
      <Header carts={carts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/producthome' element={<ProductHome cook={cooks} app={apps} refridge={refridge} food={foods} />} />
        <Route path="/products" element={
          <ProductsList products={filterProducts}
            searchValue={searchValue} handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin}
            clearFilter={clearFilter}
            addToCart={addToCart}
          />} />
        <Route path="/detail/:id" element={
          <div>
            <ProductDetail
            /></div>
        } />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/log-in' element={<Login checkLogin={checkLogin} errorLogin={errorLogin} />} />
        <Route path='/cart' element={<CartList carts={carts} deleteCart={deleteCart} decreaseQty={decreaseQuantity} increaseQty={increaseQuantity} />} />
      </Routes>
      <Footer onSignUp={handleSignUp} />
    </div>
  );
}

export default App;
