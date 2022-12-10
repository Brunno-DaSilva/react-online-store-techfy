import React, { Component } from "react";
import { ProductConsumer } from "../../ContextApi";
import Footer from "../Footer/Footer";
import Slideshow from "./Slideshow";
import HomeServices from "./HomeServices";
import HomeFeatured from "./HomeFeatured";

export default class Home extends Component {
  render() {
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
  }
}
