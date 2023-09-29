import React from "react";
import styled from "styled-components";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) => {
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <Carts>
            <h2 className="cartText">Shopping Cart</h2>
            <ul className="cartList">
                {cart.map((item) => (
                    <li className="carts" key={item.id}>
                       <div className="cart">
                           <img src={item.img} width={100} alt={item.name} />
                           <Buttons onClick={() => decreaseQuantity(item)}>-</Buttons>
                           <span>{item.quantity}</span>
                           <Buttons onClick={() => increaseQuantity(item)}>+</Buttons>
                           <span>{item.name} - ${item.price * item.quantity}</span>
                           <Buttons onClick={() => removeFromCart(item)}>Remove</Buttons>
                       </div>
                    </li>
                ))}
            </ul>
            <h3 className="cartText">Total Price: ${total}</h3>
        </Carts>
    );
};

export default Cart;

export const Buttons = styled.button`
  background: #434356;
  padding: 10px 14px;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  border-radius: 6px;

  &:hover {
    background: #626283;
  }

  &:active {
    background: #626283;
    transform: translateY(2px);
  }
`

const Carts = styled.div`
  .cartText {
    color: red;
    font-size: 24px;
    padding: 30px 120px;
  }

  .cartList {
    list-style: none;
    margin: 0 200px;
  }
  
  .cartList li {
    padding-top: 50px;
  }
  
  .cartList span {
    font-size: 20px;
    color: red;
    padding: 0 20px;
  }
  
  .cart img {
    position: relative;
    top: 30px;
    right: 30px;
  }
  
`
