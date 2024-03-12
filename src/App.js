import './App.css';
import { Outlet, Routes, Route } from "react-router-dom";
import React, { useState ,useEffect} from'react';
import Nav from './components/Nav';
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ProductPage from './pages/ProductPage';

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};



function App() {

  const [products, setProducts] = useState([]);
  const [sel_product, setSel_product] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("store_data",data);
      });
  }, []);

  return (
    <div className="App">
      <Routes> 
        <Route path="/" element={<Layout />} >
          <Route index element={<MainPage products={products} setSel_product={setSel_product}/>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/product/:id" element={<ProductPage product={sel_product} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
