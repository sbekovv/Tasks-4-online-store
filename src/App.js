import React, { useReducer } from "react";
import {reducer, ActionTypes, initialState} from "./store";
import Product from "../src/component/Product";
import Cart from "../src/component/Cart";
import img1 from "../src/img/orange_342874121.jpg";
import img2 from "../src/img/close-up-of-a-bunch-of-red-and-juicy-grapes-on-white-background-C4092F.jpg";
import img3 from "../src/img/932927e24f8065dbedac0035af25b67d.png";

const products = [
    { id: 1, name: "Orange", price: 10, img: img1 },
    { id: 2, name: "Grape", price: 15, img: img2 },
    { id: 3, name: "Watermelon ", price: 20, img: img3 },
];

const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: ActionTypes.ADD_TO_CART, payload: product });
    };

    const removeFromCart = (product) => {
        dispatch({ type: ActionTypes.REMOVE_FROM_CART, payload: product });
    };

    const increaseQuantity = (product) => {
        dispatch({ type: ActionTypes.INCREASE_QUANTITY, payload: product });
    };

    const decreaseQuantity = (product) => {
        dispatch({ type: ActionTypes.DECREASE_QUANTITY, payload: product });
    };

    return (
        <div>
           <center> <h1 style={{color:'red'}}>Online Store</h1></center>
            <div className="products">
                {products.map((product) => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>

            <Cart cart={state.cart} removeFromCart={removeFromCart} decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} />
        </div>
    );
};

export default App;
