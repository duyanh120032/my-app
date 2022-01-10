import React,{useEffect, useState} from "react";

import productData from "../assets/fake-data/products";
import { useSelector, useDispatch } from "react-redux";

import  {remove}  from "../redux/product-modal/productModalSlice";

import ProductView from "./ProductView";

import Button from "./Button";

const ProductViewModal = () => {

  const productSlug = useSelector((state)=> state.productModal.value)
  console.log(productSlug)
  
  const dispatch = useDispatch()

  const [product, setProduct] = useState(undefined)
  // const product = productData.getProductBySlug("quan-jean-phong-cach-18");

  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug])
  return (
    <div className={`product-view___modal ${product === undefined ? "" : "active"}`}>
      <div className="product-view___modal__content">
        <ProductView product={product} />
        <div className="product-view___modal__content__close">
          <Button size="sm" onclick={() => dispatch(remove())}>Đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
