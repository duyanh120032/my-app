import React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Cart from "../pages/Cart";
import Product from "../pages/Product";

import ProductViewModal from "./ProductViewModal";

// import Routes from '../routes/Routes'
const layout = (props) => {
  return (
    <Router>
      <Header {...props} />
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:slug" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
      <Footer />
      <ProductViewModal />
    </Router>
  );
};

export default layout;
