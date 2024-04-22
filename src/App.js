// import './App.css';

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import CartPage from "./Pages/CartPage/CartPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/productDetails/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
           


    </div>
  );
}

export default App;
