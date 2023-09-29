import React from "react";
import {Buttons} from "./Cart";
import styled from "styled-components";

const Product = ({product, addToCart}) => {
    return (
        <Products>
            <div className="product">
                <div className="productBox">
                       <img src={product.img} width={200} height={150} alt={product.name}/>
                       <h3>{product.name}</h3>
                       <p>${product.price}</p>
                       <Buttons onClick={() => addToCart(product)}>Add to Cart</Buttons>
                </div>
            </div>
        </Products>
    );
};

export default Product;


const Products = styled.div`
  .product {
    margin: 100px 300px;
    display: flex;
  }

  .productBox {
    width: 250px;
    height: 300px;
  }

  .productBox img {
    margin: 20px 25px;
  }

  .productBox h3 {
    font-size: 19px;
    color: green;
    text-align: center;
  }

  .productBox p {
    font-size: 18px;
    color: black;
    text-align: center;
    padding-top: 20px;
  }

  .productBox button {
    margin: 20px 75px;
  }
`;
