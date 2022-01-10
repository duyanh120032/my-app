import React from "react";
import { Link } from "react-router-dom";

import Helmet from "../components/Helmet";

import HeroSlider from "../components/HeroSlider";

import Section, { SectionTitle, SectionBody } from "../components/Section";

import PolicyCard from "../components/PolicyCard";

import Grid from "../components/Grid";

import heroSliderData from "../assets/fake-data/hero-slider";

import policy from "../assets/fake-data/policy";

import productData from "../assets/fake-data/products";

import ProductCard from "../components/ProductCard";
const Home = () => {
  return (
    <Helmet title="Trang Chủ">
      {/* hero slider */}
      <HeroSlider data={heroSliderData} control={true} auto={true} />
      {/* end hero slider */}
      {/* policy section */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => (
              <Link to="/policy" key={index}>
                <PolicyCard
                  name={item.name}
                  description={item.description}
                  icon={item.icon}
                />
              </Link>
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/*end  policy section */}
      {/* best selling section */}
      <Section>
        <SectionTitle>top sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(4).map((product, index) => (
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
      {/* end best selling section */}
      {/* new arrival section */}
      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(8).map((product, index) => (
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

      {/*end new arrival section */}
    </Helmet>
  );
};

export default Home;
