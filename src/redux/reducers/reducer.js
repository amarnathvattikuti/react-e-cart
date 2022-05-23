//import { addItem } from "../actions/actions";
const INT_CART = {
    carts: []
}

const Cardreducer = (state = INT_CART, action) => {

    switch (action.type) {
        case "ADD_CART":
            const indexitem = state.carts.findIndex((cartitem) => cartitem.id === action.payload.id);
            if (indexitem >= 0) {
                state.carts[indexitem].qnty += 1;
                return {
                    ...state, carts: [...state.carts]
                }

            }
            else {
                const basicQnty = { ...action.payload, qnty: 1 }
                return {
                    ...state, carts: [...state.carts, basicQnty]
                }
            }


        case "REDUCE_CART":
            const redCART = state.carts.findIndex((cart) => cart.id === action.payload.id);
            if (state.carts[redCART].qnty >= 1) {
                state.carts[redCART].qnty -= 1
                return {
                    ...state, carts: [...state.carts]
                }
            }
            else if (state.carts[redCART].qnty === 1) {
                const datadlt = state.carts.filter((ele) => ele.id !== action.payload);

                return {
                    ...state, carts: datadlt
                }
            }
            break


        case "DELETE_CART":
            const datadlt = state.carts.filter((ele) => ele.id !== action.payload);

            return {
                ...state, carts: datadlt
            }

        case "EMPTY_CART":
            return {
                ...state, carts: []
            }

        default:
            return state
    }

}

export default Cardreducer;