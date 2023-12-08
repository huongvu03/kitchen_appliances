
import './App.css';
import { Route, Routes, Link, useNavigate, Navigate } from 'react-router-dom';
import Home from './components/Home';
import { useEffect, useState, } from 'react';
import ProductsList from './components/ProductList';
import Login from './components/LogIn';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetails';
import CartList from './components/CartList';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ProductHome from './components/ProductHome';
import EmailData from './components/EmailData';
import Register from './components/Register';
import BackToTopButton from './components/BackToTopButton';


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


  //************************************ SEARCH NAME **********************************
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
  //************************************ SORT PRICE **********************************
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
  //************************************* RESET FILTER ***********************************
  const clearFilter = () => {
    setFilterProducts(products);
    // window.location.reload()
  };
  //************************************ ADD CART ************************************

  //sau khi click add button từ detail page thì sẽ gửi 1 object newProd .
  const sendqtyDetail=(newProd)=>{
    console.log("newProdQty",newProd.quantity);
    const existingProduct = carts.find(item => item.id === newProd.id);
    //kiểm tra giỏ hàng có sản phẩm nào có trùng id với newProd.id 
    if(existingProduct){
      //nếu trùng thì giỏ hàng có sản phẩm trùng id với newProd id  thì số lượng của item có trong giỏ hàng đó + thêm số lượng từ newProd
      const updatedCart=carts.map(item=> item.id == newProd.id ? {...item, quantity: item.quantity + newProd.quantity} :item);
      console.log("carts",carts);
      console.log("updatedcart",updatedCart);
      //sau đó cập nhật lại giỏ hàng
      setCarts(updatedCart);
    }else{
      //nếu ko có sản phẩm nào tồn tại thì sẽ add thẳng newProd vào giỏ hàng
      setCarts([...carts,{...newProd}])
    }
  }
  const addToCart = (product) => {
    const existingProduct = carts.find(item => item.id === product.id);
    if (existingProduct) {
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      setCarts(updatedCart);
    } else {
      setCarts([...carts, { ...product, quantity: 1 }]);
    }
  };
  //************************************ DECREASE QUANTITY CART ************************************
  const decreaseQuantity = (product) => {
    const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item);
    const filteredCart = updatedCart.filter(item => item.quantity > 0);
    setCarts(filteredCart);
  }
  //************************************ INCREASE QUANTITY CART ************************************
  const increaseQuantity = (product) => {
    const maxQtyProd=products.find(item=>item.id== product.id);
    if(product.quantity<maxQtyProd.quantity){
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity + 1 , 0) } : item);
      setCarts(updatedCart);
    }
  }
  //************************************  DELETE CART   ************************************ 
  const deleteCart = (product) => {
    const deletedCarts = carts.filter(item => item.id !== product.id);
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
      navigator('/products');

    } else if (!checkUser.username || !checkUser.password) {
      setErrorLogin('Email and Password is required');
      return false;
    }
    else {
      setErrorLogin('The Email or Password is incorrect. ');
      return false;
    } return true;

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

  //header bar search
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

  //function for register (Huong)
  const handleAdd = (onAddUser) => {
    setUsers([...users, onAddUser]);
  }

  return (
    <div className="App">
      <Header 
      checkHeader={handleHeader} 
      carts={carts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/promotion' element={<ProductHome cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addToCart} />} />
        <Route path="/products" element={
          <ProductsList products={filterProducts}
            searchValue={searchValue} handleSearch={handleSearch}
            handleCategory={handleCategory}
            handleSortPriceMinMax={handleSortPriceMinMax} handleSortPriceMaxMin={handleSortPriceMaxMin}
            clearFilter={clearFilter}
            addToCart={addToCart} 
            error={error}
          />} />
        <Route path="/detail/:id" element={
          <div>
            <ProductDetail  addToCart={addToCart} products={products} sendqtyDetail={sendqtyDetail}
            /></div>
        } />
        <Route path="/register" element={<Register onAddUser={handleAdd} />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/log-in' element={<Login checkLogin={checkLogin} errorLogin={errorLogin} resetPass={handleReset} />} />
        <Route path='/cart' element={
          
        <CartList carts={carts} deleteCart={deleteCart} decreaseQty={decreaseQuantity} increaseQty={increaseQuantity} />

        } />

        <Route path='/email-data' element={<EmailData />} /> {/* // storeage data */}
      </Routes>
      <BackToTopButton/>
      <Footer />
    </div>
  );
}

export default App;
