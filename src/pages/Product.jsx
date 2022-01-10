import React from "react";
import { useParams } from "react-router-dom";

import Helmet from "../components/Helmet";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
import ProductView from "../components/ProductView";

import productData from "../assets/fake-data/products";

import Section, { SectionTitle, SectionBody } from "../components/Section";

const Product = (props) => {
  const product = productData.getProductBySlug(useParams().slug);
  const relatedProducts = productData.getProducts(8);
  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám Phá Thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((product, index) => (
              <ProductCard
                key={index}
                img01={product.image01}
                img02={product.image02}
                name={product.title}
                price={Number(product.price)}
                slug={product.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
