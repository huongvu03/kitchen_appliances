import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
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
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
