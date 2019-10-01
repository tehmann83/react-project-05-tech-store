import React from "react";
import { ProductConsumer } from "../context/Context";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <ProductConsumer>
        {value => {
          {
            /* console.log(value) */
          }
          return (
            <>
              <Hero title="awesome gadgets" max="true">
                <Link to="/products" className="main-link" style={{margin: "2rem"}}>our products</Link>
              </Hero>
            </>
          );
        }}
      </ProductConsumer>
    </>
  );
}
