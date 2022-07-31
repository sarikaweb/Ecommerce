import './App.css';
import NavbarFunc from './component/Navbar';
import Home from './component/Home';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Products from './component/products';
import Product from './component/product';

function App() {
  return (
    <>
    <NavbarFunc />
   
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/products" element={<Products />} />
    <Route exact path="/products/:id" element={<Product />} />
    </Routes>
  
 
    </>
  );
}

export default App;
