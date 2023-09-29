export const initialState = {
    cart: [],
};
export const ActionTypes = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_FROM_CART: "REMOVE_FROM_CART",
    INCREASE_QUANTITY: "INCREASE_QUANTITY",
    DECREASE_QUANTITY: "DECREASE_QUANTITY",
};
export const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],
            };
        case ActionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case ActionTypes.INCREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            };
        case ActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
                ).filter((item) => item.quantity > 0),
            };
        default:
            return state;
    }
};

