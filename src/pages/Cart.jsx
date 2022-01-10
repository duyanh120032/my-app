import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import productData from "../assets/fake-data/products";

import Helmet from "../components/Helmet";

import Button from "../components/Button";

import numberWithCommas from "../utils/numberWithCommas";

import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  

  const [cartProducts, setCartProducts] = useState([]);

  const [totalProducts, setTotalProducts] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsInfo(cartItems));
    setTotalProducts(cartItems.reduce((total, item) => total + Number(item.quantity), 0));
    setTotalPrice(
      cartItems.reduce((total, item) => total + Number(item.quantity) * Number(item.price), 0)
    );
    console.log(cartProducts)
  }, [cartItems]);
  return (
    <Helmet title="Giỏ Hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn Đang Có {totalProducts} Sản Phẩm Trong Giỏ Hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành Tiền</span>
              <span> {numberWithCommas(totalPrice)}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block">Đặt Hàng</Button>
            <Link to="/catalog">
              <Button size="block">Tiếp Tục Mua Hàng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {
            cartProducts.map((item, index) => (
              <CartItem key={index} item={item}/>
              
            )

            )
          }
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
