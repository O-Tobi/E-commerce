export type State = {
    cart: Array<{ id: number; name: string; price: number }>; 
};

export type Action =
    | { type: "ADD_TO_CART"; item: { id: number; name: string; price: number } }
    | { type: "REMOVE_FROM_CART"; id: number };

export const initialState: State = {
    cart: [],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item],
            };

        case "REMOVE_FROM_CART": {
            const newCart = [...state.cart];
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(`Cannot remove product with id: ${action.id} as it does not exist in the cart.`);
            }

            return { ...state, cart: newCart };
        }

        default:
            console.error(`Unhandled action type: ${action}`);
            return state;
    }
};

export default reducer;
