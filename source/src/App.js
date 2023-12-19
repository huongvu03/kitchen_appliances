
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
import Data from './components/Data';
import Register from './components/Register';
import BackToTopButton from './components/BackToTopButton';
import ModalConfirm from './components/ModalConfirm';
import Promotion from './components/Promotion';
import TermsOfUse from './components/TermsOfUse';
import Privacy from './components/Privacy';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetails';
import Feedback from './components/Feedback';
import FeedbackData from './components/FeedbackData';
import ManualDetail from './components/ManualDetail';
import NotFound from './components/NotFound';
import BlogList2 from './components/BlogList2';
import BlogDetails2 from './components/BlogDetails2';



function App() {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [filterSearch, setfilterSearch] = useState([]);
  const [cooks, setCooks] = useState([]);
  const [refridge, setRefridge] = useState([]);
  const [apps, setApps] = useState([]);
  const [foods, setFoods] = useState([]);
  const [carts, setCarts] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [filterblogs, setFilterBlogs] = useState([]);
  const [manuals, setManuals] = useState([]);
  const navigate = useNavigate('');
  const [blogs2, setBlogs2] = useState([]);


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
        setApps(productData3.filter(p => p.category === "Appliances").slice(1, 3));
        setFoods(productData4.filter(p => p.category === "Food Storage").slice(0, 2));

        //Blog 2
        const dataJson = await fetch('blogs2.json');
        const blogdata2 = await dataJson.json();
        setBlogs2(blogdata2);

      } catch (error) {
        console.log('error reading json');
      }
    };
    fetchData();
  }, []);

  //DATA BLOG
  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogsJson = await fetch('blogs.json');
        const blogsData = await blogsJson.json();
        setBlogs(blogsData);
        setFilterBlogs(blogsData);
        console.log(blogs);
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
    if (filterSearch.length > 0) {
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
  const handlePrice=(value)=>{
    if(value==="mintomax"){
      const sortedPrice = [...filterProducts].sort((a, b) => a.price - b.price);
      setFilterProducts(sortedPrice);
      setfilterSearch(sortedPrice);
    }else if(value==="maxtomin"){
      const sortedPrice = [...filterProducts].sort((a, b) => b.price - a.price);
      setFilterProducts(sortedPrice);
      setfilterSearch(sortedPrice);
    }
  }
  //************************************* RESET FILTER ***********************************
  const clearFilter = () => {
    setFilterProducts(products);
    // window.location.reload()
  };
  //************************************ ADD CART ************************************

  //sau khi click add button từ detail page thì sẽ gửi 1 object newProd .
  const sendqtyDetail = (newProd) => {
    console.log("newProdQty", newProd.quantity);
    const existingProduct = carts.find(item => item.id === newProd.id);
    //kiểm tra giỏ hàng có sản phẩm nào có trùng id với newProd.id 
    if (existingProduct) {
      //nếu trùng thì giỏ hàng có sản phẩm trùng id với newProd id  thì số lượng của item có trong giỏ hàng đó + thêm số lượng từ newProd
      const updatedCart = carts.map(item => item.id == newProd.id ? { ...item, quantity: item.quantity + newProd.quantity } : item);
      //sau đó cập nhật lại giỏ hàng
      setCarts(updatedCart);
    } else {
      //nếu ko có sản phẩm nào tồn tại thì sẽ add thẳng newProd vào giỏ hàng
      setCarts([...carts, { ...newProd }])
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
    const maxQtyProd = products.find(item => item.id == product.id);
    if (product.quantity < maxQtyProd.quantity) {
      const updatedCart = carts.map(item => item.id === product.id ? { ...item, quantity: Math.max(item.quantity + 1, 0) } : item);
      setCarts(updatedCart);
    }
  }
  //************************************  DELETE CART   ************************************ 
  const deleteCart = (product) => {
    const deletedCarts = carts.filter(item => item.id !== product.id);
    setCarts(deletedCarts);

  }

  //************************************** PAYMENT ************************** */
  const handlePaymentData = (paymentData) => {
    setCarts([]);
    navigate('/products');
  }
  // Log in
  const [errorLogin, setErrorLogin] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [textmodal, setTextModal] = useState('');
 
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
      setTextModal("Log in successful !");
      setShowModal(true);
      localStorage.setItem('username', checkUser.username);
      setErrorLogin(''); setErrorName(''); setErrorPass('');

    }
    else if (!checkUser.username || !checkUser.password) {
      setErrorName('Username is required');
      setErrorPass('Password is required');
      return false;
    }
    else {
      setErrorLogin('The Email or Password is incorrect. ');
      setErrorName(''); setErrorPass('');
      return false;
    } return false;
  }

  const handleClose = () => {
    setShowModal(false);
  

  if( localStorage.getItem('username')==="admin"){
      navigate (`/data`);
    }else{
      navigate (`/products`);
    }
  }

  // Reset Password
  const [errorReset, setErrorReset] = useState('');
  const handleReset = (checkReset) => {
    console.log(checkReset);
    const findEmail = users.find(e => e.email == checkReset.email);
    if (findEmail != null) {
      setTextModal('Please check your mailbox for reset password');
      setShowModal(true);
      setErrorReset('');
    } else if (!checkReset.email) {
      setErrorReset('Email is required.')
    }
    else {
      setTextModal('Email is not Register yet ! Please Register');
      setShowModal(true);
      setErrorReset('');
    }
  }

  // header bar search
  const [headersearchValue, setHeaderSearchValue] = useState('');
  const [error, setError] = useState('');
  const handleHeader = (value) => {
    setHeaderSearchValue(value);
    const datatSearch = products.filter(pro => pro.name.toLowerCase().includes(value.toLowerCase()));
    if (datatSearch == "") {
      setError('NOT FOUND ! Please view all products below !');
      setFilterProducts(products);
      navigate('/products');
    }
    else if (datatSearch) {
      setFilterProducts(datatSearch);
      setError('SEARCH RESULTS');
      navigate('/products');
    }
  }

  //function for register (Huong)
  const handleAdd = (onAddUser) => {
    setUsers([...users, onAddUser]);
  }



  return (
    <div className="App">
      <Header value={headersearchValue} handleSubmit={handleHeader} carts={carts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/promotion' element={<Promotion cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addToCart} />} />
        <Route path='/promotion#appliances' element={<Promotion cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addToCart} />} />
        <Route path='/promotion#cook' element={<Promotion cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addToCart} />} />
        <Route path='/promotion#fridge' element={<Promotion cook={cooks} app={apps} refridge={refridge} food={foods} addCart={addToCart} />} />


        <Route path="/products" element={
          <ProductsList products={filterProducts}
            searchValue={searchValue} handleSearch={handleSearch}
            handleCategory={handleCategory}
            handlePrice={handlePrice}
            clearFilter={clearFilter}
            addToCart={addToCart}
            error={error}
          />} />
        <Route path="/detail/:id" element={
          <div>
            <ProductDetail addToCart={addToCart} products={products} sendqtyDetail={sendqtyDetail}
            /></div>
        } />
        <Route path="/register" element={<Register onAddUser={handleAdd} />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/log-in' element={
          <div>
            <ModalConfirm show={showModal} handleClose={handleClose} textmodal={textmodal} />
            <Login checkLogin={checkLogin} errorLogin={errorLogin} errorName={errorName} errorPass={errorPass}
              resetPass={handleReset} errorReset={errorReset} />

          </div>
        } />
        <Route path='/cart' element={
          localStorage.getItem('username') ? (
            <>
              <CartList carts={carts} deleteCart={deleteCart} decreaseQty={decreaseQuantity} increaseQty={increaseQuantity} handlePaymentData={handlePaymentData} />

            </>
          ) : (< Navigate to='/log-in' />)
        } />

        <Route path='/feedback' element={<Feedback />} />
        <Route path='/feedbackdata' element={<FeedbackData />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/privacy-policy' element={<Privacy />} />
        <Route path="/blogdetail/:id" element={<BlogDetail blogs={blogs} />} />
        <Route path="/manualdetail/:id" element={<ManualDetail products={products} />} />
   
        <Route path="/notfound" element={<NotFound />} />
        {/* <Route path="/manualdetail" element={<ManualDetail  />} />  */}


        <Route path="/expert-tips" element={<Blog blogs={blogs} />} />
        <Route path="/blogs" element={<BlogList2 blogs={blogs2} />} />
        <Route path="/blog-detail2/:id" element={<BlogDetails2 />} />
      
        <Route path='/data' element={
        localStorage.getItem('username') ? (
        <><Data /></>) :
         (< Navigate to='/log-in' />)
        } /> 
      </Routes>
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default App;
