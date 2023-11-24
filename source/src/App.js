import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/product'>PRODUCT</Link>
        <Link to='/'>Cart</Link>
        <Link to='/aboutus'></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
