import React from "react";
import { ProductConsumer } from "../../ContextApi";
import Footer from "../Footer/Footer";
import Slideshow from "./Slideshow";
import HomeServices from "./HomeServices";
import HomeFeatured from "./HomeFeatured";

const Home = () => {
  return (
    <ProductConsumer>
      {(value) => {
        return (
          <div className="home-container">
            <Slideshow />
            <HomeServices />
            <HomeFeatured />
            <Footer />
          </div>
        );
      }}
    </ProductConsumer>
  );
};

export default Home;
